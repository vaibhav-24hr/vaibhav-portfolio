import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Vaibhav Adesara</h1>
          <h2 className="hero-title">
            <span className="text-gradient">Software Engineer</span> specializing in full-stack development and applied AI integrations.
          </h2>
          <p className="hero-description">
            Proven track record of architecting scalable backend systems, optimizing real-time data processing, and delivering secure applications within Agile teams.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <div className="hero-photo-ring">
            <img
              src="/profile-photo.jpeg"
              alt="Vaibhav Adesara"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
