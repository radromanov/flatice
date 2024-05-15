import React from "react";
import NavbarGroup from "./NavbarGroup";
import NavbarItem from "./NavbarItem";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Authed from "./Authed";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex flex-shrink">
      <nav className="w-full flex">
        <NavbarItem>Logo</NavbarItem>

        <div className="flex flex-grow" />

        <NavbarGroup>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>
            {user ? (
              <Authed user={user} />
            ) : (
              <>
                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
              </>
            )}
          </NavbarItem>
        </NavbarGroup>
      </nav>
    </header>
  );
};

export default Navbar;
