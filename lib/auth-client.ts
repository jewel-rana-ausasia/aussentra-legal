// lib/auth-client.ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BA_URL || "http://localhost:3000",
});

// Convenience functions
export const signIn = (email: string, password: string) => authClient.signIn({ email, password });

export const signOut = () => authClient.signOut();

export const getSession = () => authClient.getSession();
