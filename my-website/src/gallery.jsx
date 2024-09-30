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
  return (
    <div className='all'><Aura/>
  <motion.div 
        className='all-gallery'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}  /* Delayed entry */
        >

  <div className='section'>
    <p>Webpages</p>
    <hr class="custom-hr" />

    <div className='gallery-item'>
    <div className='gallery-img'>
      <img src={w2}></img>
    </div>
    <div className='gallery-text'>
     <p>talk here</p>
    </div>
    </div>

    <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={w3}></img>
        </div>
    </div>
        
   <div className='gallery-item'>
    <div className='gallery-img'>
      <img src={w4}></img>
      </div>
      </div>

<div className='gallery-item'>
<div className='gallery-img'>
  <img src={w1}></img>
</div>
<div className='gallery-text'>
 <p>talk here</p>
</div>
</div>
<hr class="custom-hr" />
    </div>
    
  <div className='section'>
    <p>UX/UI</p>
    <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={u1}></img>
        </div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={u2}></img>
        </div>
        <div className='gallery-img-tall'>
        <img src={u4}></img>
        </div>
        <div className='gallery-img-tall'>
        <img src={u5}></img>
        </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={u3}></img>
        </div>
        <div className='gallery-img-tall'>
        <img src={u6}></img>
        </div>
        <div className='gallery-img-tall'>
        <img src={u7}></img>
        </div>
          </div>
          <hr class="custom-hr" />
          </div>
  <div className='section'>
    <p>Fine Art</p>
    <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={f1}></img>
        </div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-img'>
        <img src={f2}></img>
        </div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-img-tall'>
        <img src={f3}></img>
        </div>
        <div className='gallery-text'>
          <p>talk here</p>
          </div>
          </div>

          <div className='gallery-item'>
      <div className='gallery-img-tall'>
        <img src={f4}></img>
        </div>
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
