import React from 'react';
import Navbar from './Navbar';
import '../index.css'; 
import './Navbar.css'; 

const Layout = ({ children }) => {
  return (
    <div className="layout-background">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
