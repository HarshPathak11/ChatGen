// lib/auth.ts
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/lib/nextauth";

export async function getSession() {
  return await getServerSession(nextAuthOptions);
}
