import React from 'react';
import './SongCard.css';

const SongCard = ({ title, artist, albumURL }) => {
  return (
    <div className="song-card">
      {albumURL && <img src={albumURL} alt={`${title} album`} className="album-art" />}
      <div className="song-info">
        <h3 className="song-title">{title}</h3>
        <p className="song-artist">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;