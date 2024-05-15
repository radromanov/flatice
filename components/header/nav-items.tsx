import ExpensesIcon from "../icons/expenses-icon";
import HomeIcon from "../icons/home-icon";
import UnderlinedNavItem from "./underlined-nav-item";

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

export default NavigationItems;
