// src/components/ui/sidebar.tsx
"use client";

import React from "react";

export const SidebarContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>{props.children}</div>
);

export const SidebarHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>{props.children}</div>
);

export const SidebarMenu: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>{props.children}</div>
);

export const SidebarMenuItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>{props.children}</div>
);

export const SidebarMenuButton: React.FC<React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean; isActive?: boolean }> = ({ children, asChild, ...props }) => (
  <div {...props}>{children}</div>
);

export const SidebarFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props}>{props.children}</div>
);
