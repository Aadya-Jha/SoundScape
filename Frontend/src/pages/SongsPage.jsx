import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './SongsPage.css';
import SongCard from '../components/SongCard';

const URL = "http://localhost:3000/songs";

const SongsPage = () => {
  const [songs, setSongs] = useState([]);       
  const [searchText, setSearchText] = useState(''); 

  useEffect(() => {
    const getAllSongs = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    getAllSongs();
  }, []);

  const filteredSongs = songs.filter(song =>
    song.albumName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Songs</h2>
      <input
        type="text"
        placeholder="Search songs"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
     
      <div className="songs-list">
        {filteredSongs.map((song, index) => (
          <Link to={`/songs/${encodeURIComponent(song.albumName)}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default SongsPage;
