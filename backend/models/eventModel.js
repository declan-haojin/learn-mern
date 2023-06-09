const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Driver', 'Packer', 'Caller', 'Other'],
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true,
        enum: ['Past', 'Upcoming', 'Canceled'],
    },
    capacity: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Event', EventSchema);
