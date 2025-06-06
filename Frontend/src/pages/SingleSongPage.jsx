import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleSongPage = () => {
  const { songname } = useParams();
  const [song, setSong] = useState({});

  useEffect(() => {
    const songDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/songs/${songname}`);
        const data = await response.json();
        setSong(data);
      } catch (error) {
        console.error("Error fetching song:", error);
      }
    };
    songDetails();
  }, [songname]);

  if (!song || Object.keys(song).length === 0) {
    return <p>Loading song details...</p>;
  }

  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      <img src={song.albumURL} alt={song.title} width="200" />
      <p>{song.description}</p>
    </div>
  );
};

export default SingleSongPage;
