import React from "react";
import "./home.scss";
import ParticleBg from "../ParticleBg";
import { Col, Container, Row } from "react-bootstrap";
import Type from "../Navbar/Type";

const Home = () => {
  return (
    <section className="section">
      <Container className="home-section" id="home">
        <ParticleBg />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading name">
                I'am <strong className="main-name">NEELENDRAR EDDY</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
