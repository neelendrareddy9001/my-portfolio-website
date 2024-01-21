import React, { useState } from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
// import { IoCloseOutline } from "react-icons/io5";
// import { Diversity1Sharp } from "@mui/icons-material";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="nav__layout" id="nav__layout">
        <div className="nav__layout-center" id="nav__layout-center">
          <header className="nav__layout-header" id="nav__layout-header">
            {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <Link to="/" className="nav__layout-title" id="nav__layout-title">
              Neelendrareddy
            </Link>

            {/* </Link> */}
            <nav className=" nav__layout-menu-section is_visible">
              <Link to="/about">
                <a href="/about" className="nav__layout-navigation-link">
                  About
                </a>
              </Link>

              <Link to="/projects">
                <a href="/projects" className="nav__layout-navigation-link">
                  Projects
                </a>
              </Link>
              <Link to="/cv">
                <a href="/cv" className="nav__layout-navigation-link">
                  Cv
                </a>
              </Link>
              <Link to="/contact">
                <a href="/contact" className="nav__layout-navigation-link">
                  contact
                </a>
              </Link>
            </nav>

            {showMenu ? (
              <HiMenuAlt1
                className="nav__layout-icon"
                onClick={toggleMenu}
                size={30}
              />
            ) : (
              <HiMenuAlt3
                className="nav__layout-icon"
                onClick={toggleMenu}
                size={30}
              />
            )}
            {/* <RxHamburgerMenu
              className="nav__layout-icon"
              onClick={toggleLinks}
            /> */}
          </header>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
