import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Elastic Path",
    location: "Vancouver, BC",
    date: "Jun 2025 - Present",
    description: [
      "Built a cloud-native B2B e-commerce marketplace with React and Spring Boot, scaling a distributed product catalog to manage 10,000+ localized SKUs across multiple vendors.",
      "Designed a geolocation-based vendor discovery engine on Elasticsearch, returning ranked nearby-supplier results in under 200ms across the full catalog.",
      "Automated a Jenkins CI pipeline that runs JUnit and Mockito test suites on every pull request, blocking regressions before merge and keeping the main branch release-ready.",
      "Developed responsive, reusable frontend components with React and Redux, standardizing the UI across 15+ vendor-facing pages and reducing cross-browser rendering issues."
    ]
  },
  {
    id: 2,
    role: "Research Software Developer",
    company: "Langara College — Applied Research Centre (ARC)",
    location: "Vancouver, BC",
    date: "Sep 2025 - Apr 2026",
    description: [
      "Architected the technical design of the \"Writing Lives\" digital archive in Vanilla JavaScript and semantic HTML, deliberately avoiding heavyweight CMS frameworks to cut initial page render time by 40%.",
      "Engineered an accessible, WCAG-compliant frontend for the life-story archive with responsive HTML5, CSS3, and ARIA attributes, enabling new narratives to be published without code changes.",
      "Produced technical documentation and contributor guides for the archive system, reducing onboarding time for new research assistants and enabling non-technical staff to manage content independently.",
      "Implemented SEO best practices and performance optimizations across the archive, improving discoverability through structured metadata, semantic markup, and image compression."
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Solusoft Technologies Pvt. Ltd",
    location: "India",
    date: "Feb 2023 - May 2024",
    description: [
      "Engineered a fraud-investigation platform that reduced manual data-entry time by 30% by auto-generating email summaries and case reports via the OpenText and ChatGPT APIs.",
      "Optimized real-time data-processing pipelines for enterprise clients, sustaining sub-second response times under high transaction volume using React.js and Spring Boot.",
      "Built a full-stack financial tracking application with Spring Boot (MVC), MySQL, and JWT authentication, achieving zero unauthorized-access incidents while enabling end-to-end expense management.",
      "Accelerated team development efficiency by 40% through the creation of 30+ reusable React components and strict adherence to Agile sprints with cross-functional teams."
    ]
  },
  {
    id: 4,
    role: "Java Developer Intern",
    company: "Unnati Informatics LLP",
    location: "Ahmedabad, India",
    date: "Nov 2022 - Jan 2023",
    description: [
      "Developed a full-stack Expense Manager, enabling robust financial tracking for end-users, utilizing Spring Boot (MVC) and MySQL.",
      "Protected sensitive financial data, achieving zero unauthorized access incidents, by implementing a secure authentication system utilizing JWT and cookies."
    ]
  }
];

const Timeline = () => {
  return (
    <section className="section timeline-section" id="experience">
      <div className="container">
        <h2 className="section-title">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item animate-fade-in">
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="timeline-date-location">
                    <div className="timeline-date">
                      <Calendar size={16} />
                      {exp.date}
                    </div>
                    <div className="timeline-location">{exp.location}</div>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
