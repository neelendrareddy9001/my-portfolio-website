import React, { useState } from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="nav_section" id="nav_section">
        <span href="/" className="icon_section-title" id="icon_section">
          Neelendrareddy
        </span>
        {showMenu && (
          <nav className="nav_menu-section">
            <a href="/about" className="nav_menu-navigation-link" />
            <a href="/cv" className="nav_menu-navigation-link" />
            <a href="/project" className="nav_menu-navigation-link" />
            <a href="/contact" className="nav_menu-navigation-link" />
          </nav>
        )}
        <RxHamburgerMenu
          size={38}
          className="nav_icon"
          onClick={() => setShowMenu(!true)}
        />
      </div>
    </>
  );
};

export default Navbar;
