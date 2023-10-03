import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Project from "../Projects/Projects";
import Cv from "../cv/Cv";
import Contact from "../contact/Contact";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" Component={About} exact />
        <Route path="/projects" Component={Project} exact />
        <Route path="/cv" Component={Cv} exact />
        <Route path="/contact" Component={Contact} exact />
      </Routes>
    </>
  );
};

export default Home;
