import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="portfolio-app">
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Noman. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
