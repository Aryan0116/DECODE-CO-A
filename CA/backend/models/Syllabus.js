const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({
  chapterId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    required: true
  },
  topics: [
    {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      objectives: [String],
      keyPoints: [String],
      resources: [
        {
          title: String,
          url: String
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Syllabus', SyllabusSchema);
