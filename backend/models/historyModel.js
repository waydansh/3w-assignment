// backend/models/historyModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pointsClaimed: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClaimHistory', HistorySchema);