import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Unauthorized from "./unauthorized";
import Authorized from "./authorized";
import UnderlinedItem from "./underlined-item";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex flex-shrink">
      <nav className="flex justify-between border border-b-neutral-300 py-1 w-full">
        <UnderlinedItem>
          <Link href={"/"}>Logo</Link>
        </UnderlinedItem>

        <div className="flex items-center">
          <UnderlinedItem>
            <Link href={"/"}>Home</Link>
          </UnderlinedItem>

          <UnderlinedItem>
            <Link href={"/expenses"}>Expenses</Link>
          </UnderlinedItem>

          {user ? <Authorized user={user} /> : <Unauthorized />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
