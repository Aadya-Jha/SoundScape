import fetch from "node-fetch";

export const searchArtists = async (req, res) => {
  try {
    // STEP A: read query
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ message: "Missing search query" });
    }

    // STEP B: call MusicBrainz artist search
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json&limit=5`,
      {
        headers: {
          "User-Agent": "SoundScape/1.0 ( learning project )",
        },
      }
    );

    const data = await response.json();

    // STEP C: clean the data
    const artists = data.artists.map((artist) => ({
      id: artist.id,
      name: artist.name,
    }));

    // STEP D: return result
    res.json({ artists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
