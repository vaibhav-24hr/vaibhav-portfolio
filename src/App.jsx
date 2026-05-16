import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-content').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <nav className="glass-nav">
        <div className="container nav-container">
          <div className="logo">VA.</div>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
