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
          <a href="mailto:muhammadnomanqamar3@gmail.com" target="_blank" className="btn-neon">Email Me</a>
          <a href="https://www.linkedin.com/in/muhammad-noman-qamar-925726251/" target="_blank" className="btn-neon btn-secondary" aria-disabled="true">LinkedIn</a>
          <a href='https://github.com/noman434358' target="_blank" className="btn-neon" aria-disabled="true">GitHub</a>
          <a href="https://wa.me/923357233034" target="_blank" className="btn-neon btn-secondary" aria-disabled="true">WhatsApp</a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
