import React, {useState, useEffect} from "react";
import "./UserProfile.css";

const UserProfile = () => {
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
        const fetchProfile = async () => {
        const response = await fetch("http://localhost:3000/users/me");
        const data = await response.json();
        console.log("Fetched profile:", data);

        setProfile(data[0]);
    };
    fetchProfile();
    }, []);

    return (
    <div className="profile-container">
        <div className="profile-content">
             <img className="profile-avatar" src={profile.avatarURL} alt="Profile Avatar" />
             <div className="profile-info">
               <h1>{profile.username}</h1>
               <p>{profile.name}</p>
               <p>{profile.email}</p>
               <p>{profile.bio}</p>
             </div>
        </div>
        <div className="listen-track-card">
            <h2>Want to Listen</h2>
            <ul>
                {profile.wantToListen?.map((song, idx) => (
                    <li key={idx}>{song.albumName}</li>
                 ))}
            </ul>

            <h2>Listened</h2>
            <ul>
                {profile.listened?.map((song, idx) => (
                    <li key={idx}>{song.albumName}</li>
                ))}
            </ul>
        </div>
        <div className="user-activity">
            <h3>Your Reviews</h3>
            {profile.reviews && profile.reviews.length > 0 ? (
             profile.reviews.map((review, index) => (
            <div className="review-card" key={index}>
               <img src={review.song.coverImage} alt="Song cover" className="review-img" />
               <p><strong>Song:</strong> {review.songName}</p>
               <p><strong>Comment:</strong> {review.comment}</p>
               <p><strong>Rating:</strong> {review.rating}/5</p>
           </div>
           ))
           ) : (
           <p>No reviews yet.</p>
           )}
        </div>
    </div>
);

}

export default UserProfile;