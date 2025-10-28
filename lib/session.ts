// lib/session.ts
import { getServerSession as getNextAuthServerSession, type Session } from "next-auth";
import { useSession as useNextAuthSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// ✅ Server-side session helper
export async function getServerSession() {
  return await getNextAuthServerSession(authOptions);
}

// ✅ Client-side session hook
export function useSession() {
  return useNextAuthSession();
}

// Optional: Type-safe session for easier usage
export type UserSession = Session & {
  user: {
    id: string;
    name?: string;
    email?: string;
    role: "USER" | "ADMIN";
    image?: string;
  };
};
