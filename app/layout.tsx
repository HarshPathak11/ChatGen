import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

import { ThemeProvider } from 'next-themes';
import ClientProviders from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "ChatGen - AI Powered MVPs",
  description: "Generate landing pages effortlessly with AI-powered tools.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 transition-colors ">
        {/* Background Animation */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <ClientProviders>
        <Navigation />
        <main>{children}</main>
        </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
