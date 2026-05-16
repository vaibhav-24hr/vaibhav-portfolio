import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import './Contact.css';

const Contact = () => {
  return (
    <footer className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-content glass-panel">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="contact-description">
              I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <a href="mailto:vaibhavcan24@gmail.com" className="contact-item">
                <div className="icon-wrapper"><Mail size={20} /></div>
                vaibhavcan24@gmail.com
              </a>
              <div className="contact-item">
                <div className="icon-wrapper"><MapPin size={20} /></div>
                Vancouver, BC (Open to Remote)
              </div>
            </div>
          </div>
          
          <div className="contact-social">
            <h3>Find me online</h3>
            <div className="social-links">
              <a href="https://github.com/vaibhav-24hr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <GithubIcon size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/vaibhav--/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vaibhav Adesara. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
