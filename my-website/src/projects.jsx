// src/components/Projects.jsx
import React from 'react';
import './projects.css';

function Projects() {
  return (
    <div className='all-projects'>
        <div className='heading'>
        <div className='large'>
      <p>Projects </p>
      </div>
      <p>My collection of academic work and personal projects in full-stack development</p>
      </div>
      <hr class="custom-hr" />
    <div className="projects-grid">
    <div className="project-item">
      <img src="path-to-image1" alt="Project 1" />
      <h2>Candid Candies</h2>
    </div>
    <div className="project-item">
      <img src="path-to-image3" alt="Project 3" />
      <h2>StockView</h2>
    </div>
    <div className="project-item">
      <img src="path-to-image2" alt="Project 2" />
      <h2>Minesweeper</h2>
    </div>
    <div className="project-item">
      <img src="path-to-image3" alt="Project 3" />
      <h2>ZType</h2>
    </div>
    <div className="project-item">
      <img src="path-to-image3" alt="Project 3" />
      <h2>LightEmAll</h2>
    </div>
    {/* Repeat for other projects */}
  </div>
  </div>
  );
}

export default Projects;
