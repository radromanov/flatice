import React from "react";

const NavbarGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2 flex-shrink">{children}</div>;
};

export default NavbarGroup;
