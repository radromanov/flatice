import React from "react";

const NavbarItem = ({ item }: { item: string | React.ReactNode }) => {
  return <span>{item}</span>;
};

export default NavbarItem;
