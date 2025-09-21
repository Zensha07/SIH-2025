const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['voice', 'image', 'text'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'malayalam'
  },
  images: [{
    type: String
  }],
  audioFile: {
    type: String
  },
  response: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'resolved'],
    default: 'pending'
  },
  category: {
    type: String,
    enum: ['disease', 'pest', 'nutrient', 'weather', 'general'],
    default: 'general'
  },
  confidence: {
    type: Number,
    min: 0,
    max: 1,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Query', querySchema);
