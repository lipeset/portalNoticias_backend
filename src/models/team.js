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
    gridUrl: {
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
    firstGpFinish: {
        type: Number,
    },
    secondGpPoints: {
        type: Number,
    },
    secondGpFinish: {
        type: Number,
    },
    thirdGpPoints: {
        type: Number,
    },
    thirdGpFinish: {
        type: Number,
    },
    fourthGpPoints: {
        type: Number,
    },
    fourthGpFinish: {
        type: Number,
    },
    fifithGpPoints: {
        type: Number,
    },
    fifithGpFinish: {
        type: Number,
    },
    sixthGpPoints: {
        type: Number,
    },
    sixthGpFinish: {
        type: Number,
    },
    pilots: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot'
    }]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;