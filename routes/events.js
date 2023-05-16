const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');
const Record = require('../models/Record');

// @desc    Add a record
// @route   GET /events/add
router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('events/add');
});


module.exports = router;
