import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
        <Navbar />
        <HomeButton />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/candy" element={<Candy />} />
        <Route path="/stockview" element={<SV />} />
        <Route path="/minesweeper" element={<Minesweeper />} />
        <Route path="/ztype" element={<ZType />} />
        <Route path="/lightemall" element={<LightEm />} />
      </Routes>
    </Router>
  );
}

export default App;
