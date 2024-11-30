const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const componentRoutes = require('./routes/componentRoutes');

dotenv.config();

const app = express();

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse JSON bodies

// Routes
app.use('/api', componentRoutes);  // All routes prefixed with /api

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'AeroTrack API is running' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});