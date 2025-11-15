const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/project_requests_db', {
      serverSelectionTimeoutMS: 5000, // Faster connect timeout
      bufferCommands: false // Disable buffering (no queueing on errors)
      // Removed bufferMaxEntries—unsupported/deprecated
    });
    console.log(`✅ MongoDB connected to: ${conn.connection.host}`);
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit if DB fails
  }
};

mongoose.connection.on('error', err => console.error('DB error:', err));
mongoose.connection.on('disconnected', () => console.log('DB disconnected'));

module.exports = connectDB;