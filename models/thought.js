const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  // Add other thought fields as needed.
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
