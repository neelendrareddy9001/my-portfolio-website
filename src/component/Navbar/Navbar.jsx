import React from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav_section" id="nav_section">
        <a className="icon_section" id="icon_section">
          Neelendrareddy
        </a>
        <ul className="ul_menu_section">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
          <li>
            <a href="/">Cv</a>
          </li>
          <li>
            <a href="/">Project</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
