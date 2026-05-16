import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript (ES6+)", "HTML5/CSS3"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Hibernate", "React.js", "React Native", "Node.js"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MS SQL Server", "MongoDB", "Supabase", "Firebase"]
  },
  {
    title: "Infrastructure & APIs",
    skills: ["AWS", "Docker", "Git", "Linux", "JWT", "REST APIs", "MediaPipe", "OpenAI", "Gemini"]
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
