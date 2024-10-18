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
      
          <p className="logo">Neelendrareddy</p>
      
      </div>
      <div className="header-right">
        <ul className={`${showMenu ? "menu-list" : "mb-menu"}`} ref={menuRef}>
          
            <a href="#home" className="menu-list-item active">
              Home
            </a>
          
          
            <a href="#" className="menu-list-item">
              About
            </a>
        
          
            <a href="#" className="menu-list-item">
              Cv
            </a>
          
          
            <a href="#" className="menu-list-item">
              Projects
            </a>
          

          
            <a href="#" className="menu-list-item">
              Contact
            </a>
         
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
