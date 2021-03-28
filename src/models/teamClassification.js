const mongoose = require('../database/index');

const TeamClassificationSchema = mongoose.Schema({
    punctuation: {
        type: Number,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }
});

const TeamClassification = mongoose.model('TeamClassification', TeamClassificationSchema);

module.exports = TeamClassification;