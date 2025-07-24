let songs = [
  {
    _id: "1",
    title: "Sample Song",
    reviews: [],
  },
];


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

const addReviews = async (req, res) => {
  try {
    const songid = req.params.songid;
    const { userName, review, rating } = req.body;
    const newReview = { userName, review, rating };

    const song = songs.find(s => s._id === songid); // dummy version

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    song.reviews.push(newReview);
    res.status(201).json({ message: "Review added", song });

  } catch (error) {
    console.error("Error in addReviews:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const editReviews = (req,res) => {
  const {songid, reviewid} = req.params;
  const song = songs.find(s => s._id === songid);
  if (!song) {
    return res.status(404).json({ message: "Song not found" });
  }
  const review = song.reviews.find(r => r._id === reviewid);
  if (!review) {
    return res.status(404).json({ message: "Song not found" });
  }
  const {userName, review: newReviewText, rating} = req.body;
  if (userName) review.userName = userName;
  if (newReviewText) review.review = newReviewText;
  if (rating) review.rating = rating;
  res.status(200).json({ message: "Review updated", song });
}

const deleteReviews = (req,res) => {
  const {songid, reviewid} =req.params;
  const song = songs.find(s => s._id === songid);
  if (!song) {
    return res.status(404).json({ message: "Song not found" });
  }
  const reviewIndex = song.reviews.findIndex(r => r._id === reviewid);
  if (!reviewIndex) {
    return res.status(404).json({ message: "Song not found" });
  }
  song.reviews.splice(reviewIndex, 1);
  res.status(200).json({ message: "Review deleted", song });

}

module.exports = {
  allSongs,
  artist,
  selectedSong,
  addReviews,
  editReviews,
  deleteReviews
};
