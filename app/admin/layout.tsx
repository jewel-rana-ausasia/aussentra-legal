// app/admin/AdminLayout.tsx
import { ReactNode } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getServerSession(authOptions);

  // ✅ Redirect if not logged in
  if (!session) redirect("/");

  // ✅ Restrict to admins only
  if ((session.user as any)?.role !== "ADMIN") redirect("/");

  return (
    <div className="flex h-screen">
      {/* --- Sidebar --- */}
      <div className="w-64 fixed left-0 top-0 h-full border-r bg-white shadow-md z-10">
        <AdminSidebar />
      </div>

      {/* --- Main Content --- */}
      <main className="flex-1 ml-64 overflow-y-auto p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
