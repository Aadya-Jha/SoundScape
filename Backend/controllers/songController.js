const allSongs = (req, res) => {
  const songs = [
    { albumName: "Bad Blood", artistName: "Taylor Swift" },
    { albumName: "Levitating", artistName: "Dua Lipa" },
    { albumName: "Take Me Home", artistName: "One Direction" }
  ];
  res.send(songs);
};

const artist = (req, res) => {
  const { artistName } = req.params;

  const allSongs = [
    { title: "Lover", artist: "Taylor Swift" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Delicate", artist: "Taylor Swift" }
  ];

  const filteredSongs = allSongs.filter(
    (song) => song.artist.toLowerCase() === artistName.toLowerCase()
  );

  res.send(filteredSongs);
};

const selectedSong = (req, res) => {
  const { songname } = req.params;

  const songs = [
    {
      title: "Lover",
      artist: "Taylor Swift",
      albumURL: "https://example.com/lover.jpg",
      description: "A romantic pop song from the album Lover."
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      albumURL: "https://example.com/levitating.jpg",
      description: "A disco-pop song from the album Future Nostalgia."
    }
  ];

  const song = songs.find(
    s => s.title.toLowerCase() === songname.toLowerCase()
  );

  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ message: "Song not found" });
  }
};

module.exports = {
  allSongs,
  artist,
  selectedSong
};
