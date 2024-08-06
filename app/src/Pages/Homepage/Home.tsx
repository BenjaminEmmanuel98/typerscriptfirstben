import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AboutSection from "../../Components/About us/AboutSection";
import Hero from "../../HeroSection/Hero";
import SeoFriendly from "../../SeoFriendly/SeoFriendly";
import RoughSheet from "../../RoughSheet/RoughSheet";


const Home = () => {
  return (
    <div>
      {/* <Navbar/>
      <AboutSection/> */}
      <Hero/>
      <SeoFriendly/>
      <RoughSheet/>
    </div>
  );
};

export default Home;
