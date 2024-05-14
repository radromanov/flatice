import React from "react";

const NavbarGroup = ({ items }: { items: string[] }) => {
  return (
    <div className="flex gap-2 flex-shrink">
      {items.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
};

export default NavbarGroup;
