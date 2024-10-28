import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import HomeContent from "../components/Content/HomeContent";
import AboutContent from "../components/Content/AboutContent";
import ExperienceContent from "../components/Content/ExperienceContent";
import ContactContent from "../components/Content/ContactContent";
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
    <div id="root">
      <Header />
      <section id="home" className="home">
        <div className="home-container">
          <HomeContent/>
        </div>
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
    </div>
  );
}

export default Home;
