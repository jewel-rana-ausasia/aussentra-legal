// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  // Protect /admin and all its subpaths
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // If not logged in, redirect to homepage
    if (!token) {
      return NextResponse.redirect(new URL("/", origin));
    }

    // Optional: Only allow admins
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
