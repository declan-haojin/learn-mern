const asyncHandler = require("express-async-handler");
const Record = require("../models/recordModel");

// @desc  Get all records
// @route GET /api/records
// @access Private
const getRecords = asyncHandler(async (req, res) => {
    const records = await Record.find({ user: req.user._id });

    res.status(200).json(records);
});

// @desc  Create a new record
// @route POST /api/records
// @access Private
const createRecord = asyncHandler(async (req, res) => {
    const record = await Record.create({
        user: req.body.user,
        event: req.body.event,
        hours: req.body.hours,
    });

    res.status(200).json(record);
});

// @desc  Update a record
// @route PUT /api/records/:id
// @access Private
const updateRecord = asyncHandler(async (req, res) => {
    const record = await Record.findById(req.params.id);

    if (!record) {
        res.status(400);
        throw new Error("Record not found");
    }

    const updatedRecord = await Record.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        });

    res.status(200).json(updatedRecord);
});

// @desc  Delete a record
// @route DELETE /api/records/:id
// @access Private
const deleteRecord = asyncHandler(async (req, res) => {
    const record = await Record.findById(req.params.id);

    if (!record) {
        res.status(400);
        throw new Error("Record not found");
    }

    await Record.deleteOne({_id: req.params.id});
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
}
