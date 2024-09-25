import React from 'react';
import './about.css';
import hs from './hs.JPG';
import Header from './header';
import { useEffect } from 'react';
import resume from './assets/resume.pdf';


const About = () => {

   useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);
    return ( 
      
    <header className="about">
      <Header />
      <div id="about-section">
    <div className="headshot-background">
    <div className='headshot'>
        <img src={hs} alt='headshot'></img>
   </div>
   </div>
   <div className='btn-left'>
   <a href="https://github.com/priya-singh-14" target="_blank" rel="noopener noreferrer"></a>
   </div>
   <div className='btn-right'>
   <a href={resume} target="_blank" rel="noopener noreferrer"></a>
   </div>
   </div>
   <div className="fill"></div>
  </header>
);
};

export default About; 