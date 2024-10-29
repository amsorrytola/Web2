import React, { useEffect, useState } from 'react';

function Questions({ images }) {
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (index, answer) => {
        setAnswers((prev) => ({ ...prev, [index]: answer }));
        localStorage.setItem('answers', JSON.stringify({ ...answers, [index]: answer }));
    };

    return (
        <div>
            {images.map((imgPath, index) => (
                <div key={index} className="question">
                    <img src={imgPath} alt={`Question ${index + 1}`} />
                    <input
                        type="text"
                        placeholder="Your Answer"
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Questions;
