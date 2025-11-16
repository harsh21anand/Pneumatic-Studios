const ProjectRequest = require('../models/ProjectRequest');

// POST /api/project-requests
const createProjectRequest = async (req, res) => {
  try {
    const formData = req.body;

    // Quick manual required check (optional)
    const requiredFields = ['companyProjectName', 'productStage', 'timeline'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        errors: missingFields.reduce((acc, field) => {
          acc[field] = `${field} is required`;
          return acc;
        }, {})
      });
    }

    // Save to DB (Mongoose full validation runs here)
    const newRequest = await ProjectRequest.create(formData);

    return res.status(201).json({
      message: 'Project request submitted successfully!',
      data: newRequest
    });

  } catch (error) {
    console.error('Error saving project request:', error);

    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = {};

      for (const key in error.errors) {
        errors[key] = error.errors[key].message;
      }

      return res.status(400).json({
        message: 'Validation failed — please correct the errors.',
        errors
      });
    }

    // Wrong type errors
    if (error.name === 'CastError') {
      return res.status(400).json({
        message: 'Invalid data format',
        field: error.path
      });
    }

    // Unknown server issue
    return res.status(500).json({
      message: 'Internal server error while saving request'
    });
  }
};

module.exports = { createProjectRequest };
