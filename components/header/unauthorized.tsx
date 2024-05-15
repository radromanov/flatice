"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Unauthorized = () => {
  return (
    <>
      <span>
        <LoginLink>Sign in</LoginLink>
      </span>
      <span>
        <RegisterLink>Sign up</RegisterLink>
      </span>
    </>
  );
};

export default Unauthorized;
