import React, { useState } from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Diversity1Sharp } from "@mui/icons-material";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="nav__layout" id="nav__layout">
        <div className="nav__layout-center" id="nav__layout-center">
          <header className="nav__layout-header" id="nav__layout-header">
            <span href="/" className="nav__layout-title" id="nav__layout-title">
              Neelendrareddy
            </span>

            <nav className="nav__layout-menu-section">
              <a href="/about" className="nav__layout-navigation-link">
                About
              </a>
              <a href="/cv" className="nav__layout-navigation-link">
                Projects
              </a>

              <a href="/project" className="nav__layout-navigation-link">
                Cv
              </a>

              <a href="/contact" className="nav__layout-navigation-link">
                contact
              </a>
            </nav>

            <RxHamburgerMenu
              className="nav__layout-icon"
              onClick={() => setShowMenu(!true)}
            />
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
