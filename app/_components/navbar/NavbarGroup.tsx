import React from "react";

const NavbarGroup = ({ items }: { items: (string | React.JSX.Element)[] }) => {
  return (
    <div className="flex gap-2 flex-shrink">
      {items.map((item, i) => (
        <span className="cursor-pointer" key={i}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default NavbarGroup;
