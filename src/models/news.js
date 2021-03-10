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
    author: [{
        type: String,
        required: true,
    }]
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;