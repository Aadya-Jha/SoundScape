const express = require('express');
const router = express.Router();

const allSongs = (req, res) => {
    res.send("all songs webpage");
};

router.get('/', allSongs);

const artist = (req, res) => {
    res.send("all songs of a artist");
};

router.get('/artist/:artistName', artist);

const singleSong = (req, res) => {
    res.send("a particular song");
};

router.get('/:songname', singleSong);

const songid = (req, res) => {
    res.send("id of one song");
};

router.get('/:songid', songid);

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