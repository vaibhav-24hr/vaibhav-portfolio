import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    id: 1,
    role: "Student Research Assistant",
    company: "Langara College - Applied Research Centre (ARC)",
    location: "Vancouver, Canada",
    date: "Sep 2025 - Present",
    description: [
      "Spearheaded the technical design of the 'Writing Lives' digital archive utilizing Vanilla JavaScript, intentionally bypassing traditional CMS frameworks to prioritize frontend flexibility and rapid development.",
      "Engineered a culturally sensitive UI/UX framework, securing the digital preservation of historical data in compliance with strict ethical standards, utilizing modern web protocols."
    ]
  },
  {
    id: 2,
    role: "Freelance Software Engineer",
    company: "Unsoldly",
    location: "Remote",
    date: "Jun 2025 - Jan 2026",
    description: [
      "Engineered a full-stack B2B marketplace connecting electronic component vendors with local businesses, facilitating bulk inventory discovery utilizing React and Spring Boot.",
      "Architected a geolocation-based vendor discovery engine by integrating Elasticsearch, enabling clients to rapidly filter and locate nearby suppliers with minimal read latency.",
      "Engineered an automated Continuous Integration (CI) pipeline utilizing Jenkins, ensuring high backend reliability by executing JUnit and Mockito test suites prior to code merges."
    ]
  },
  {
    id: 3,
    role: "Junior Software Engineer",
    company: "SoluSoft Corporation",
    location: "Ahmedabad, India",
    date: "Nov 2023 - May 2024",
    description: [
      "Engineered a Fraud Investigation platform, reducing manual data entry time by 30%, by automating email summaries and case reports utilizing OpenText and ChatGPT APIs.",
      "Optimized real-time data processing pipelines for enterprise clients, handling high-volume transactions with minimal latency, by building production-ready applications utilizing React.js and Spring Boot."
    ]
  },
  {
    id: 4,
    role: "Java Developer Intern",
    company: "Unnati Informatics LLP",
    location: "Ahmedabad, India",
    date: "Feb 2023 - May 2023",
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
