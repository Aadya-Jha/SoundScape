import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-purple-500">
      <Navbar />
      <main className="max-w-3xl mx-auto text-center text-black">
        {children}
      </main>
    </div>
  );
};

export default Layout;
