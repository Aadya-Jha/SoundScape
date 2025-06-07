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

  const handleAddReview = () => {
    console.log("Review submitted!");
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
      <AddReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default SingleSongPage;
