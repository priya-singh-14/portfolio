import React, { useState, useEffect } from 'react';
import './projects.css';
import Aura from './aura';
import w1 from './assets/w1.png'
import w2 from './assets/w2.png'
import w3 from './assets/w3.png'
import w4 from './assets/w4.png'
import u1 from './assets/sheep.png'
import u2 from './assets/u2.png'
import u3 from './assets/u3.png'
import u4 from './assets/u4.png'
import u5 from './assets/u5.png'
import u6 from './assets/u6.png'
import u7 from './assets/u7.png'
import f1 from './assets/bed.jpg'
import f2 from './assets/bleach.jpg'
import f3 from './assets/duck.jpg'
import f4 from './assets/lily.jpg'
import {motion} from 'framer-motion';

const Gallery = () => {
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

  return (
    <div className='all'>
  <motion.div 
        className='all-gallery'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}  /* Delayed entry */
        >
    
  <div className='section'>
    <p>UX/UI</p>
    <hr class="custom-hr" />
    <div className='gallery-item'>
      <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={u1}></img>
        </div></div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={u2}></img>
        </div></div>
        <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
        <div className='gallery-img-tall'>
        <img src={u4}></img>
        </div></div>
        <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
        <div className='gallery-img-tall'>
        <img src={u5}></img>
        </div></div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={u3}></img>
        </div></div>
        <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
        <div className='gallery-img-tall'>
        <img src={u6}></img>
        </div></div>
        <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
        <div className='gallery-img-tall'>
        <img src={u7}></img>
        </div></div>
          </div>
          <hr class="custom-hr" />
          </div>

          <div className='section'>
    <p>Webpages</p>

    <div className='gallery-item'>
    <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
    <div className='gallery-img'>
      <img src={w2}></img>
    </div></div>
    <div className='gallery-text'>
     <p>talk here</p>
    </div>
    </div>


    <div className='gallery-item'>
    <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={w3}></img>
        </div></div>
    </div>
        
   <div className='gallery-item'>
   <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
    <div className='gallery-img'>
      <img src={w4}></img>
      </div></div>
      </div>

<div className='gallery-item'>
<div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
<div className='gallery-img'>
  <img src={w1}></img>
</div></div>
<div className='gallery-text'>
 <p>talk here</p>
</div>
</div>
<hr class="custom-hr" />
    </div>

  <div className='section'>
    <p>Fine Art</p>
    <div className='gallery-item'>
    <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={f1}></img>
        </div></div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={f2}></img>
        </div></div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img-tall'>
        <img src={f3}></img>
        </div></div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img-tall'>
        <img src={f4}></img>
        </div></div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>
  </div>
  </motion.div>
  </div>
  );
};

export default Gallery;
