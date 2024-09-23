import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='button'>
    <button onClick={goHome} className="home-button">
    </button>
    </div>
  );
};

export default HomeButton;
