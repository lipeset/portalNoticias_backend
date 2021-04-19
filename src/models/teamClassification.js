const mongoose = require('../database/index');

const TeamClassificationSchema = mongoose.Schema({
    punctuation: {
        type: Number,
        required: true
    },
    win: {
        type: Number,
        required: true,
        default: 0
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }
});

const TeamClassification = mongoose.model('TeamClassification', TeamClassificationSchema);

module.exports = TeamClassification;