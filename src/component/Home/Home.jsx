import React from "react";
import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";
import Type from "../Navbar/Type";
import myImg from "../../assets/images/my_img.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <section className="section bg-danger w-100 h-100" id="home">
      <Container className="home-section">
        <Container className="home-content">
          <Row>
            <Col className="home-header py-4">
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
              <div class="btns">
                <button>Download CV</button>
                <button>Know More</button>
              </div>
            </Col>
            <Col md={4}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="img-container"
              >
                <img src={myImg} alt="my_image"/>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <Container className="social-icons-container">
          <div className="social-icons">
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d1d5db",
                color: "black",
              }}
            >
              <GitHubIcon className="icon"></GitHubIcon>
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <LinkedInIcon className="icon" />
            </motion.div>
            <motion.div whileTap={{ scale: 0.9 }}>
              <TwitterIcon className="icon" />
            </motion.div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
