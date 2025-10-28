// app/admin/AdminLayout.tsx
import { ReactNode } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  // Not logged in → redirect to login page
  if (!session) redirect("/");

  // Optional: Only allow admins
  if ((session.user as any)?.role !== "ADMIN") redirect("/");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <p>Welcome, {(session.user as any)?.email}</p>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
