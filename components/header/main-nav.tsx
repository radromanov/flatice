import NavigationItems from "./nav-items";
import UserDropdown from "./user-dropdown";
import Unauthorized from "./unauthorized";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navigation = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex flex-shrink">
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <NavigationItems />
            <UserDropdown user={user} />
          </>
        ) : (
          <Unauthorized />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
