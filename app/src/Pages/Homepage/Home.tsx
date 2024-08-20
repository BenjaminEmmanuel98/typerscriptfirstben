import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AboutSection from "../../Components/About us/AboutSection";
import Hero from "../../HeroSection/Hero";
import SeoFriendly from "../../SeoFriendly/SeoFriendly";
import RoughSheet from "../../RoughSheet/RoughSheet";
import ResponsiveAppBar from "../../Components/Navbar2/NavbarMui";
import { Button } from "@mui/material";
import BasicTable from "../../TABLE/Table";
import Rough from "../../Components/Rough2/Rough";
const Home = () => {
  return (
    <div>
      <Rough/>
      {/* <Navbar/>
      <BasicTable />
      {/* <Hero/> */}
      {/* <SeoFriendly/> */}
      {/* <Button color="secondary"></Button> */}
      {/* <Button variant="contained" color="success"> */}
        {/* Click Here */}
      {/* </Button> */}
      {/* <Button variant="outlined" color="error"> */}
        {/* Error */}
      {/* </Button> */}
      {/* <RoughSheet />
      <ResponsiveAppBar /> */}
      {/* <AboutSection/>  */}
    </div>
  );
};

export default Home;
