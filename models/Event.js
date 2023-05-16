const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['Driver', 'Packer', 'Caller', 'Other'],
    },
    date: {
        type: Date,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Event', EventSchema);
