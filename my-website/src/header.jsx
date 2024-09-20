import React from 'react';
import './header.css';
import bo from './bo.jpg';
import HomeButton from './homebutton';

const Header = () => {
  return (
    <header className="header">
    <HomeButton />
      <div className='text-section'>
      <div className='large'>
      <p>Hi, I’m Priya. </p>
      </div>
      <p>Developer & Designer. Computer Science and Design Major at Northeastern University.</p>
     </div>
     <div className='img-section'>
     <img src={bo} alt="img"></img>
     </div>
     <div class="blur-footer"></div>
    </header>
  );
};

export default Header;
