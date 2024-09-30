import React from 'react';
import './header.css';
import bo from './bo.jpg';
import HomeButton from './homebutton';
import {motion} from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
    <HomeButton />
      <div className='text-section'>
      <motion.div 
        className='large'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}  /* Delayed entry */
        >
      <p>Hi, I’m Priya. </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}  /* Delayed entry */
        >
      <p>Developer & Designer. Computer Science and Design Major at Northeastern University.</p>
      </motion.div>
     </div>
     <div className='img-section'>
     <img src={bo} alt="img"></img>
     </div>
    </header>
  );
};

export default Header;
