const pdfParse = require('pdf-parse');
const fs = require('fs');

const uploadPdf = async (req, res) => {
    const pdfBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(pdfBuffer);
    const questions = extractQuestions(data.text);
    res.json({ success: true, questions });
};

const submitTest = (req, res) => {
    const { studentAnswers, questions, markingScheme } = req.body;
    let score = 0;
    const results = questions.map((q, index) => {
        const isCorrect = studentAnswers[index] === q.correctAnswer;
        score += isCorrect ? markingScheme.correct : markingScheme.incorrect;
        return { question: q.question, isCorrect };
    });
    res.json({ score, results });
};

function extractQuestions(pdfText) {
    const questions = [];
    const lines = pdfText.split('\n');
    lines.forEach(line => {
        if (line.startsWith("Q")) {
            questions.push({ question: line });
        }
    });
    return questions;
}

module.exports = { uploadPdf, submitTest };
