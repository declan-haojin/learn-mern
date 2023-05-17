const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.get('/me', protect, getUser);

module.exports = router;
