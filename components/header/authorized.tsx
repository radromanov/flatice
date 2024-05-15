import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";
import React from "react";

const Authorized = ({ user }: { user: KindeUser }) => {
  return (
    <span className="px-2">
      <Image
        className="rounded-full border border-black"
        width={36}
        height={36}
        src={user.picture || "Default user picture"}
        alt="Your profile picture"
      />
    </span>
  );
};

export default Authorized;
