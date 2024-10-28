
import React from 'react';
import './index.css'; 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <App />
)
