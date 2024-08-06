import React from "react";
import urimage from "../../Assets/image/photowork10.jpg";
import primage from "../../Assets/image/photowork7.jpg";
import "./About.css";
const AboutSection = () => {
  return (
    <div>
      <div className="imgdiv">
        <img src={urimage} alt="" />
        <img src={primage} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
