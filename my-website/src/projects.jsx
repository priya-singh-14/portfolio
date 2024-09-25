// src/components/Projects.jsx
import React from 'react';
import './projects.css';
import h1 from './assets/h1.png';
import ms1 from './assets/ms2.png';
import z1 from './assets/z1.png';
import l1 from './assets/l1.png';
import sv from './assets/sv.png';


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
      <img src={h1} alt="Project 1" />
      <h2>Candid Candies</h2>
    </div>
    <div className="project-item">
      <img src={sv} alt="Project 3" />
      <h2>StockView</h2>
    </div>
    <div className="project-item">
      <img src={ms1} alt="Project 2" />
      <h2>Minesweeper</h2>
    </div>
    <div className="project-item">
      <img src={z1} alt="Project 3" />
      <h2>ZType</h2>
    </div>
    <div className="project-item">
      <img src={l1} alt="Project 3" />
      <h2>LightEmAll</h2>
    </div>
    {/* Repeat for other projects */}
  </div>
  </div>
  );
}

export default Projects;
