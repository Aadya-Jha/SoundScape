const allSongs = (req,res) => {
    res.json({
        message: "All songs"
    });
};

const artist = (req, res) => {
    const {artistName} = req.params;
    res.json({
        artist: artistName
    });
};

const selectedSong = (req, res) => {
    const {songName} = req.params;
    res.json({
        name: songName
    });
};

const idSong = (req, res) => {
    const {songid} = req.params;
      console.log('req.params:', req.params);
    res.json({
        id: songid
    });
};

module.exports = {
    allSongs,
    artist,
    selectedSong,
    idSong
};