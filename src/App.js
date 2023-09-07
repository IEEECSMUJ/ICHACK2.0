import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './page/about'; 
import Footer from './page/footer'; 
import Navbar from './page/navbar'; 
import Sponsor from './page/sponsor'; 
import Team from './page/team'; 
import Timeline from './page/timeline'; 
import Track from './page/track'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/sponsor" element={<Sponsor />} /> 
        <Route path="/team" element={<Team />} /> 
        <Route path="/timeline" element={<Timeline />} /> 
        <Route path="/track" element={<Track />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
