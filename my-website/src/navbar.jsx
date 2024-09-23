import { Link } from 'react-router-dom';
import './navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="ellipse-background">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/underconstruction">Contact</Link></li>
          {/* put function to copy email to clipboard here */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
