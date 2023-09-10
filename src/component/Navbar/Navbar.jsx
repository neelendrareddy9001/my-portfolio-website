import "./navbar.scss";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="nav_section" id="nav_section">
        <span href="/" className="icon_section_title" id="icon_section">
          Neelendrareddy
        </span>
        <nav className="nav_menu_section">
          <a href="/about" className="nav_menu_navigation_link" />
          <a href="/cv" className="nav_menu_navigation_link" />
          <a href="/project" className="nav_menu_navigation_link" />
          <a href="/contact" className="nav_menu_navigation_link" />
        </nav>
        <RxHamburgerMenu size={38} className="nav_icon" />
      </div>
    </>
  );
};

export default Navbar;
