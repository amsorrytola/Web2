const express = require('express');
const cors = require('cors');
const path = require('path');
const testRoutes = require('./routes/testRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend access
app.use(express.json());

// Serve static files from the 'uploads/questions' directory
app.use('/uploads/questions', express.static(path.join(__dirname, 'uploads/questions')));

// Routes
app.use('/api/tests', testRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
