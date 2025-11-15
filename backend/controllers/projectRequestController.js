const ProjectRequest = require('../models/ProjectRequest');

// POST /api/project-requests - Save form data
const createProjectRequest = async (req, res) => {
  try {
    const formData = req.body;

    // Optional: Light pre-check (Mongoose will catch most anyway)
    if (!formData.companyProjectName || !formData.productStage || !formData.timeline) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        errors: { companyProjectName: 'Required', productStage: 'Required', timeline: 'Required' } 
      });
    }

    const newRequest = new ProjectRequest(formData);
    await newRequest.save(); // Triggers schema validation

    res.status(201).json({
      message: 'Project request submitted successfully!',
      data: newRequest // Or sanitize: omit sensitive fields if needed
    });
  } catch (error) {
    console.error('Error saving project request:', error.name, error.message);

    if (error.name === 'ValidationError') {
      // Format Mongoose errors for frontend (per-field)
      const errors = {};
      Object.keys(error.errors).forEach(key => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ 
        message: 'Validation failed—please check the form', 
        errors 
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({ 
        message: 'Invalid data type provided' 
      });
    }

    // Generic server error (e.g., DB connection)
    res.status(500).json({ message: 'Server error while saving request' });
  }
};

module.exports = { createProjectRequest };