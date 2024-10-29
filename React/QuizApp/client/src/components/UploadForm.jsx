import React, { useState } from 'react';

function UploadForm() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('testPdf', file);

        const response = await fetch('/api/tests/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        localStorage.setItem('questions', JSON.stringify(data.questions));
        window.location.href = '/test';
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="application/pdf" />
            <button onClick={handleUpload}>Upload PDF</button>
        </div>
    );
}

export default UploadForm;
