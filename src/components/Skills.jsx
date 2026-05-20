import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript (ES6+)", "Swift"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "React.js", "React Native", "Node.js", "Hibernate", "Redux"]
  },
  {
    title: "Databases & Infrastructure",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Elasticsearch", "Supabase", "Firebase"]
  },
  {
    title: "Cloud, DevOps & Tooling",
    skills: ["AWS", "Docker", "Jenkins", "Git", "AI-Assisted Dev"]
  }
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass-panel">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
