const User = require('../models/userModel');
const ClaimHistory = require('../models/historyModel');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name'); // Only return name and id
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    const user = new User({ name: req.body.name });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Claim points for a user
exports.claimPoints = async (req, res) => {
    const { userId } = req.body;
    const randomPoints = Math.floor(Math.random() * 10) + 1; // Random points from 1 to 10

    try {
        // Find user and update points
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.totalPoints += randomPoints;
        await user.save();

        // Create a history record
        const history = new ClaimHistory({ userId, pointsClaimed: randomPoints });
        await history.save();

        res.json({ message: `Awarded ${randomPoints} points to ${user.name}!`, totalPoints: user.totalPoints });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get the leaderboard
exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ totalPoints: -1 });
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};