import React, { useState } from 'react';
import { ExternalLink, Sparkles, FileText, X, ZoomIn } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "AURA",
    subtitle: "AI-Powered Creator Coaching Platform",
    description: "Engineered a cross-platform mobile application utilizing React Native and Redux for predictable state management, backed by a scalable MongoDB architecture. Architected a private coaching environment, delivering dynamic feedback on user presence, by integrating Google's Gemini API and MediaPipe.",
    tags: ["React Native", "Redux", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/WMDD-Capstone",
    demo: "https://aura-caliente.netlify.app/",
    featured: true,
    images: {
      architecture: "/projects/aura-architecture.png",
      techstack: "/projects/aura-techstack.png"
    },
    proposal: "/projects/aura-proposal.pdf"
  },
  {
    id: 2,
    title: "Bloom Up",
    subtitle: "AI-Powered Family Management Platform",
    description: "Architected backend infrastructure for a 10-person cross-functional team, ensuring highly secure data handling, by implementing JWT-based authorization. Streamlined deployment pipelines by configuring automated backend hosting via Render and managing frontend availability utilizing Amazon EC2.",
    tags: ["OpenAI API", "Chart.js", "Render", "AWS"],
    github: "https://github.com/YunMatsuura-school-account/BloomUp",
    demo: "https://bloomup.wmdd.ca",
    featured: false,
    images: {
      architecture: "/projects/bloomup-architecture.png",
      techstack: "/projects/bloomup-techstack.png"
    },
    proposal: "/projects/bloomup-proposal.pdf"
  },
  {
    id: 3,
    title: "Beacon - Team SkyLine",
    subtitle: "Transit Reporting PWA",
    description: "Engineered a Progressive Web App (PWA) for real-time transit reporting, implementing network-aware offline detection and fallback UI screens. Architected a scalable, serverless backend, achieving high-performance image storage, utilizing Firebase for data syncing and Supabase.",
    tags: ["Firebase", "Supabase", "JavaScript"],
    github: "https://github.com/vaibhav-24hr",
    demo: "#",
    featured: false,
    images: {
      architecture: "/projects/beacon-architecture.png",
      techstack: "/projects/Beacon_techstack.png"
    },
    proposal: null
  },
  {
    id: 4,
    title: "Expense Manager",
    subtitle: "Full-Stack Web Application",
    description: "Developed a full-stack Expense Manager enabling robust financial tracking for end-users, utilizing Spring Boot (MVC) and MySQL. Protected sensitive financial data by implementing a secure authentication system utilizing JWT and cookies.",
    tags: ["Java", "Spring Boot", "MySQL", "JavaScript", "JSP"],
    github: "https://github.com/vaibhav-24hr/expenseapp_23",
    demo: "#",
    featured: false,
    images: {
      architecture: "/projects/expense-architecture.png",
      techstack: "/projects/expense-techstack.png"
    },
    proposal: null
  }
];

const Projects = () => {
  const [activeTabs, setActiveTabs] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const getActiveTab = (projectId) => activeTabs[projectId] || 'architecture';

  const setTab = (projectId, tab) => {
    setActiveTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card glass-panel ${project.featured ? 'featured' : ''}`}>
              {/* {project.featured && (
                <div className="project-badge">
                  <Sparkles size={14} /> Featured
                </div>
              )} */}

              {/* Image Gallery */}
              {project.images && (
                <div className="project-gallery">
                  <div className="gallery-tabs">
                    <button
                      className={`gallery-tab ${getActiveTab(project.id) === 'architecture' ? 'active' : ''}`}
                      onClick={() => setTab(project.id, 'architecture')}
                    >
                      Architecture
                    </button>
                    <button
                      className={`gallery-tab ${getActiveTab(project.id) === 'techstack' ? 'active' : ''}`}
                      onClick={() => setTab(project.id, 'techstack')}
                    >
                      Tech Stack
                    </button>
                  </div>
                  <div
                    className="gallery-image-wrapper"
                    onClick={() => setLightboxImage(project.images[getActiveTab(project.id)])}
                  >
                    <img
                      src={project.images[getActiveTab(project.id)]}
                      alt={`${project.title} - ${getActiveTab(project.id)}`}
                      className="gallery-image"
                    />
                    <div className="gallery-zoom-hint">
                      <ZoomIn size={20} /> Click to enlarge
                    </div>
                  </div>
                </div>
              )}

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <GithubIcon size={20} /> Code
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                  {project.proposal && (
                    <a href={project.proposal} target="_blank" rel="noopener noreferrer" className="project-link proposal-link">
                      <FileText size={20} /> Proposal
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
            <X size={28} />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged view"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
