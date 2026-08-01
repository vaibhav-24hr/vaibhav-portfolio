import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Master's",
    field: "Web & Mobile Application Development",
    school: "Langara College",
    location: "Vancouver, BC",
    date: "2024 - 2026",
    highlights: [
      "Capstone Project: AURA — AI-Powered Creator Coaching Platform",
      "Research Software Developer at Applied Research Centre (ARC) — Writing Lives digital archive"
    ]
  },
  {
    id: 2,
    degree: "Bachelor's in Computer Engineering",
    field: "Computer Engineering",
    school: "Gujarat Technological University (GTU)",
    location: "India",
    date: "2019 - 2023",
    highlights: [
      "Smart India Hackathon 2022 — National Level Participant",
      "Microsoft AI Classroom Series Certification"
    ]
  }
];

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-card glass-panel animate-fade-in">
              <div className="education-icon-wrapper">
                <GraduationCap size={28} />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-field">{edu.field}</h4>
                <p className="education-school">{edu.school}</p>
                <div className="education-meta">
                  <span className="education-date">
                    <Calendar size={14} /> {edu.date}
                  </span>
                  <span className="education-location">
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>
                {edu.highlights && (
                  <ul className="education-highlights">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
