import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutContent from "../components/AboutContent/AboutContent";
import React from "react";
import ScrollReveal from "../components/utils/ScrollReveal";	

function About() {
  return (
    <>
      <Header />
      <ScrollReveal delay={0.2}>
        <AboutContent />
      </ScrollReveal>
      <Footer />
    </>
  );
}

export default About;
