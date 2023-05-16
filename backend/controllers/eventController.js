const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

// @desc  Get all events
// @route GET /api/events
// @access Private
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find();

    res.status(200).json(events);
});

// @desc  Create a new event
// @route POST /api/events
// @access Private
const createEvent = asyncHandler(async (req, res) => {
    const event = await Event.create({
        type: req.body.type,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        location: req.body.location,
        description: req.body.description,
        status: req.body.status,
        capacity: req.body.capacity,
    });

    res.status(200).json(event);
});

// @desc  Update an event
// @route PUT /api/events/:id
// @access Private
const updateEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error("Event not found");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        });

    res.status(200).json(updatedEvent);
});

// @desc  Delete an event
// @route DELETE /api/events/:id
// @access Private
const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (!event) {
        res.status(400);
        throw new Error("Event not found");
    }

    await Event.deleteOne({_id: req.params.id});
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
