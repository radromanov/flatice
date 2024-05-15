"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  return (
    <header className="flex flex-shrink">
      <nav className="w-full flex justify-between">
        <div>
          <span>Logo</span>
        </div>

        <div className="flex gap-2">
          <span>Home</span>
          <span>Expenses</span>
          <span>
            <LoginLink>Sign in</LoginLink>
          </span>
          <span>
            <RegisterLink>Sign up</RegisterLink>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
