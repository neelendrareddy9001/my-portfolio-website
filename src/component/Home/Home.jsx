import React from "react";
import "./home.scss";
import { Col, Container, Row } from "react-bootstrap";
import Type from "../Navbar/Type";
import myImg from '../../assets/images/my_img.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Home = () => {
  return (
    <section className="section" id="home">
      <Container className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
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
            <Col md={4}>
              <div className="img-container">
                <img src={myImg} alt="my_image"/>
              </div>
            </Col>
          </Row>
          <div class="btns">
            <button>Download CV</button>
            <button>Know More</button>
          </div>
        </Container>
        <Container className="social-icons-container">
            <div className="soci-icons">
              <GitHubIcon className="icon" />
              <LinkedInIcon className="icon"/>
              <TwitterIcon className="icon"/>
            </div>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
