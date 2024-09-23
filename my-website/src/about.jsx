import React from 'react';
import './about.css';
import hs from './hs.JPG';
import Header from './header';
import { useEffect } from 'react';


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
   </div>
  </header>
);
};

export default About; 