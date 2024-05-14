import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import NavbarItem from "./NavbarItem";

const Unauthed = () => {
  return (
    <>
      <NavbarItem item={<LoginLink>Sign in</LoginLink>} />
      <NavbarItem item={<RegisterLink>Sign up</RegisterLink>} />
    </>
  );
};

export default Unauthed;
