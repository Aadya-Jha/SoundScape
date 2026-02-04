export const searchArtists = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ message: "Missing search query" });
    }

    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json&limit=5`,
      {
        headers: {
          "User-Agent": "SoundScape/1.0 ( learning project )",
        },
      }
    );
    const data = await response.json(); 

    const artists = data.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
    }));

    const songResponse = await fetch(
      `https://musicbrainz.org/ws/2/recording/?query=${query}&fmt=json&limit=5`,
      {
        headers: {
          "User-Agent": "SoundScape/1.0 ( learning project )",
        },
      }
    );
    const songData = await songResponse.json();

    const songs = songData.recordings.map((record) => ({
      id: record.id,
      title: record.title,
      artist: record["artist-credit"]?.[0]?.name || "Unknown",
    }));

    const albumResponse = await fetch(
      `https://musicbrainz.org/ws/2/release/?query=${query}&fmt=json&limit=5`,
      {
        headers: { 
          "User-Agent": "SoundScape/1.0 ( learning project )", 
        },
      }
    );
    const albumData = await albumResponse.json();
    const albums = albumData.releases.map((release) => ({
      id: release.id,
      title: release.title,
      artist: release["artist-credit"]?.[0]?.name || "Unknown",
    }));

    res.json({ artists, songs, albums });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
