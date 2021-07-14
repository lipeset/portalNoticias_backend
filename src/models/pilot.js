const mongoose = require('../database/index');

const PilotSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    champCamp: {
        type: Number,
        required: true,
        default: 0
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
    bestSanMarinoLap: {
        type: String
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
    biography: {
        type: String,
    },
    active: {
        type: Boolean
    }
});

const Pilot = mongoose.model('Pilot', PilotSchema);

module.exports = Pilot;