const express = require('express');
const multer = require('multer');
const { uploadPdf } = require('../controllers/pdfController');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('testPdf'), uploadPdf);
router.get('/getImages', (req, res) => {
    // Serve paths to the saved images
    const images = fs.readdirSync(path.join(__dirname, '../uploads/questions')).map(file => `/uploads/questions/${file}`);
    res.json({ images });
});

module.exports = router;
