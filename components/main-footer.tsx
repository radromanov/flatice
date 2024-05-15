import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-shrink justify-center container">
      <span className="text-sm">Picnic, Honey LTD &copy; {currentYear}</span>
    </footer>
  );
};

export default Footer;
