// src/components/Projects.jsx
import React from 'react';
import './projects.css'

function Projects() {
  return (
      <div className='all-projects'>
        <div className='heading'>
        <h1>Projects</h1>
      <p>My collection of academic work and personal projects in full-stack development</p>
      </div>
      <div class="project-grid">
        <div class="project-item">
        <h2>Northeastern Science Magainze</h2>
        <p>As a member of the Northeastern Science Magainze (NuSci) Web Developement Team, I've spent the last two semesters working on the backend architecture to build a fully-functional article posting website for the organization. As a member of the Design Team as well, I've worked on page mockups and UX-UI functionality through programs like Figma and React.</p>
        </div>
        <div class="project-item">
        <h2>Candid Candies</h2>
        <p>Using JavaScript, React, and MongoDB, this message-board website posts anonymous messages as candy hearts.</p>
       </div>
        <div class="project-item">
        <h2>Webpages</h2>
        <p>A collection of mockups for websites, exhibiting skills in CSS, HTML, and supplements in Python and Javascript.</p>
        </div>
      </div>
     </div> 
  );
}

export default Projects;
