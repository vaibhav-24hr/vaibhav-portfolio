import React from 'react';
import { Code, Rocket, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="about-content glass-panel">
          <div className="about-text">
            <p className="about-description">
              I'm a <strong>Software Engineer</strong> based in Vancouver, BC with a strong foundation in 
              computer science and a passion for building scalable, real-world applications. From architecting 
              B2B marketplaces and fraud investigation platforms to engineering AI-powered coaching tools, 
              I thrive at the intersection of <strong>full-stack development</strong> and <strong>applied AI</strong>.
            </p>
            <p className="about-description">
              I value clean code, thoughtful system design, and collaborative Agile workflows. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or diving into the latest in AI and machine learning.
            </p>
          </div>

          <div className="about-values">
            <div className="value-item">
              <div className="value-icon"><Code size={22} /></div>
              <div>
                <h4 className="value-title">Clean Architecture</h4>
                <p className="value-desc">Building maintainable, scalable systems with clear separation of concerns.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon"><Rocket size={22} /></div>
              <div>
                <h4 className="value-title">Continuous Learning</h4>
                <p className="value-desc">Always exploring new technologies — from AI APIs to cloud infrastructure.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon"><Users size={22} /></div>
              <div>
                <h4 className="value-title">Team Collaboration</h4>
                <p className="value-desc">Experienced in cross-functional Agile teams with strong communication skills.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon"><Lightbulb size={22} /></div>
              <div>
                <h4 className="value-title">Problem Solving</h4>
                <p className="value-desc">Turning complex business requirements into elegant technical solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
