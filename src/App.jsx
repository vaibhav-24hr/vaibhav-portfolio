import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .award-card, .contact-content, .about-content').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#awards', label: 'Awards' },
  ];

  return (
    <div className="app-container">
      <nav className="glass-nav">
        <div className="container nav-container">
          <div className="logo">
            <img src="/logo-svg.svg" alt="Vaibhav Adesara Logo" className="logo-img" />
            <span>Vaibhav.</span>
          </div>



          {/* Desktop Nav */}
          <div className="nav-links desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</a>
              ))}
              <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>Let's Talk</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
