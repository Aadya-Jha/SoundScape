import React from 'react';
import './SongDetails.css';

const SongDetails = ({ song }) => (
  <div className="song-details">
    <h1>{song.title}</h1>
    <p>{song.artist}</p>
    <img src={song.albumURL} alt={song.title} width="200" />
  </div>
);

export default SongDetails;
