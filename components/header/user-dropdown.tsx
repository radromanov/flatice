"use client";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import ProfileImage from "../profile-image";

const UserDropdown = ({ user }: { user: KindeUser }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileImage user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>My account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <Link href={`/profile/${user.id}`}>
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutLink>Sign out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
