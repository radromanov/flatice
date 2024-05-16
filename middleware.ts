import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-url", req.url);

  return response;
}
