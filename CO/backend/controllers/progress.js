const Progress = require('../models/Progress');
const Syllabus = require('../models/Syllabus');
const mongoose = require('mongoose');

// @desc    Get user progress
// @route   GET /api/progress
// @access  Private
exports.getUserProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id });
    
    // Format the response to match the frontend structure
    const formattedProgress = {};
    
    progress.forEach(item => {
      if (!formattedProgress[item.chapterId]) {
        formattedProgress[item.chapterId] = {};
      }
      
      formattedProgress[item.chapterId][item.topicId] = item.completed;
    });
    
    res.json({
      success: true,
      progress: formattedProgress
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update topic progress
// @route   POST /api/progress
// @access  Private
exports.updateProgress = async (req, res) => {
  try {
    const { chapterId, topicId, completed } = req.body;
    
    // Validate input
    if (!chapterId) {
      return res.status(400).json({ message: 'Chapter ID is required' });
    }
    
    // Check if the chapter and topic exist
    const chapter = await Syllabus.findOne({ chapterId });
    
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    
    if (topicId) {
      // Update a specific topic
      const topicExists = chapter.topics.some(topic => topic.id === topicId);
      
      if (!topicExists) {
        return res.status(404).json({ message: 'Topic not found' });
      }
      
      // Find and update or create progress record
      let progress = await Progress.findOne({
        user: req.user.id,
        chapterId,
        topicId
      });
      
      if (progress) {
        progress.completed = completed;
        progress.completedAt = completed ? Date.now() : null;
        progress.updatedAt = Date.now();
        await progress.save();
      } else {
        progress = await Progress.create({
          user: req.user.id,
          chapterId,
          topicId,
          completed,
          completedAt: completed ? Date.now() : null
        });
      }
      
      res.json({
        success: true,
        progress
      });
    } else {
      // Update all topics in the chapter
      // First, get all current progress for this chapter
      const currentProgress = await Progress.find({
        user: req.user.id,
        chapterId
      });
      
      // Check if all topics are currently completed
      const allTopicsCompleted = currentProgress.length === chapter.topics.length &&
        currentProgress.every(p => p.completed);
      
      // Set new completion state (toggle)
      const newCompletionState = !allTopicsCompleted;
      
      // Update all topics
      const bulkOps = chapter.topics.map(topic => ({
        updateOne: {
          filter: {
            user: req.user.id,
            chapterId,
            topicId: topic.id
          },
          update: {
            $set: {
              completed: newCompletionState,
              completedAt: newCompletionState ? Date.now() : null,
              updatedAt: Date.now()
            }
          },
          upsert: true
        }
      }));
      
      await Progress.bulkWrite(bulkOps);
      
      // Get updated progress
      const updatedProgress = await Progress.find({
        user: req.user.id,
        chapterId
      });
      
      res.json({
        success: true,
        progress: updatedProgress
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get user completion stats
// @route   GET /api/progress/stats
// @access  Private
exports.getProgressStats = async (req, res) => {
  try {
    // Get all syllabus chapters and topics
    const allChapters = await Syllabus.find().sort('order');
    
    // Count total topics
    const totalTopics = allChapters.reduce((sum, chapter) => sum + chapter.topics.length, 0);
    
    // Get completed topics
    const completedTopics = await Progress.countDocuments({
      user: req.user.id,
      completed: true
    });
    
    // Calculate completion percentage
    const completionPercentage = totalTopics > 0 
      ? Math.round((completedTopics / totalTopics) * 100) 
      : 0;
    
    // Get recently completed topics
    const recentlyCompleted = await Progress.find({
      user: req.user.id,
      completed: true,
      completedAt: { $ne: null }
    })
    .sort('-completedAt')
    .limit(5);
    
    // Get topic details for recently completed
    const topicIds = recentlyCompleted.map(p => p.topicId);
    
    // Build topic lookup map
    const topicMap = {};
    allChapters.forEach(chapter => {
      chapter.topics.forEach(topic => {
        topicMap[topic.id] = {
          ...topic.toObject(),
          chapterTitle: chapter.title
        };
      });
    });
    
    // Format recent completions
    const recentCompletions = recentlyCompleted.map(p => ({
      topicId: p.topicId,
      chapterId: p.chapterId,
      completedAt: p.completedAt,
      title: topicMap[p.topicId]?.title || 'Unknown Topic',
      chapterTitle: topicMap[p.topicId]?.chapterTitle || 'Unknown Chapter'
    }));
    
    res.json({
      success: true,
      stats: {
        totalTopics,
        completedTopics,
        completionPercentage,
        recentCompletions
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
