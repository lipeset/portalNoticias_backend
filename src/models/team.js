const mongoose = require('../database/index');

const TeamSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    champCamp: {
        type: Number,
        required: true,
        default: 0
    },
    teamHighRaceFinish: {
        type: String,
        required: true,
        default: 0
    },
    teamPolePositions: {
        type: Number,
        required: true,
        default: 0
    },
    teamFastLaps: {
        type: Number,
        required: true,
        default: 0
    },
    pilots: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot',
    }]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;