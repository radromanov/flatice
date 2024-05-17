import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const privateRoutes = ["/expenses"];
const publicRoutes = ["/", "/api/auth"];

export default async function middleware(req: NextRequest) {
  const isAuthed = await getKindeServerSession().isAuthenticated();
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  // const isPrivateRoute = privateRoutes.includes(path);

  // If not authed, and attempting to access a private route, redirect to home page
  if (!isAuthed && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Attach the url to headers
  const response = NextResponse.next();
  response.headers.set("x-url", req.url);

  return response;
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
