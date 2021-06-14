const mongoose = require('../database/index');

const PicsSchema = mongoose.Schema({
    muralPics: {
        type: String
    }
});

const Pics = mongoose.model('Pics', PicsSchema);

module.exports = Pics;