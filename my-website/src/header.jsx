import React from 'react';
import './header.css';
import bo from './bo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className='text-section'>
      <div className='large'>
      <p>Hi, I’m Priya. </p>
      </div>
      <p>Developer & Designer. Computer Science and Design Major at Northeastern University.</p>
     </div>
     <div className='img-section'>
     <img src={bo} alt="img"></img>
     </div>
    </header>
  );
};

export default Header;
