const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    },
    hours: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('Record', RecordSchema);
