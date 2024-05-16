import Link from "next/link";

const items: { text: string; to: string }[] = [
  { text: "Home", to: "/" },
  { text: "Expenses", to: "/expenses" },
];

const NavigationItems = () => {
  return (
    <ul className="flex h-full gap-2 items-center justify-center">
      {items.map((item, i) => (
        <UnderlinedNavItem item={item} key={i} />
      ))}
    </ul>
  );
};

const UnderlinedNavItem = ({ item }: { item: (typeof items)[number] }) => {
  return (
    <Link
      href={item.to}
      className="items-center justify-center flex flex-col text-xs h-full font-medium group px-1 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-lg"
    >
      <li className="flex flex-col items-center">
        <span>{item.text}</span>
      </li>
      <div className="border border-transparent group-hover:border-b-black dark:group-hover:border-b-white w-0 group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default NavigationItems;
