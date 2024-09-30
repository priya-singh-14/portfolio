import React from 'react';
import './about.css';
import hs from './hs.JPG';
import Header from './header';
import { useEffect, useState } from 'react';
import resume from './assets/resume_final.pdf';
import {motion} from 'framer-motion';

const About = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [colors, setColors] = useState({
    color1: 'rgba(255, 189, 199, 0.6)',
    color2: 'rgba(0, 60, 255, 0.3)'
  });

  // Handle cursor position and change gradient
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    // You can add more dynamic color-changing logic here
    const color1 = `rgba(${Math.floor(e.clientX / 4)}, 0, ${255 - Math.floor(e.clientX / 4)}, 0.6)`;
    const color2 = `rgba(0, ${Math.floor(e.clientY / 4)}, ${255 - Math.floor(e.clientY / 4)}, 0.3)`;
    setColors({ color1, color2 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

   useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);
    return ( 

    <header className="about">
      <Header />
      
      <div id="about-section">

      <motion.div 
        className='btn-left'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}  /* Delayed entry */
        >
   <a href="https://github.com/priya-singh-14" target="_blank" rel="noopener noreferrer">Github</a>
   
   </motion.div>

   <motion.div 
        className='btn-right'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}  /* Delayed entry */
        >
   <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
   </motion.div>


   <div className='about-item'>
    

   <motion.div 
        className='about-img'
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1, delay: 0.4 }}  /* Delayed entry */
        >
  <div className='about-img'>
    <div className="headshot-background" style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`
      }}>
      <div className='headshot'>
        <img src={hs} alt='headshot'></img>
      </div>
    </div>
  </div>
  </motion.div>

  <motion.div
        className='about-text'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}  /* Delayed entry */
>
  <p><strong>Creative Problem-Solver:</strong> <span className="hidden-text">Tackling challenges with creativity and logic</span></p>
  <p><strong>Design Thinker:</strong> <span className="hidden-text">Bridging the gap between functionality and aesthetics</span></p>
  <p><strong>Curious Learner:</strong> <span className="hidden-text">Constantly exploring and experimenting with new technologies</span></p>
  <p><strong>Detail-Oriented:</strong> <span className="hidden-text">Focused on the small touches that make a big impact</span></p>
  <p><strong>Collaborative:</strong> <span className="hidden-text">Bringing projects to life through discussion and ideation</span></p>
  </motion.div>

   </div>

   </div>
   <div className="fill"></div>
  </header>
);
};

export default About; 