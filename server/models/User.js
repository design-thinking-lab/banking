const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bankName: { type: String, required: true },
  password: { type: String, required: true }, // New password field,
  balance: { type: Number, default: 0 },  // Store user's balance
});

module.exports = mongoose.model('User', UserSchema);
