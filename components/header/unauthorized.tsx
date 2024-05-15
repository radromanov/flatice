"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";

const Unauthorized = () => {
  return (
    <>
      <Button size="sm">
        <LoginLink>Sign in</LoginLink>
      </Button>
      <Button size="sm" variant="outline">
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </>
  );
};

export default Unauthorized;
