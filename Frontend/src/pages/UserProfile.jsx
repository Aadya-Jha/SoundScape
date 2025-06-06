import React, {useState, useEffect} from "react";

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

    return(
        <div>
            <h1>{profile.username }</h1>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.bio}</p>
            <img src={profile.avatarURL} alt="" />
        </div>
    );

}

export default UserProfile;