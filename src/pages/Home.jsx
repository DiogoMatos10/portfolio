import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import HomeContent from "../components/Content/HomeContent";

function Home() {
  return (
    <div id="root">
      <Header />
      <div className="home-container">
        <HomeContent/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
