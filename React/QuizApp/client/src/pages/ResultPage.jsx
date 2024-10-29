import React, { useEffect, useState } from 'react';
import Results from '../components/Results';

function ResultPage() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        setQuestions(storedQuestions);
    }, []);

    return (
        <div>
            <h1>Results</h1>
            <Results questions={questions} />
        </div>
    );
}

export default ResultPage;
