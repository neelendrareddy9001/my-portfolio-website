import React from "react";
import "./About.scss";

import myImg from "../../assets/my_img.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="section_title">About Me</h2>
        <div className="about_container container grid">
          <img src={myImg} className="about_img" alt="" />
          <div className="about_data">
            <Info />
            <p className="about_description">
              Since I am learning frontend development features. It motivates me
              design multiple Ui templates as i kept on going.
            </p>
            <a download="" href="cv" className="button button_flex">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
