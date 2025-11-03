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
  const { pathname, origin } = req.nextUrl;

  // 1️⃣ Allow public assets and NextAuth routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // 2️⃣ Protect /admin pages
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If not logged in, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", origin));
    }

    // Only allow ADMIN role
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", origin));
    }
  }

  // 3️⃣ Allow all other routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"], // Protect admin pages only
};
