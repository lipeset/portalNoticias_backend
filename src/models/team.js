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
    bestSanMarinoLap: {
        type: String,
    },
    firstGpPoints: {
        type: Number,
    },
    firstGpFinish: {
        type: Number,
    },
    firstBestLap: {
        type: String,
    },
    secondGpPoints: {
        type: Number,
    },
    secondGpFinish: {
        type: Number,
    },
    secondBestLap: {
        type: String,
    },
    thirdGpPoints: {
        type: Number,
    },
    thirdGpFinish: {
        type: Number,
    },
    thirdBestLap: {
        type: String,
    },
    fourthGpPoints: {
        type: Number,
    },
    fourthGpFinish: {
        type: Number,
    },
    fourthBestLap: {
        type: String,
    },
    fifithGpPoints: {
        type: Number,
    },
    fifithGpFinish: {
        type: Number,
    },
    fifithBestLap: {
        type: String,
    },
    sixthGpPoints: {
        type: Number,
    },
    sixthGpFinish: {
        type: Number,
    },
    sixthBestLap: {
        type: String,
    },
    pilots: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot'
    }]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;