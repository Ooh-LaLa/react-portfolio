import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Resume from './pages/Resume/Resume';
import Projects from './data/projects.js';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <>
    <NavBar/>
    <main>
   <Routes>
    <Route path="about" element={<About />}/>
    <Route path="/" element={<Home />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/projects" element={<Projects />}/>
   </Routes>
   </main>
   </>
  )
}

export default App;
