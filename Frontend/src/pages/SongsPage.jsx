import React, { useState, useEffect } from 'react';
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
      <input
        type="text"
        placeholder="Search songs"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
      <h2>Songs</h2>
      <div className="songs-list">
        {filteredSongs.map((song, index) => (
          <SongCard
            key={index}
            title={song.albumName}
            artist={song.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsPage;
