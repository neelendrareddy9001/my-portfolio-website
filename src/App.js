// import Styles
import "./App.scss";
import { Fragment } from "react";

import Home from "../src/component/About/About";
import About from "../src/component/About/About";
import Project from "../src/component/Projects/Projects";
import Cv from "../src/component/cv/Cv";
import Contact from "../src/component/contact/Contact";

import Navbar from "../src/component/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/projects" Component={Project} exact />
        <Route path="/cv" Component={Cv} exact />
        <Route path="/contact" Component={Contact} exact />
      </Routes>
    </Fragment>
  );
}

export default App;
