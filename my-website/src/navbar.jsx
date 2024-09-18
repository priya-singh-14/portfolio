// src/components/Navbar.jsx
import React from 'react';
import './navbar.css'; // The CSS will handle the ellipse and hover effect

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="ellipse-background">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
