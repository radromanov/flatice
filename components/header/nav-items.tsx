import Link from "next/link";
import ExpensesIcon from "../icons/expenses-icon";
import HomeIcon from "../icons/home-icon";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const items: { text: string; to: string; icon: React.ReactNode }[] = [
  { text: "Home", to: "/", icon: <HomeIcon /> },
  { text: "Expenses", to: "/expenses", icon: <ExpensesIcon /> },
];

const NavigationItems = () => {
  return (
    <ul className="flex gap-2">
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
      className="flex flex-col text-xs font-medium group px-1 hover:bg-slate-200 rounded-lg"
    >
      <li className="flex flex-col items-center">
        <span>{item.icon}</span>
        <span>{item.text}</span>
      </li>
      <div className="border border-transparent group-hover:border-b-black w-0 group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default NavigationItems;
