import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" Component={About} exact />
      </Routes>
    </>
  );
};

export default Home;
