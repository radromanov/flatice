import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

const publicRoutes = ["/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  // If attempting to access a non-public route, a.k.a. private route (e.g. /expenses, /profile, etc.)...
  if (!isPublicRoute) {
    // Redirects to login screen
    return withAuth(req);
  }

  return NextResponse.next();
}

// Protected routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
