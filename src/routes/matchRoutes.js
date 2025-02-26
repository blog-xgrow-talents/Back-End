const express = require('express');
const router = express.Router();
const matchProfileController = require('../controllers/matchProfileController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/cards', authMiddleware, matchProfileController.createMatchProfile);

router.get('/cards', matchProfileController.getAllMatchProfiles);

module.exports = router;