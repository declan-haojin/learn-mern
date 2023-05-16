const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureGuest } = require('../middleware/auth');

const Record = require('../models/Record');

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    });
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    try {
        const records = await Record.find({ user: req.user.id }).lean();
        res.render('dashboard', {
            name: req.user.firstName,
            records: records,
        });
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }



});


module.exports = router;
