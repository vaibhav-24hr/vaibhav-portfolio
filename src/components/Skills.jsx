import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java (OOP)", "Python", "JavaScript (ES6+)", "Swift (Programmatic UI)", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring MVC", "Hibernate", "React.js", "React Native", "Redux", "Node.js"]
  },
  {
    title: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Supabase", "Firebase"]
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: ["AWS (EC2)", "Docker", "CI/CD (Jenkins)", "Git", "Linux", "Cursor IDE"]
  },
  {
    title: "Architecture & AI",
    skills: ["RESTful APIs", "Microservices", "LLM API Integration", "Multi-Agent Systems", "Event-Driven Design"]
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
