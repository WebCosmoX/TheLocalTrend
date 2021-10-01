const { Router } = require('express');
const router = Router();
const multer = require('multer');

const ArtistController = require('../controller/artists');

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    }
});

const upload = multer({ storage }).single('profile_image');
const song_upload = multer({ storage }).single('song_image');

router.get('/', ArtistController.get_all_artists);
router.post('/add-artist', ArtistController.create_artist);
router.get('/:artist_id', ArtistController.get_artist_by_id);
router.put('/:artist_id', ArtistController.update_artist);
router.delete('/:artist_id', ArtistController.delete_artist);

router.post('/upload-image/:artistId', upload, ArtistController.upload_image);
router.get('/images/:key', ArtistController.get_image);

router.put('/:artistId/add-song', song_upload, ArtistController.add_song);
router.get('/get/recent-songs', ArtistController.get_recent_songs);
router.get('/songs/images/:key', ArtistController.get_image);

module.exports = router;