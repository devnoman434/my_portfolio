import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'All Languages Voice Translator',
      desc: 'Full-stack web app for real-time voice translation across multiple languages with high precision and low latency.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      link: '#'
    },
    {
      name: 'LiDAR Web Integration',
      desc: 'Integrated an iOS LiDAR scanning application with a comprehensive web dashboard for real-time 3D data visualization.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io'],
      link: '#'
    },
    {
      name: 'Virtual Number Management',
      desc: 'Credit purchase and renewal system featuring robust expiration logic, billing cycles, and automated number management.',
      tech: ['MERN Stack', 'MySQL'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title glow-text">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card glass-panel">
            <div className="project-content">
              <h3>{proj.name}</h3>
              <p>{proj.desc}</p>
              <div className="tech-stack">
                {proj.tech.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
            <div className="project-actions">
              <a href={proj.link} className="btn-neon" target="_blank" rel="noreferrer">Live Demo / GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
