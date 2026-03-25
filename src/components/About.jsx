import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-title glow-text">About <span className="text-gradient">Me</span></h2>
      <div className="about-glass glass-panel">
        <p>
          With a strong foundation in Mechatronics Engineering, I bring a unique perspective to web development. From designing precise systems to building scalable web applications, I thrive at the intersection of hardware intuition and software innovation.
        </p>
        <p>
          I started my journey exploring hardware control systems, which transitioned into an internship focused on front-end layouts and backend APIs. Today, I am a dedicated full MERN stack developer, passionate about building complex full-stack web apps, developing robust APIs, and creating dynamic, interactive frontends using modern frameworks.
        </p>
        <ul className="about-highlights">
          <li>Adaptability & Quick Learning</li>
          <li>Hardware-Thinking with Software Logic</li>
          <li>Problem Solving & Optimization</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
