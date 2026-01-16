const express = require('express');
const router = express.Router();

const {
    allSongs,
    artist,
    selectedSong,
    addReviews,
    editReviews,
    deleteReviews,
    idSong
} = require('../controllers/songController')

router.get('/', allSongs);
router.get('/artist/:artistName', artist);
router.get('/:songname', selectedSong);

router.post('/:songid/review', addReviews);

router.put('/:songid/review/:reviewid', editReviews);

router.delete('/:songid/review/:reviewid', deleteReviews);

module.exports = router;