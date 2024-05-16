import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";
import React from "react";

const ProfileImage = ({ user }: { user: KindeUser }) => {
  return (
    <Image
      src={user.picture || "Default profile image"}
      alt="Your profile picture"
      width={40}
      height={40}
      className="rounded-full border border-black/50 dark:border-slate-100/50"
    />
  );
};

export default ProfileImage;
