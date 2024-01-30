import React, { useState } from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";

import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className={`header container`}>
      <div className="logo">
        <Link to="/">
          <a href="/">
            <h2>NeelendraReddy</h2>
          </a>
        </Link>
      </div>
      <ul className={open ? "menu-open menu" : "menu"}>
        <li className="menu-item">
          <a href="/">
            <h5>About</h5>
          </a>
        </li>
        <li className="menu-item">
          <a href="/about">
            <h5>Cv</h5>
          </a>
        </li>
        <li className="menu-item">
          <a href="/portfolio">
            <h5>Projects</h5>
          </a>
        </li>
        <li className="menu-item">
          <a href="/contact">
            <h5>Contact</h5>
          </a>
        </li>
      </ul>

      <div className="hamburger">
        {open ? (
          <BiX onClick={handleClick} />
        ) : (
          <BiMenu onClick={handleClick} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
