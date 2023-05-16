const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');
const Record = require('../models/Record');

// @desc    Show add page
// @route   GET /records/add
router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('records/add');
});


module.exports = router;
