import "dotenv/config";
import express from 'express';
import cors from 'cors';

import pool from './src/db/db.js';
import userRouter from './src/routes/user.js';
import songRouter from './src/routes/songs.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/songs', songRouter);

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get("/songs", async (req, res) => {
  const result = await pool.query(`
    SELECT songs.id AS song_id, songs.title, artist.artistname AS artist
    FROM songs
    JOIN artist ON songs.artist_id = artist.artist_id;
  `);
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
