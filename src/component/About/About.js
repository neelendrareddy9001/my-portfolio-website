import React from "react";
import "./About.scss";

import myImg from "../../assets/my_img.jpeg";

const About = () => {
  return (
    <>
      <section className="about__container" id="about__container">
        <div className="about__container-inner" id="about__container-inner">
          <div className="about__left-container">
            <h3>My Portfolio</h3>
          </div>
          <div className="about__right-container">
            <img src={myImg} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
