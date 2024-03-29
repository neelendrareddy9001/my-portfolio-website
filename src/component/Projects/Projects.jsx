import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import { Container } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container fulid className="project-section">
        <h1 className="project-heading">
          Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      </Container>
    </section>
  );
};

export default Projects;
