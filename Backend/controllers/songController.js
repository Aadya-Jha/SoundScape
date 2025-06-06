const allSongs = (req,res) => {
    const songs = [
        {
            albumName: "Bad Blood",
            artistName: "Taylor Swift"
        },
        {
            albumName: "Levitating",
            artistName: "Dua Lipa"
        },
        {
            albumName: "Tak Me Home",
            artistName: "One Direction"
        }
    ];
    res.send(songs);
};

const artist = (req, res) => {
  const { artistName } = req.params;

  const allSongs = [
    { title: "Lover", artist: "Taylor Swift" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Delicate", artist: "Taylor Swift" },
  ];

  const filteredSongs = allSongs.filter(
    (song) => song.artist.toLowerCase() === artistName.toLowerCase()
  );

  res.send(filteredSongs);
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