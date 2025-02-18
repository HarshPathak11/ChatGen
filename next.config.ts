import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    HUGGINGFACE_API_TOKEN: process.env.HUGGINGFACE_API_TOKEN,
  },
};

export default nextConfig;
