import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutContent from "../components/Content/AboutContent";
import React from "react";

function About(){
    return(<div id="root">
        <Header />
        <AboutContent/>
        <Footer />
      </div>);
}

export default About