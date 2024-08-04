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
            percentage.classList.add('animate');
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
      const barWidth = document.querySelector('.bar').clientWidth;
      percentages.forEach(percentage => {
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        percentage.style.left = `${barWidth * widthPercentage-12}px`;
      });
    };

    updatePercentagePositions(); 

    window.addEventListener('resize', updatePercentagePositions); 

    return () => {
      window.removeEventListener('resize', updatePercentagePositions); 
    };
  }, [skills]);

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
        {/* Future projects content can go here */}
      </div>
      <div className="skills" ref={skillContainerRef}>
        <p className="titles">Skills</p>
        <div className="skills-header">
          {skills.map(skill => (
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
  );
}

export default AboutContent;
