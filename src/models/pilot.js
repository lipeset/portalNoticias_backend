const mongoose = require('../database/index');

const PilotSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    podiuns: {
        type: Number,
        required: true,
        default: 0
    },
    highRaceFinish: {
        type: String,
        required: true,
        default: 0
    },
    highGridPosition: {
        type: String,
        required: true
    },
    polePosition: {
        type: Number,
        required: true,
        default: 0
    },
    weight: {
        type: Number,
        required: true,
        default: 0
    },
    fastLaps: {
        type: Number,
        required: true,
        default: 0
    },
    avatarUrl: {
        type: String,
    },
    gridUrl: {
        type: String,
    },
    profileUrl: {
        type: String,
    },
    bestAldeiaLap: {
        type: String,
    },
    bestKgvLap: {
        type: String,
    },
    bestInterlagosLap: {
        type: String,
    },
    firstGpPoints: {
        type: Number,
    },
    secondGpPoints: {
        type: Number,
    },
    thirdGpPoints: {
        type: Number,
    },
    fourthGpPoints: {
        type: Number,
    },
    fifithGpPoints: {
        type: Number,
    },
    sixthGpPoints: {
        type: Number,
    }
});

const Pilot = mongoose.model('Pilot', PilotSchema);

module.exports = Pilot;