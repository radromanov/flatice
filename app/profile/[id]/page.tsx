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
        <h3 className="text-2xl font-medium">Hello, {user.given_name}</h3>
      </Main>
    </div>
  );
};

export default UserProfilePage;
