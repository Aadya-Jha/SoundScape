import pool from "../db/db.js";

export const allSongs = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
      songs.id AS song_id,
      songs.title,
      artist.artistname AS artist
      FROM songs
      JOIN artist ON songs.artist_id = artist.artist_id
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const artist = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

export const selectedSong = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

export const addReviews = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

export const editReviews = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

export const deleteReviews = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

export const idSong = (req, res) =>
  res.status(501).json({ message: "Not implemented yet" });

