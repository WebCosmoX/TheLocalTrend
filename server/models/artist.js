const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
    },
    bio: {
        type: String
    },
    role: {
        type: String
    },
    spotify_url: {
        type: String,
    },
    youtube_url: {
        type: String
    },
    images: [{
        type: String
    }],
});

module.exports = mongoose.model('artist', ArtistSchema);