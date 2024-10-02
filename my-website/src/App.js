import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './navbar.jsx';
import About from './about.jsx';
import Projects from './projects.jsx';
import HomeButton from './homebutton.jsx';
import Header from './header.jsx';
import Gallery from './gallery.jsx';
import Candy from './candy.jsx';
import SV from './sv.jsx';
import Minesweeper from './mine.jsx';
import ZType from './ztype.jsx';
import LightEm from './lem.jsx';

function App() {
  return (
    <Router basename='/portfolio'>
        <Navbar />
        <HomeButton />
      <Routes>
        <Route path="/" element={<Header />} /> {}
        <Route path="/about" element={<About />} /> {About}
        <Route path="/projects" element={<Projects />} /> {Projects}
        <Route path="/gallery" element={<Gallery />} /> {Gallery}
        <Route path="/candy" element={<Candy />} /> {Candy}
        <Route path="/stockview" element={<SV />} /> {SV}
        <Route path="/minesweeper" element={<Minesweeper />} /> {Minesweeper}
        <Route path="/ztype" element={<ZType />} /> {ZType}
        <Route path="/lightemall" element={<LightEm />} /> {LightEm}
      </Routes>
    </Router>
  );
}


export default App;
