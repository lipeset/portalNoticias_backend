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
        type: Number,
        required: true,
        default: 0
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
    avatarPic: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Pilot = mongoose.model('Pilot', PilotSchema);

module.exports = Pilot;