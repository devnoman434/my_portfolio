import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Socket.io'] },
    { title: 'Fullstack / APIs', skills: ['MERN Stack', 'REST APIs', 'CRUD Apps'] },
    { title: 'Tools & DevOps', skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify'] }
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title glow-text">Core <span className="text-gradient">Skills</span></h2>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-card glass-panel">
            <h3>{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
