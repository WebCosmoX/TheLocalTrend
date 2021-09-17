const Artist = require('../models/artist');

exports.create_artist = async (req, res) => {
    try {
        const { name, bio, role, spotify_url, youtube_url } = req.body;
        const artist = new Artist({
            name, bio, role, spotify_url, youtube_url
        });
        return res.status(200).json({ artist });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_all_artists = async (req, res) => {
    try {
        const artists = await Artist.find({});
        return res.status(200).json({ artists });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.get_artist_by_id = async (req, res) => {
    try {
        const id = req.params.artist_id;
        const artist = await Artist.findById(id);
        return res.status(200).json({ artist });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.update_artist = async (req, res) => {
    try {
        const id = req.params.artist_id;
        const { name, bio, role, spotify_url, youtube_url } = req.body;

        const artist = await Artist.updateOne(id, {
            $set: { name, bio, role, spotify_url, youtube_url }
        });

        return res.status(200).json({ artist });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}

exports.delete_artist = async (req, res) => {
    try {
        const id = req.params.artist_id;

        await Artist.deleteOne({ _id: id });

        return res.status(200).json({ message: 'Artist deleted successfully!' });
    } catch (err) {
        return res.status(500).json({ error: err.msg });
    }
}