const asyncHandler = require("express-async-handler");

// @desc  Get all events
// @route GET /api/events
// @access Private
const getEvents = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get events"});
});

// @desc  Create a new event
// @route POST /api/events
// @access Private
const createEvent = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(404);
        throw new Error("Event text is required");
    }
    res.status(200).json({message: "Create a new event"});
});

// @desc  Update an event
// @route PUT /api/events/:id
// @access Private
const updateEvent = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update event ${req.params.id}`});
});

// @desc  Delete an event
// @route DELETE /api/events/:id
// @access Private
const deleteEvent = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete event ${req.params.id}`});
});

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
