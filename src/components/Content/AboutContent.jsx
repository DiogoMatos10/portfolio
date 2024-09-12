import React, { useEffect, useState, useRef } from 'react';
import './AboutContent.css';
import { dataSkills, dataProjects } from '../../../data';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AboutContent() {
  const [skills, setSkills] = useState(dataSkills); 
  const [ t ,i18n ] = useTranslation('global');
  const projects = t('projects', { returnObjects: true });
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
        <p className="titles">{t("about.about")}</p>
        <p className="paragraph">{t("about.paragraph")}</p>
      </div>
      <div className="projects">
        <p className="titles">{t("about.projects")}</p>
        <div className='project-content'>
          {projects.map(project => (
            project.link ? (
              <abbr title={t("projectsAbbr.abbrProject")}>
                <Link to={project.link} key={project.name}>
                  <div className='project-container'>
                    <p className='project-title'>{project.name}</p>
                    <p className='project-description'>{project.description}</p>
                    <div className='project-tecnologies'>
                      {project.technologies.map((tecnology, index) => (
                        <p key={`${project.name}-tech-${index}`} className="tecnology-container">{tecnology}</p>
                      ))}
                    </div>
                  </div>
                </Link>
              </abbr>
            ) : (
              <div className='project-container' key={project.name}>
                <p className='project-title'>{project.name}</p>
                <p className='project-description'>{project.description}</p>
                <div className='project-tecnologies'>
                  {project.technologies.map((tecnology, index) => (
                    <p key={`${project.name}-tech-${index}`} className="tecnology-container">{tecnology}</p>
                  ))}
                </div>
              </div>
            )
          ))}
          <abbr title={t("projectsAbbr.abbrMore")}>
            <Link className="see-more" to={"https://github.com/DiogoMatos10?tab=repositories"}><p>{t("about.click")}</p></Link>
          </abbr>
        </div>
      </div>
      <div className="skills" ref={skillContainerRef}>
        <p className="titles">{t("about.skills")}</p>
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
