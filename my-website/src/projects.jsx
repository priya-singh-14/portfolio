import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import h1 from './assets/h1.png';
import ms1 from './assets/ms1.png';
import z3 from './assets/z3.png';
import l1 from './assets/l1.png';
import sv from './assets/sv.png';
import p from './assets/pink.jpg';
import g from './assets/grey.jpg';
import gre from './assets/green.jpg';
import lg from './assets/lg.jpg';

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
    <Link to="/candy">
    <div class="image-container">
      <img src={h1} alt="Project 1" class="project-img"/>
      <img src={p} alt="Static Image" class="static-img" />
      </div></Link>
      <p>Candid Candies</p>
    </div>

    <div className="project-item">
    <Link to="/stockview">
    <div class="image-container">
      <img src={sv} alt="Project 3" class="project-img"/>
      <img src={g} alt="Static Image" class="static-img" />
    </div></Link>
    <p>StockView</p>
    </div>
    <div className="project-item">
    <Link to="/minesweeper">
   <div class="image-container">
      <img src={ms1} alt="Project 2" class="project-img"/>
      <img src={gre} alt="Static Image" class="static-img" />
    </div></Link>
    <p>Minesweeper</p>
    </div>
    <div className="project-item">
    <Link to="/ztype">
   <div class="image-container">
      <img src={z3} alt="Project 2" class="project-img"/>
      <img src={g} alt="Static Image" class="static-img" />
    </div></Link>
    <p>ZType</p>
    </div>
    <div className="project-item">
    <Link to="/lightemall">
   <div class="image-container">
      <img src={l1} alt="Project 2" class="project-img"/>
      <img src={lg} alt="Static Image" class="static-img" />
    </div></Link>
    <p>Light 'Em All</p>
    </div>
    </div>
    </div>
  );
}

export default Projects;
