import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './ArtistSongsPage.css';
import SongCard from '../components/SongCard';

const ArtistSongsPage = () => {
  const { artistName } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const allSongsOfArtist = async () => {
      const response = await fetch(`http://localhost:3000/songs/artist/${artistName}`);
      const data = await response.json();
      setSongs(data);
    };

    allSongsOfArtist();
  }, [artistName]);

  return (
    <div className="artist-page">
      <div className="artist-banner">
        <img src="https://via.placeholder.com/1500x400?text=Artist+Banner" alt={`${artistName} banner`} />
      </div>

      <div className="artist-header">
        <h1>{artistName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
        <p>{songs.length} Songs</p>
      </div>

      <div className="songs-list">
        {songs.map((song, index) => (
          <Link
            to={`/songs/${encodeURIComponent(song.title)}`}
            key={index}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <SongCard
              title={song.albumName}
              artist={song.artistName}
              albumURL={song.albumURL}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtistSongsPage;
