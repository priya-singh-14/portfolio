import { Link } from 'react-router-dom';
import React, { useState } from "react";
import './navbar.css'; 
import {motion} from 'framer-motion';

function Navbar() {
  const [contactText, setContactText] = useState("Contact");
  const [fadeClass, setFadeClass] = useState(""); 
  const handleCopyEmail = () => {
    const email = "singh.priya3@northeastern.edu"; 
    navigator.clipboard.writeText(email);

    setFadeClass("fade-out");

    setTimeout(() => {
      setContactText("Email Copied!");
      setFadeClass("fade-in");

      setTimeout(() => {
        setFadeClass("fade-out");
        setTimeout(() => {
          setContactText("Contact");
          setFadeClass("fade-in");
        }, 200); // fade out
      }, 2000); 
    }, 400); // fade in
  };

  return (
      <motion.div 
      className="navbar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}  /* Delayed entry */
        >
      <div className="ellipse-background">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li> <a className={`contact-button ${fadeClass}`} onClick={handleCopyEmail}>
            {contactText}
          </a>
          </li>
        </ul>
      </div>
      </motion.div>
  );
}

export default Navbar;
