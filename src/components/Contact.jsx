import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title glow-text">Get In <span className="text-gradient">Touch</span></h2>
      <div className="contact-container glass-panel">
        <p className="contact-desc">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-links">
          <a href="mailto:noman@example.com" className="btn-neon">Email Me</a>
          <a href="#" className="btn-neon btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" className="btn-neon" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" className="btn-neon btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
