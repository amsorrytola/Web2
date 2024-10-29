import React, { useEffect, useState } from 'react';
import Questions from '../components/Questions';
import Timer from '../components/Timer';

function TestPage() {
    const [images, setImages] = useState([]);
    const timeDuration = JSON.parse(localStorage.getItem('timeDuration')) || 180;

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch('/api/tests/getImages'); // This endpoint fetches the image paths from the backend
            const data = await res.json();
            setImages(data.images);
        };
        fetchImages();
    }, []);

    return (
        <div>
            <Timer duration={timeDuration} />
            <Questions images={images} />
        </div>
    );
}

export default TestPage;
