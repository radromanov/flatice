import React from "react";
import NavbarGroup from "./NavbarGroup";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const navigationItems = [
  "Home",
  "About",
  <LoginLink key={"login-link"}>Log in</LoginLink>,
  <RegisterLink key={"register-link"}>Sign up</RegisterLink>,
];
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
