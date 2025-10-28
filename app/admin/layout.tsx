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

  // Not logged in → redirect to login page
  if (!session) redirect("/");

  // Optional: Only allow admins
  if ((session.user as any)?.role !== "ADMIN") redirect("/");

  return (
    <div className="flex fixed size-full">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
