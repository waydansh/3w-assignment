// backend/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, unique: true },
    totalPoints: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);