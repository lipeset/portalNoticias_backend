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

const LastRace = mongoose.model('LastRace', LastRaceSchema);

module.exports = LastRace;