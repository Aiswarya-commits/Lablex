import React from "react";
import Navbar from "../../pages/Navbar/Navbar";
import HeroSection from "../../pages/HeroSection/HeroSection";
import ServicesSection from "../../pages/ServicesSection/ServicesSection";
import VisualSection from "../../pages/Material/Material";
import CustomizeSection from "../../pages/CustomizeSection/CustomizeSection";
import CustomizeLabelSection from "../../pages/LabelShape/LabelShape";
import FullScreenDialog from "../../pages/Choose/Choose";
import Footer from "../../pages/Footer/Footer";
import Shape from "../../pages/Shape/Shape";
import About from "../../pages/About/About";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#08141c" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CustomizeSection />
      {/* <CustomizeLabelSection/> */}
      <Shape />
      <About/>
      <VisualSection />
      <FullScreenDialog/>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
