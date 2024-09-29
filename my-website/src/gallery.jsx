import React, { useState, useEffect } from 'react';
import './projects.css';
import Aura from './aura';
import w1 from './assets/w1.png'
import w2 from './assets/w2.png'
import w3 from './assets/w3.png'
import w4 from './assets/w4.png'


const Gallery = () => {
  return (
  <div className='all-gallery'>
  <Aura/>
  <div className='section'>
    <p>Webpages</p>

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

    </div>
  <div className='section'>
    <p>UX/UI</p>
  </div>
  <div className='section'>
    <p>Fine Art</p>
  </div>
  </div>
  );
};

export default Gallery;
