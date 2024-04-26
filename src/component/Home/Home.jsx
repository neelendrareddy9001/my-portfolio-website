import React from "react";
import "./home.scss";
import { Col, Container, Row } from "react-bootstrap";
import Type from "../Navbar/Type";

const Home = () => {
  return (
    <section className="section" id="home">
      <Container className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header mx-auto">
              <h1 style={{ paddingBottom: "15px" }} className="heading">
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
          <div class="btns">
            <button>Know More</button>
            <button>Download CV</button>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
