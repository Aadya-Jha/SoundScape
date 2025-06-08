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
        <div className="user-activity">
            <h2>Your Reviews</h2>
        </div>
    </div>
);


}

export default UserProfile;