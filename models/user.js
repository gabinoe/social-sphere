const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  // Add other user fields as needed (e.g., password, friends array).
});

const User = mongoose.model('User', userSchema);

module.exports = User;
