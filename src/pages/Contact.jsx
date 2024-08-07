import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactContent from "../components/Content/ContactContent";
import React from "react";


function Contact(){
    return(<div id="root">
        <Header />
        <ContactContent/>
        <Footer />
      </div>);
}

export default Contact