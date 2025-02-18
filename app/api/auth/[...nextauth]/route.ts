// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { nextAuthOptions } from "@/lib/nextauth";

// Create the NextAuth handler
const authHandler = NextAuth(nextAuthOptions);

// Export only the HTTP method handlers allowed for route files.
export { authHandler as GET, authHandler as POST };
