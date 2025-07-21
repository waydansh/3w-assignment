// backend/routes/api.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/users', userController.getUsers);

// POST a new user
router.post('/users', userController.addUser);

// POST to claim points
router.post('/claim', userController.claimPoints);

// GET the leaderboard
router.get('/leaderboard', userController.getLeaderboard);

module.exports = router;