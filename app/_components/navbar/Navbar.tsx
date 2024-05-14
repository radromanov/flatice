import React from "react";
import NavbarGroup from "./NavbarGroup";

const navigationItems = ["Home", "About", "Log in", "Sign up"];
const logoItem = ["Logo"];

const Navbar = () => {
  return (
    <header className="flex flex-shrink">
      <nav className="w-full flex">
        <NavbarGroup items={logoItem} />
        <div className="flex flex-grow" />
        <NavbarGroup items={navigationItems} />
      </nav>
    </header>
  );
};

export default Navbar;
