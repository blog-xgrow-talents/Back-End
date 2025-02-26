const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const cardRoutes = require('./CardRoutes');

router.use('/auth', authRoutes);
router.use('/cards', cardRoutes);

module.exports = router;