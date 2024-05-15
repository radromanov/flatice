import NavigationItems from "./nav-items";
import Authorized from "./authorized";
import Unauthorized from "./unauthorized";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navigation = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex flex-shrink">
      <div className="flex items-center">
        <NavigationItems />

        {user ? <Authorized user={user} /> : <Unauthorized />}
      </div>
    </nav>
  );
};

export default Navigation;
