import React,{useState, useEffect} from "react";
import './OtherUserProfile.css'
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
    const { username }= useParams();
    const [profile , setProfile] =useState ([]);

    useEffect(() => {
        const getOtherProfile = async() => {
            const response= await fetch(`http://localhost:3000/users/${username}`) ;
            const data = await response.json();
            setProfile(data)
        };
        getOtherProfile();
    }, [username]);

    return (
        <div className="other-profile-container">
            <div className="other-profile-content">
            <img src={profile.avatarURL} alt="Avatar" className="other-profile-avatar" />
            <div className="other-profile-info">
            <h1>{username}</h1>
            <ul>
                {profile.map((profile, index) => (
                    <li key={index}>
                        {profile.username}
                        {profile.bio}
                    </li>
                ))}
            </ul>
            </div>
            </div>
            <h2 className="activity-heading">{username}'s Reviews</h2>
            <div className="user-reviews">
              {profile.reviews && profile.reviews.length > 0 ? (
              profile.reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <p><strong>Song:</strong> {review.songName}</p>
                <p><strong>Comment:</strong> {review.comment}</p>
                <p><strong>Rating:</strong> {review.rating}/5</p>
              </div>
              ))
              ) : (
              <p>No activity yet.</p>
              )}
            </div>
        </div>
    );

};

export default OtherUserProfile;