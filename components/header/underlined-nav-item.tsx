import Link from "next/link";

interface Props {
  item: {
    text: string;
    to: string;
    icon: React.ReactNode;
  };
}

const UnderlinedNavItem = ({ item }: Props) => {
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

export default UnderlinedNavItem;
