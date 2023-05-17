const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");


// @desc  Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register User" });
});

// @desc  Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login User" });
});

// @desc  Get user profile
// @route POST /api/users/me
// @access Public
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get user profile"});
});

module.exports = {
    registerUser,
    loginUser,
    getUser,
}
