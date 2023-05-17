const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc  Get user profile
// @route POST /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        user: req.user,
    })

    res.status(200).json({message: "Get user profile"});
});

module.exports = {
    getUser,
}
