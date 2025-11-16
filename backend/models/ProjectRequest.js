const mongoose = require('mongoose');

const projectRequestSchema = new mongoose.Schema({

  companyProjectName: {
    type: String,
    required: [true, 'Company/Project name is required'],
    trim: true,
    maxlength: [100, 'Name too long (max 100 chars)']
  },

  websiteSocialLink: {
    type: String,
    trim: true,
    default: '',
    match: [/^https?:\/\/.*$/i, 'Must be a valid URL']
  },

  explorations: {
    type: [String],
    enum: {
      values: [
        'Brand Strategy & Identity',
        'UI/UX Design',
        'Campaign Launch',
        'Marketing & Growth'
      ],
      message: '{VALUE} is not a valid exploration type'
    },
    validate: {
      validator: function (explorations) {
        return this.productStage === 'Live Product/Expanding'
          ? explorations.length > 0
          : true;
      },
      message: 'At least one exploration is required for live products'
    }
  },

  productStage: {
    type: String,
    enum: {
      values: ['Early Idea', 'Live Product/Expanding'],
      message: '{VALUE} is not a valid product stage'
    },
    required: true
  },

  hopedAchievement: {
    type: String,
    trim: true,
    default: '',
    maxlength: [500, 'Achievement description too long (max 500 chars)']
  },

  timeline: {
    type: String,
    enum: {
      values: [
      'ASAP (within 1-2 months)',
      'Near Future (3-6 months)',
      'Later Exploratory'
    ],
      message: '{VALUE} is not a valid timeline'
    },
    required: true
  },

  budgetRange: {
    type: String,
    trim: true,
    default: '',
    match: [
      /^\$?[\d,]+(\.\d{2})?\s*-\s*\$?[\d,]+(\.\d{2})?$/i,
      'Budget must be in range format (e.g., "$5,000 - $10,000")'
    ]
  },

  additionalInfo: {
    type: String,
    trim: true,
    default: '',
    maxlength: [1000, 'Additional info too long (max 1000 chars)']
  },

  submittedAt: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

// Cross-field validation
projectRequestSchema.pre('validate', function (next) {
  if (
    this.timeline === 'ASAP (within 1-2 months)' &&
    !this.hopedAchievement.trim()
  ) {
    this.invalidate(
      'hopedAchievement',
      'Clear achievement goals required for ASAP timelines'
    );
  }
  next();
});

module.exports = mongoose.model('ProjectRequest', projectRequestSchema);
