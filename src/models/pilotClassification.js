const mongoose = require('../database/index');

const PilotClassificationSchema = mongoose.Schema({
    punctuation: {
        type: Number,
        required: true
    },
    win: {
        type: Number,
        required: true,
        default: 0
    },
    pilot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot',
    }
});

const PilotClassification = mongoose.model('PilotClassification', PilotClassificationSchema);

module.exports = PilotClassification;