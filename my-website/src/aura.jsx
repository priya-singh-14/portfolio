import React, { useState, useEffect } from 'react';
import './projects.css';

const Aura = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [colors, setColors] = useState({
    color1: 'rgba(255, 189, 199, 0.6)',
    color2: 'rgba(0, 255, 26, 0.3)'
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
    <div
      className="aura"
      style={{
        background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, ${colors.color1}, ${colors.color2})`
      }}
    ></div>
  );
};

export default Aura;
