import React, { useState, useEffect } from 'react';
import './projects.css';
import w1 from './assets/w1.png'
import w2 from './assets/w2.png'
import w3 from './assets/w3.png'
import w4 from './assets/w4.png'
import u1 from './assets/sheep.png'
import u2 from './assets/u2.png'
import u3 from './assets/u3.png'
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
          <p style={{
        color: '#555',
      }}>The Dream Diary is a fully designed mockup for a mobile app intended to improve the waking up experience of users. </p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={u2}></img>
        </div></div>
        <div className='gallery-text'>
        <p style={{
        color: '#555',
      }}>The app gamifies the waking up process by allowing users to log and track their dreams, which unlocks digital pet sheep. These pets can be cared for and bought items using a built-in currency that incentivizes use of the application. </p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={u3}></img>
        </div></div>
        <div className='gallery-text'>
        <p style={{
        color: '#555',
      }}>This project was made with three other students, with additional functionalities such as daily personalized songs inspired by sleep performance, a built-in store and upgraded spaces that are unlocked through continued use of the app. The UI is comprised of hand-drawn, sleep-inspired imagery and features a relaxing yet attention-catching pastel color scheme.</p>
          </div>
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
     <p>Designed and developed multiple webpages connected through responsive design for Amber Coffee Company using CSS/HTML.</p>
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
<p style={{
        color: '#555',
      }}>Landing page for a fictional coffee company inspired by Formula1 Racing. Built using CSS/HTML. </p>
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
        <p style={{
        color: '#555',
      }}><strong>"Awaiting You"</strong> | Chalk Pastel on Toned Pastel Paper. 18x24.</p>
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
        <p style={{
        color: '#555',
      }}><strong>"Washed Out</strong> | Chalk Pastel on Toned Pastel Paper. 18x24.</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={f3}></img>
        </div></div>
        <div className='gallery-text'>
        <p style={{
        color: '#555',
      }}><strong>"Out of Place"</strong> | Chalk Pastel on Toned Pastel Paper. 18x24.</p>
          </div>
          </div>

          <div className='gallery-item'>
          <div className='gallery-bg' style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`,
      }}>
      <div className='gallery-img'>
        <img src={f4}></img>
        </div></div>
        <div className='gallery-text'>
        <p style={{
        color: '#555',
      }}><strong>"Reverie of Lilypads"</strong> | Acrylic Paint on Canvas. 16x20 </p>
          </div>
          </div>
  </div>
  </motion.div>
  </div>
  );
};

export default Gallery;
