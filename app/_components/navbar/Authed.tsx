import React from "react";
import NavbarItem from "./NavbarItem";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const Authed = async ({ user }: { user: KindeUser }) => {
  return (
    <>
      <NavbarItem item={<LogoutLink>Sign out</LogoutLink>} />
      <NavbarItem
        item={
          <Image
            className="rounded-full"
            width={36}
            height={36}
            src={user.picture || "Some default picture"}
            alt={`${user.given_name} profile picture`}
          />
        }
      />
    </>
  );
};

export default Authed;
