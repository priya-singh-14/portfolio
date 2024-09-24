import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './navbar.jsx';
import About from './about.jsx';
import Projects from './projects.jsx';
import HomeButton from './homebutton.jsx';
import Header from './header.jsx';
import Gallery from './gallery.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <HomeButton />
      <Routes>
        <Route path="/" element={<Header />} /> {}
        <Route path="/about" element={<About />} /> {About}
        <Route path="/projects" element={<Projects />} /> {Projects}
        <Route path="/gallery" element={<Gallery />} /> {Gallery}
      </Routes>
    </Router>
      
    </div>
  );
}


export default App;
