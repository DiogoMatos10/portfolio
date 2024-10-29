
import React from "react";
import HomeContent from "../components/HomeContent/HomeContent";
import AboutContent from "../components/AboutContent/AboutContent";
import ExperienceContent from "../components/ExperienceContent/ExperienceContent";
import ContactContent from "../components/ContactContent/ContactContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; 

    if (hash) {
        const element = document.querySelector(hash); 
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [location]);

  return (
    <>
      <section id="home" className="home">
          <HomeContent/>
      </section>
      <section id="about" className="about">
        <AboutContent/>  
      </section>
      <section id="experience" className="experience">
        <ExperienceContent/>  
      </section>
      <section id="contact" className="contact">
        <ContactContent/>  
      </section>
    </>
  );
}

export default Home;
