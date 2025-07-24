const express = require('express');
const router = express.Router();

const {
    allSongs,
    artist,
    selectedSong,
    addReviews,
    editReviews,
    idSong
} = require('../controllers/songController')

router.get('/', allSongs);
router.get('/artist/:artistName', artist);
router.get('/:songname', selectedSong);

router.post('/:songid/review', addReviews);

router.put('/:songid/review/:reviewid', editReviews);

const deleteReviews = (req, res) => {
    res.send("delete review to the song");
};

router.delete('/:songid/review/:reviewid', deleteReviews);

module.exports = router;