import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProfileImage from "@/components/profile-image";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("/api/auth/login");

  return (
    <div className="container flex flex-grow">
      <aside className="flex flex-col">
        <h3 className="text-2xl font-medium flex gap-2 justify-center">
          <ProfileImage user={user} />
          Settings
        </h3>
        <DropdownMenuSeparator />
      </aside>
      {children}
    </div>
  );
};

export default ProfileLayout;
