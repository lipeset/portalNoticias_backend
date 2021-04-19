const mongoose = require('../database/index');

const LastRaceSchema = mongoose.Schema({
    granprix: {
        type: String,
        required: true
    },
    pilot: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot'
    }],
    team: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
});

const Pics = mongoose.model('Pics', LastRaceSchema);

module.exports = Pics;