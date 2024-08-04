import React, { useEffect, useState, useRef } from 'react';
import './AboutContent.css';
import { dataSkills } from '../../../data';

function AboutContent() {
  const [skills, setSkills] = useState(dataSkills); 
  const skillContainerRef = useRef(null);

  useEffect(() => {
    const spans = document.querySelectorAll('.bar span');
    const percentages = document.querySelectorAll('.percentage');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spans.forEach((span, index) => {
            const percentage = percentages[index];
            const width = percentage.textContent;
            span.style.setProperty('--bar-width', width); 
            span.classList.add('animate');
            percentage.style.setProperty('--percentage-left', width); 
            percentage.classList.add('animatePer');
          });
        } else {
          spans.forEach((span, index) => {
            span.classList.remove('animate');
            const percentage = percentages[index];
            percentage.classList.remove('animate');
          });
        }
      });
    });

    if (skillContainerRef.current) {
      observer.observe(skillContainerRef.current);
    }

    const updatePercentagePositions = () => {
      const bars = document.querySelectorAll('.bar');
      const barWidth = bars[0]?.clientWidth || 0; 
      percentages.forEach(percentage => {
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        percentage.style.left = `${barWidth * widthPercentage - 15}px`; 
      });
    };

    updatePercentagePositions(); 

    window.addEventListener('resize', updatePercentagePositions); 

    return () => {
      window.removeEventListener('resize', updatePercentagePositions); 
    };
  }, [skills]);

  const firstHalfSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalfSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="about-container">
      <div className="about-info">
        <p className="titles">About</p>
        <p className="paragraph">
          I'm Diogo Matos. I'm 21 years old and recently graduated with a degree in
          Computer Sciences Engineering from Évora, Portugal. I am from Portugal and am highly proactive, 
          always eager to learn and work. My main focus is on web and mobile development.
        </p>
      </div>
      <div className="projects">
        <p className="titles">Projects</p>
      </div>
      <div className="skills" ref={skillContainerRef}>
        <p className="skills-header">Digital Skills</p>
        <div className="skills-content">
          <div className="skill-column">
            {firstHalfSkills.map(skill => (
              <div key={skill.name} className="skill-container">
                <p>{skill.name}</p>
                <div className={`percentage ${skill.name.toLowerCase()}-percentage`}>
                  {skill.percentage}
                </div>
                <div className="bar">
                  <span className={`${skill.name.toLowerCase()}`}></span>
                </div>
              </div>
            ))}
          </div>
          <div className="skill-column">
            {secondHalfSkills.map(skill => (
              <div key={skill.name} className="skill-container">
                <p>{skill.name}</p>
                <div className={`percentage ${skill.name.toLowerCase()}-percentage`}>
                  {skill.percentage}
                </div>
                <div className="bar">
                  <span className={`${skill.name.toLowerCase()}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
