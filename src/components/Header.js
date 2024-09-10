import React, { useState } from "react";
import logo from "./images/google.png";

const Header = () => {
  return (
    <>
      <div className="Header">
        <img src={logo} alt="loding" className="logo_img" />
        <h1 className="heading">Keep </h1>
      </div>
    </>
  );
};

export default Header;
