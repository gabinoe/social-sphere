const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Add other reaction fields as needed.
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
