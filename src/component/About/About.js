import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import myImg from "../../assets/my_img.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about container section" id="about">
        <h2 className="about_title">About Me</h2>
        <div className="about_container grid">
          <img src={myImg} alt="" className="about_img" />
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
                I am Neeledra, web developer from warszwaa Poland. I have basic
                exprerience in web site design and buildingng and
                customizationn, also I am good at javascript.
              </p>
              <a href="" className="btn">
                Download CV
              </a>{" "}
            </div>

            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="sills_name">Development</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="sills_name">Git Dev</h3>
                  <span className="skills_number">90%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage"></span>
                </div>
              </div>

              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="sills_name">UI/UX</h3>
                  <span className="skills_number">70%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage"></span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="sills_name">Responsive Design</h3>
                  <span className="skills_number">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
