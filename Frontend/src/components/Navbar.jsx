import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/CreateAccountPage">Create Account</Link>
      <Link to="/SignInPage">Sign In</Link>
      <Link to="/SongsPage">Songs</Link>
    </nav>
  );
};

export default Navbar;
