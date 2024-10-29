const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const { fromPath } = require('pdf2pic');
const sharp = require('sharp');

const outputDir = path.resolve(__dirname, '../uploads/questions');

async function convertPdfToImages(filePath) {
    const pdf = await PDFDocument.load(fs.readFileSync(filePath));
    const numPages = pdf.getPageCount();
    const options = {
        density: 200,            // Image quality
        saveFilename: "question",
        savePath: outputDir,
        format: "png"
    };

    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    const images = [];
    const converter = fromPath(filePath, options);
    for (let i = 1; i <= numPages; i++) {
        const imagePath = await converter(i);
        images.push(imagePath.path);
    }

    return images;
}

async function uploadPdf(req, res) {
    try {
        const images = await convertPdfToImages(req.file.path);
        res.json({ success: true, images });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to process PDF' });
    }
}

module.exports = { uploadPdf };
