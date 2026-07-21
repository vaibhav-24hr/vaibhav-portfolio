import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";

const statsData = [
  { value: 4, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Companies Worked" },
];

const AnimatedCounter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    setCount(0);
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" ref={sectionRef}>
      <div className="container stats-container">
        {statsData.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-value">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
