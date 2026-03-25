import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <header className="hero-section container">
      <div className="hero-content">
        <h1 className="glow-text">Hi, I'm <span className="text-gradient">Noman</span></h1>
        <h2 className="subtitle">MERN Stack Developer & Mechatronics Engineer</h2>
        <p className="hero-description">
          I merge engineering precision with web innovation to build intelligent, responsive web applications.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-neon">View My Work</a>
          <a href="#contact" className="btn-neon btn-secondary">Hire Me</a>
        </div>
      </div>
      <div className="hero-image-container floating">
        {imageUnavailable ? (
          <div className="hero-image hero-image-fallback glass-panel">
            <p>Portfolio Preview</p>
          </div>
        ) : (
          <img
            src="/hero_image.png"
            alt="Futuristic Antigravity Developer"
            className="hero-image"
            onError={() => setImageUnavailable(true)}
          />
        )}
      </div>
    </header>
  );
};

export default Hero;
