import React, { useState, useEffect } from 'react';

function Timer({ duration }) {
    const [timeLeft, setTimeLeft] = useState(duration * 60);

    useEffect(() => {
        if (timeLeft <= 0) {
            window.location.href = '/result';
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            Time Left: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </div>
    );
}

export default Timer;
