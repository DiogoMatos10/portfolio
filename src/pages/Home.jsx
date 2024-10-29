import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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
    const hash = location.hash; // Obtém o hash da URL

    if (hash) {
        const element = document.querySelector(hash); // Seleciona o elemento pelo hash
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave até o elemento
        }
    }
  }, [location]);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Home;
