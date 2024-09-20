import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="ellipse-background">
        <ul className="nav-links">
          <li><a href="about.jsx">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
