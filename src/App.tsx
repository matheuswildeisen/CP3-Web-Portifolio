import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './modules/Hero';
import Bio from './modules/Bio';
import Education from './modules/Education';
import Projects from './modules/Projects';
import Skills from './modules/Skills';
import Contact from './modules/Contact';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
