import React from 'react';
import './Experience.css';

const Experience = () => {
  const exps = [
    {
      role: 'MERN Stack Developer',
      company: 'Freelance / Self-Employed',
      desc: 'Built full-stack applications integrating front-end React components with Node.js backend. Designed database schemas and API endpoints for dynamic web apps. Deployed apps on Vercel / Netlify and optimized performance.',
      year: 'Present'
    },
    {
      role: 'Intern – Web Development',
      company: 'Tech Agency',
      desc: 'Assisted in building responsive front-end layouts and simple backend APIs. Learned modern web practices, version control, and team collaboration.',
      year: 'Past'
    }
  ];

  return (
    <section id="experience" className="experience-section container">
      <h2 className="section-title glow-text">My <span className="text-gradient">Experience</span></h2>
      <div className="timeline">
        {exps.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="timeline-year text-gradient">{exp.year}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
