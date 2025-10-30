"use client";

import { MdOutlineRealEstateAgent } from "react-icons/md";
import {
  Building2,
  LayoutDashboard,
  Users,
  MessageSquare,
  CreditCard,
  BarChart,
  FileText,
  Settings,
  Bell,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useSession } from "@/lib/session";

export default function AdminSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Navbar", icon: LayoutDashboard, path: "/admin/navbar" },
    { label: "Hero", icon: LayoutDashboard, path: "/admin/hero" },
    { label: "About Section", icon: LayoutDashboard, path: "/admin/about" },
    { label: "About Case Study", icon: LayoutDashboard, path: "/admin/about-case-study" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const SidebarBody = () => (
    <div
      className={`flex flex-col h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      } bg-gradient-to-b from-emerald-700 via-emerald-800 to-emerald-900 text-white shadow-2xl md:rounded-r-xl`}
    >
      {/* Header */}
      <SidebarHeader
        className={`h-16 border-b border-green-800 ${
          collapsed
            ? "flex items-center justify-center px-6"
            : "flex items-center pl-0 pr-4"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {!collapsed && (
            <Link href="/admin" className="flex items-center gap-3 ml-4">
              <Building2 className="h-6 w-6 text-white" />
              <div className="hidden md:flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">
                  Admin Panel
                </span>
              </div>
            </Link>
          )}
          <button
            className="text-white hover:text-white md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className={`text-white hover:text-white ${collapsed ? "" : "hidden md:block"}`}
            onClick={() => setCollapsed((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent className="py-4 px-2 overflow-y-auto">
        <SidebarMenu className="space-y-3">
          {menuItems.map(({ label, icon: Icon, path, badge }) => {
            const active = pathname === path;
            return (
              <SidebarMenuItem key={label}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                    active
                      ? "bg-primary/90 text-white shadow-md border-l-4"
                      : "hover:bg-green-950 text-white"
                  }`}
                >
                  <Link href={path} className="flex items-center w-full">
                    <Icon
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        active
                          ? "text-black"
                          : "text-white group-hover:text-white"
                      }`}
                    />
                    {!collapsed && (
                      <span
                        className={`ml-3 text-base font-medium transition-colors ${
                          active
                            ? "text-black"
                            : "text-white group-hover:text-white"
                        }`}
                      >
                        {label}
                      </span>
                    )}
                    {badge && !collapsed && (
                      <span className="ml-auto bg-green-500 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                    {badge && collapsed && (
                      <span className="absolute top-1.5 right-1.5 bg-green-500 text-xs w-4 h-4 rounded-full text-center text-white">
                        {badge}
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-auto border-t border-green-800 px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/20 text-white flex items-center justify-center font-bold shadow-inner">
            AD
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">
                {session?.user?.name}
              </span>
              <span className="text-xs text-white">{session?.user?.email}</span>
            </div>
          )}
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-2 rounded border border-white px-3 py-1 text-sm text-white hover:bg-white hover:text-green-900 transition-colors"
        >
          Logout
        </button>
      </SidebarFooter>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{SidebarBody()}</div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed z-50 top-3 left-4 bg-zinc-900 text-white p-2 rounded-md shadow-md"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden flex"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="bg-zinc-900 shadow-2xl w-72 h-full animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            {SidebarBody()}
          </div>
        </div>
      )}
    </>
  );
}
