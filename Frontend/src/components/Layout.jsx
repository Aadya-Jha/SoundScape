import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-purple-500">
      <Navbar />
      
        {children}
      
    </div>
  );
};

export default Layout;
