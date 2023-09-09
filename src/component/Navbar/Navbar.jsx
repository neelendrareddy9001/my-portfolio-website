import "./navbar.scss";

import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "../Home/Home";

const Navbar = () => {
  return (
    <>
      {/* <nav className="nav_section" id="nav_section">
        <a href="/" className="icon_section" id="icon_section">
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
        <RxHamburgerMenu size={38} className="nav_icon" />
      </nav> */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ul>
            <li>
              <Link to="/">
                <Home />
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
