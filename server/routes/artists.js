const { Router } = require('express');
const router = Router();

const  ArtistController = require('../controller/artists');

router.get('/', ArtistController.get_all_artists);
router.post('/add-artist', ArtistController.create_artist);
router.get('/:artist_id', ArtistController.get_artist_by_id);
router.put('/:artist_id', ArtistController.update_artist);
router.delete('/:artist_id', ArtistController.delete_artist);

module.exports = router;