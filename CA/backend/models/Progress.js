const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chapterId: {
    type: String,
    required: true
  },
  topicId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a compound index for user, chapterId, and topicId
ProgressSchema.index({ user: 1, chapterId: 1, topicId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', ProgressSchema);
