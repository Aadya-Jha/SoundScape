import React from 'react';

const AddReviewForm = ({ onSubmit }) => (
    <div className = "addReview">
     <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(); 
    }}>
      <label htmlFor="reviewText">Comment:</label>
      <textarea id="reviewText" rows="4" cols="50" />
      <label htmlFor="rating">Rating (1-5):</label>
      <input type="number" id="rating" min="1" max="5" />
      <button type="submit">Submit Review</button>
     </form>
    </div>
);

export default AddReviewForm;