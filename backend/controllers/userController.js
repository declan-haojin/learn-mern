
// @desc  Register a new user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
    res.json({ message: "Register User" });
};

// @desc  Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
    res.json({ message: "Login User" });
};

// @desc  Get user profile
// @route POST /api/users/me
// @access Public
const getUser = async (req, res) => {
    res.status(200).json({message: "Get user profile"});
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
}
