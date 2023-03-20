import React, {useState, useEffect} from 'react';
import './App.css';
import About from './composants/About';
import Contact from './composants/Contact';
import Navbar from "./composants/Navbar";
import Projects from './composants/Projects';
import Services from './composants/Services';
import Skills from './composants/Skills';

function App() {

  return (
    <main className='container'>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
