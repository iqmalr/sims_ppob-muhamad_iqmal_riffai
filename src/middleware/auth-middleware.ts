import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard"];

  const publicRoutes = ["/login", "/register"];

  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (isProtectedRoute && !token) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }

  if (token && publicRoutes.includes(pathname)) {
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login", "/register"],
};
