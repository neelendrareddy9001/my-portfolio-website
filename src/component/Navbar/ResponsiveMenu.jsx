import React from "react";
import "./navbar.scss";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div>
      {!showMenu ? (
        <div className="menuMobile"></div>
      ) : (
        <div className="closedMenu"></div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
