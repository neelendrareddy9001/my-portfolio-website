import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div>{showMenu ? <div className="menuMobile"></div> : <div></div>}</div>
  );
};

export default ResponsiveMenu;
