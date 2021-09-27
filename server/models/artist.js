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
    fb_url: {
        type: String,
    },
    insta_url: {
        type: String
    },
    twitter_url: {
        type: String,
    },
    profile_image: {
        type: String
    },
});

module.exports = mongoose.model('artist', ArtistSchema);