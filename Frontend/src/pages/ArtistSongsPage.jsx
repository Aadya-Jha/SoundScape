import React, {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';


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

  return(
    <div>
        <h1>{artistName}</h1>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {song.title} — {song.artist}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default ArtistSongsPage;