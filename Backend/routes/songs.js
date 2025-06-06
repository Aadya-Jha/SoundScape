const express = require('express');
const router = express.Router();

const {
    allSongs,
    artist,
    selectedSong,
    idSong
} = require('../controllers/songController')

router.get('/', allSongs);
router.get('/artist/:artistName', artist);
router.get('/:songname', selectedSong);

const addReviews = (req, res) => {
    res.send("add review to the song");
};

router.post('/:songid/review', addReviews);

const editReviews = (req, res) => {
    res.send("edit review to the song");
};

router.put('/:songid/review/:reviewid', editReviews);

const deleteReviews = (req, res) => {
    res.send("delete review to the song");
};

router.delete('/:songid/review/:reviewid', deleteReviews);

module.exports = router;