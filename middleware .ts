// // middleware.ts
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const { pathname, origin } = req.nextUrl;

//   // Protect /admin and all its subpaths
//   if (pathname === "/admin" || pathname.startsWith("/admin/")) {
//     const token = await getToken({
//       req,
//       secret: process.env.NEXTAUTH_SECRET,
//     });

//     // If not logged in, redirect to homepage
//     if (!token) {
//       return NextResponse.redirect(new URL("/", origin));
//     }

//     // Optional: Only allow admins
//     if (token.role !== "ADMIN") {
//       return NextResponse.redirect(new URL("/", origin));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin", "/admin/:path*"],
// };

















// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public assets and auth routes
  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // Protect all APIs under /api
  if (pathname.startsWith("/api")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Optional: restrict /api/admin to only ADMIN role
    if (pathname.startsWith("/api/admin") && token.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.next();
  }

  // Protect /admin pages (optional)
  if (pathname.startsWith("/admin")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",   // Protect all API routes
    "/admin/:path*", // Protect admin pages
  ],
};
