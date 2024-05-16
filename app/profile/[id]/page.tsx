import Main from "@/components/content/main-content";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const UserProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("/api/auth/login");

  return (
    <div className="pl-8">
      <Main>
        <div className="flex flex-col">
          <h3 className="text-2xl font-medium">Hello, {user.given_name}</h3>

          <label htmlFor="name" className="px-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="px-2 rounded-md"
            disabled
            value={user.given_name + " " + user.family_name}
          />

          <label htmlFor="email" className="px-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="px-2 rounded-md"
            disabled={user.email ? true : false}
            value={user.email || "Email missing"}
          />
        </div>
      </Main>
    </div>
  );
};

export default UserProfilePage;
