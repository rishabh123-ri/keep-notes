import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p> copyrights © {year} </p>
      </footer>
    </>
  );
};

export default Footer;
