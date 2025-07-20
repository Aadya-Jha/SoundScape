import React from "react";
import { Link } from "react-router-dom";
import './NotFoundPage.css'; 

const NotFound = () => {
  return (
    <div className="page-container">
      <h1>404</h1>
      <h2>Oops! Page not found.</h2>
      <p>
        The page you're looking for doesn't exist or has been moved. Let’s help
        you get back on track.
      </p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
