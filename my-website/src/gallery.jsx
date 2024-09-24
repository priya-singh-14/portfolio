// src/components/Projects.jsx
import React from 'react';
import './projects.css';

function Gallery() {
  return (
    <div className='all-projects'>
        <div className='heading'>
        <div className='large'>
      <p>Webpages </p>
      <p>UX/UI </p>
      <p>Fine Art </p>
      </div>
      </div>
      <hr class="custom-hr" />
    <div className="projects-container">
    <div className="project">
      <img src="path-to-image1" alt="Project 1" />
      <h2>Candid Candies</h2>
    </div>
    {/* Repeat for other projects */}
  </div>
  </div>
  );
}

export default Projects;
