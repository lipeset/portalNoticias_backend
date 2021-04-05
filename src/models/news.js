const mongoose = require('../database/index');

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    newsContent: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    newsDate: {
        type: Date,
        default: Date.now
    },
    newsUrl: {
        type: String
    },
    newsVideoUrl: {
        type: String
    },
    newsPicCarousel: [{
        type: String
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pilot',
    }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;