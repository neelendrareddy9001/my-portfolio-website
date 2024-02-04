import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleToggle = (prev) => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="header">
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo">Neelendrareddy</p>
        </Link>
      </div>
      <div className="header-right">
        <ul className={`${showMenu ? "menu-list" : "mb-menu"}`}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="menu-list-item active">Home</p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p className="menu-list-item">About</p>
          </Link>
          <Link to="/cv" style={{ textDecoration: "none" }}>
            <p className="menu-list-item">Cv</p>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <p className="menu-list-item">Projects</p>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p className="menu-list-item">Contact</p>
          </Link>
        </ul>
      </div>
      <div className="header-menu-icon">
        {showMenu ? (
          <CgMenu onClick={handleToggle} size={30} />
        ) : (
          <IoClose onClick={handleToggle} size={30} />
        )}
      </div>
    </nav>
  );
};

export default Header;
