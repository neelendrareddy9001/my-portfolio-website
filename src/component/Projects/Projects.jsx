import React from "react";

import ProjectCard from "./ProjectCard";
import { Container } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container fulid className="project-section">
        <h1 className="project-heading">
          Recent <strong className="purple">Works</strong>
        </h1>
        <div className="projects-body">
          <ProjectCard />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
