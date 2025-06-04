import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-400/50 shadow-md px-6 py-4 flex justify-center space-x-8">
      <Link to="/CreateAccountPage" className="text-black hover:text-gray-700 font-medium">
        Create Account
      </Link>
      <Link to="/SignInPage" className="text-black hover:text-gray-700 font-medium">
        Sign In
      </Link>
      <Link to="/SongsPage" className="text-black hover:text-gray-700 font-medium">
        Songs
      </Link>
    </nav>
  );
};

export default Navbar;
