import React from 'react';

const Review = ({ review }) => (
  <div className="review">
    <p>{review.text}</p>
    <p>Rating: {review.rating} ⭐</p>
    <p>By: {review.user}</p>
  </div>
);

export default Review;
