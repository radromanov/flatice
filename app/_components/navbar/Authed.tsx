"use server";

import React from "react";
import NavbarItem from "./NavbarItem";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const Authed = async ({ user }: { user: KindeUser }) => {
  return (
    <Image
      width={36}
      height={36}
      className="rounded-full"
      src={user.picture || "Some default picture"}
      alt={`${user.given_name}'s profile picture`}
    />
  );
};

export default Authed;
