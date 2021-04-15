const mongoose = require('../database/index');

const VideosSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    }
});

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;