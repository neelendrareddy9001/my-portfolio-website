import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container fulid className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
