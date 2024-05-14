import React from "react";
import NavbarGroup from "./NavbarGroup";
import NavbarItem from "./NavbarItem";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Authed from "./Authed";
import Unauthed from "./Unauthed";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex flex-shrink">
      <nav className="w-full flex">
        <NavbarItem item="Logo" />
        <div className="flex flex-grow" />
        <NavbarGroup>
          <NavbarItem item="Home" />
          <NavbarItem item="About" />
          {user ? <Authed user={user} /> : <Unauthed />}
        </NavbarGroup>
      </nav>
    </header>
  );
};

export default Navbar;
