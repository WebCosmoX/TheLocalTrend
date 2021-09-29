/**
 * @author Bhargab Nath <bhargabnath691@gmail.com>
 */

const aws = require("aws-sdk");

const Artist = require('../models/artist');

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

exports.create_artist = async (req, res) => {
    try {
        const { name, bio, role, spotify_url, youtube_url } = req.body;
        // const artist = new Artist({
        // name, bio, role, spotify_url, youtube_url, fb_url, insta_url, twitter_url
        // });

        const artist = new Artist(req.body);

        await artist.save();

        console.log({ artist });
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
        console.log(id);
        const { name, bio, role,
            // spotify_url, youtube_url 
        } = req.body;

        const artist = await Artist.findByIdAndUpdate(id, {
            $set: { name, bio, role }
        }, { new: true });

        // console.log({ artist });

        await artist.save();

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

exports.upload_image = async (req, res) => {
    let myFile = req.file.originalname.split(".");
    const artistId = req.params.artistId;
    const extName = myFile[myFile.length - 1];

    console.log(req.file);

    let artist = await Artist.findById(artistId);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${(new Date()).getTime()}.${extName}`,
        Body: req.file.buffer
    }

    artist.profile_image = params.Key;

    await artist.save();

    console.log({ artist });

    s3.upload(params, (error, data) => {
        if (error) {
            return res.status(500).send(error);
        }

        return res.status(200).json({ data, artist });
    });
}

exports.get_image = async (req, res) => {
    console.log(req.params);
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
}

const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: process.env.AWS_BUCKET_NAME
    }

    return s3.getObject(downloadParams).createReadStream();
}