const mongoose = require('../database/index');

const ClassificationSchema = mongoose.Schema({
    punctuation: {
        type: Number,
        required: true
    },
    pilot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot',
    }
});

const Classification = mongoose.model('Classification', ClassificationSchema);

module.exports = Classification;