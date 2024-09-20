import React from 'react';
import './about.css';
import hs from './hs.JPG';

const About = () => {
    return ( 
    <header className="about">
    <div className="headshot-background">
    <div className='headshot'>
        <img src={hs} alt='headshot'></img>
   </div>
   </div>
  </header>
);
};

export default About; 