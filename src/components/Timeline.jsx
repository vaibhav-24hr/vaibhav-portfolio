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
      "Spearheaded the technical design and migration of the 'Writing Lives' digital archive to a Drupal-based platform, prioritizing scalable architecture and long-term data integrity.",
      "Designed a culturally sensitive UI/UX framework to secure the digital preservation of historical data in compliance with strict ethical standards."
    ]
  },
  {
    id: 2,
    role: "Junior Software Engineer",
    company: "SoluSoft Corporation",
    location: "Ahmedabad, India",
    date: "Nov 2023 - May 2024",
    description: [
      "Engineered a Fraud Investigation platform by integrating OpenText and ChatGPT APIs, reducing manual data entry time via automated summaries.",
      "Optimized real-time data processing for enterprise clients by building production-ready applications using React.js and Spring Boot.",
      "Accelerated team development efficiency by 40% through the creation of 30+ reusable React components during Agile sprints."
    ]
  },
  {
    id: 3,
    role: "Java Developer Intern",
    company: "Unnati Informatics LLP",
    location: "Ahmedabad, India",
    date: "Feb 2023 - May 2023",
    description: [
      "Developed a full-stack Expense Manager leveraging Spring Boot (MVC) and MySQL, enabling robust financial tracking.",
      "Protected sensitive financial data by implementing a secure authentication system utilizing JWT and cookies.",
      "Rendered real-time spending analytics by creating dynamic data visualization dashboards with JavaScript."
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
