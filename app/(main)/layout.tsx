// app/user/layout.tsx
"use client";

import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div>
      {/* Sidebar */}

      {/* Main Content */}
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
