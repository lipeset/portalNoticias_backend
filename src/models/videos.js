const mongoose = require('../database/index');

const VideosSchema = mongoose.Schema({
    muralVideos: [{
        type: String
    }]
});

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;