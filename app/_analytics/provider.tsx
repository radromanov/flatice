"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://us.i.posthog.com",
  });
}
export function CSPostHogProvider({ children }: Props) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

function PostHogAuthWrapper({ children }: Props) {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const name =
    user?.given_name && user.family_name
      ? user.given_name + " " + user.family_name
      : null;

  useEffect(() => {
    if (user) {
      posthog.identify(user.id, {
        email: user.email,
        name,
      });
    } else if (!user) {
      posthog.reset();
    }
  }, [user, name]);

  return children;
}
