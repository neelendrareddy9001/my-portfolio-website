import React from "react";
import "./About.scss";

import myImg from "../../assets/my_img.jpeg";

const About = () => {
  return (
    <>
      <section className="about__section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My inroduction</span>
        <div className="about_container container grid"></div>
      </section>
    </>
  );
};

export default About;
