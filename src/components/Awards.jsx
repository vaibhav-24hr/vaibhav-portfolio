import React from 'react';
import { Award, Medal } from 'lucide-react';
import './Awards.css';

const awardsData = [
  {
    type: "Certification",
    title: "MICROSOFT AI Classroom Series",
    issuer: "Microsoft",
    date: "June 2021",
    icon: <Award className="award-icon" />
  },
  {
    type: "Award",
    title: "Smart India Hackathon 2022",
    issuer: "SAL EDUCATION",
    date: "2022",
    icon: <Medal className="award-icon" />
  }
];

const Awards = () => {
  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <h2 className="section-title">
          Certifications & <span className="text-gradient">Awards</span>
        </h2>
        
        <div className="awards-grid">
          {awardsData.map((item, idx) => (
            <div key={idx} className="award-card glass-panel animate-fade-in">
              <div className="award-header">
                {item.icon}
                <span className="award-type">{item.type}</span>
              </div>
              <h3 className="award-title">{item.title}</h3>
              <div className="award-footer">
                <span className="award-issuer">{item.issuer}</span>
                <span className="award-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
