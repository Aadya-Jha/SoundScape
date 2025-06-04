import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
          <Link to="/CreateAccountPage">Create Account</Link>
          <Link to="/SignInPage">Sign In</Link>
          <Link to="/SongsPage">Songs</Link>
        </nav>
    );
};

export default Navbar;