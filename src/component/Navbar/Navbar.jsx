import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  let menuRef = useRef();

  const handleToggle = (prev) => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target())) {
        setShowMenu(false);
        console.log(menuRef.current);
      }
    };
    
  });
 
  return (
    <nav className="header">
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo">Neelendrareddy</p>
        </Link>
      </div>
      <div className="header-right">
        <ul className={`${showMenu ? "menu-list" : "mb-menu"}`} ref={menuRef}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="menu-list-item active">Home</a>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <a className="menu-list-item" href="/about">About</a>
          </Link>
          <Link to="/cv" style={{ textDecoration: "none" }}>
            <a className="menu-list-item">Cv</a>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <a className="menu-list-item">Projects</a>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <a className="menu-list-item">Contact</a>
          </Link>
        </ul>
      </div>
      <div className="header-menu-icon">
        {showMenu ? (
          <CgMenu onClick={handleToggle} size={35} />
        ) : (
          <IoClose onClick={handleToggle} size={35} />
        )}
      </div>
    </nav>
  );
};

export default Header;
