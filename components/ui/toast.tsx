"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";

const toastVariants = cva(
  "group pointer-events-auto relative w-full rounded-md border p-4 shadow-lg flex items-center justify-between",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-900",
        destructive: "bg-red-600 text-white border-red-600",
        success: "bg-green-600 text-white border-green-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToastProps {
  id: number;
  title: string;
  variant?: "default" | "destructive" | "success";
}

export const Toast = ({ id, title, variant = "default" }: ToastProps) => (
  <ToastPrimitive.Root className={toastVariants({ variant })} duration={3000}>
    <ToastPrimitive.Title className="font-medium">{title}</ToastPrimitive.Title>
  </ToastPrimitive.Root>
);

export const Toaster = ({ toasts }: { toasts: ToastProps[] }) => (
  <ToastPrimitive.Provider swipeDirection="right" duration={3000}>
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      {toasts.map((t) => (
        <Toast key={t.id} id={t.id} title={t.title} variant={t.variant} />
      ))}
    </div>
  </ToastPrimitive.Provider>
);
