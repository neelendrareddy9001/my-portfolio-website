import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav_section" id="nav_section">
        <a className="icon_section" id="icon_section">
          Neelendrareddy
        </a>
        <ul className="ul_menu_section">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>cv</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
