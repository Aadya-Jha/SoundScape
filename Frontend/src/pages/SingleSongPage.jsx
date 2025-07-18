import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";
import Review from "../components/Review";
import AddReviewForm from "../components/AddReviewForm";
import './SingleSongPage.css'

const SingleSongPage = () => {
  const { songname } = useParams();
  const [song, setSong] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch(`http://localhost:3000/songs/${songname}`);
        const data = await res.json();
        setSong(data);
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Error fetching song:", err);
      }
    };

    fetchSong();
  }, [songname]);

  const handleAddReview = async (newReview) => {
  try {
      await fetch(`http://localhost:3000/songs/${songname}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    console.log("Review submitted!");
  } catch (err) {
    console.error("Failed to submit review:", err);
  }
};


  const handleMarkWantToListen = async () => {
  try {
    await fetch(`http://localhost:3000/users/me/wantToListen`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId: song.id })
    });
    alert("Added to Want to Listen!");
  } catch (err) {
    console.error("Failed to mark as Want to Listen:", err);
  }
};

const handleMarkListened = async () => {
  try {
    await fetch(`http://localhost:3000/users/me/listened`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ songId: song.id })
    });
    alert("Marked as Listened!");
  } catch (err) {
    console.error("Failed to mark as Listened:", err);
  }
};



  return (
    <div className="single-song-page">
      <SongDetails song={song} />

      <div className="reviews-section">
        <h2>Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))
        )}
      </div>
      <div className="tracking-buttons">
        <button onClick={handleMarkWantToListen}>Want to Listen</button>
        <button onClick={handleMarkListened}>Mark as Listened</button>
      </div>
      <AddReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default SingleSongPage;
