"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";

const Unauthorized = () => {
  return (
    <>
      <LoginLink>
        <Button size="sm">Sign in</Button>
      </LoginLink>
      <RegisterLink>
        <Button size="sm" variant="outline">
          Sign up
        </Button>
      </RegisterLink>
    </>
  );
};

export default Unauthorized;
