# JEE Mains Test Portal

This project is a JEE Mains test portal that allows users to upload a PDF containing exam questions, typically in the form of images or text. The portal then converts the PDF pages to images, displays each question as an image for students to answer, times the test, and calculates results based on correct answers. This setup uses an Express.js backend to handle PDF processing and a React frontend built with Vite.

## Features
- PDF upload and processing
- Automatic conversion of PDF pages to images
- Question-by-question display with answer inputs
- Timed test functionality with countdown
- Real-time answer saving and score calculation

## Tech Stack
- **Backend**: Node.js, Express, pdf2pic (for PDF-to-image conversion)
- **Frontend**: React with Vite
- **Image Processing**: Sharp (for image handling if further image slicing is needed)

## Setup and Installation
cd server
npm install express cors pdf-lib pdf2pic sharp multer
cd ../client
npm install
npm install react-router-dom
cd ../server
node index.js
cd ../client
npm run dev

