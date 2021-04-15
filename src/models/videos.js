const mongoose = require('../database/index');

const VideosSchema = mongoose.Schema({
    videoName: {
        type: String,
        required: true
    },
    muralVideos: [{
        type: String
    }]
});

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;