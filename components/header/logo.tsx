import Link from "next/link";
import LogoIcon from "../icons/logo-icon";

const Logo = () => {
  return (
    <Link href={"/"} className="group flex items-center flex-shrink">
      <div className="flex gap-1">
        <LogoIcon />
        <span>flatice</span>
      </div>
    </Link>
  );
};

export default Logo;
