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

// 2️⃣ Protect admin APIs
if (pathname.startsWith("/api/admin")) {
const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

if (!token) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

if (token.role !== "ADMIN") {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

return NextResponse.next();


}

// 3️⃣ Protect all other APIs for logged-in users
if (pathname.startsWith("/api")) {
const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });


if (!token) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

return NextResponse.next();


}

// 4️⃣ Protect admin pages
if (pathname.startsWith("/admin")) {
const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });


if (!token || token.role !== "ADMIN") {
  return NextResponse.redirect(new URL("/admin/login", origin));
}

return NextResponse.next();


}

// 5️⃣ Allow all other pages
return NextResponse.next();
}

export const config = {
matcher: [
"/api/:path*",   // Protect all APIs
"/admin/:path*", // Protect admin pages
],
};
