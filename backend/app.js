const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db'); // Await this

const app = express();

// Middleware (body parsing fix for TypeError)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const projectRequestRoutes = require('./routes/projectRequests');
app.use('/api/project-requests', projectRequestRoutes);

// Health check
app.get('/', (req, res) => res.json({ message: 'Backend alive!' }));

// Start server async
const startServer = async () => {
  try {
    await connectDB(); // Wait for DB before anything
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();