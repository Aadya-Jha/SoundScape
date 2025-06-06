import React from 'react';
import { useState } from 'react';
import './SongsPage.css';
import SongCard from '../components/SongCard';

const songs = [
  {
    title: "Lover",
    artist: "Taylor Swift",
    albumURL: "https://en.wikipedia.org/wiki/Lover_%28album%29#/media/File:Taylor_Swift_-_Lover.png",
  },
  {
    title: "APT.",
    artist: "Rose",
    albumURL: "https://en.wikipedia.org/wiki/Apt._%28song%29#/media/File:Ros%C3%A9_and_Bruno_Mars_-_Apt..png",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    albumURL: "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
  },
];

const SongsPage = () => {
  const [searchText, setSearchText] = useState('');

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchText.toLowerCase())
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
            title={song.title}
            artist={song.artist}
            albumURL={song.albumURL}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsPage;
