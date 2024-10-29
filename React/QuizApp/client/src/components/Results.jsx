import React, { useEffect, useState } from 'react';

function Results({ questions }) {
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const answers = JSON.parse(localStorage.getItem('answers')) || {};
        const correctAnswers = questions.map((q, index) => {
            const isCorrect = answers[index] === q.correctAnswer;
            return { question: q.question, isCorrect };
        });
        setResults(correctAnswers);
        setScore(correctAnswers.filter((res) => res.isCorrect).length * 4);  // Assuming +4 for correct
    }, [questions]);

    return (
        <div>
            <h2>Your Score: {score}</h2>
            {results.map((result, index) => (
                <div key={index}>
                    <p>{result.question}</p>
                    <p>{result.isCorrect ? "Correct" : "Incorrect"}</p>
                </div>
            ))}
        </div>
    );
}

export default Results;
