const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({
    song_name: {
        type: String
    },
    album_name: {
        type: String
    },
    song_spotify_url: {
        type: String
    },
    song_youtube_url: {
        type: String
    },
    song_image: {
        type: String
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist'
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('song', SongSchema);