import React,{useState, useEffect} from "react";
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
        <div>
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
    );

};

export default OtherUserProfile;