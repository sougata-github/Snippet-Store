import type { Metadata } from "next";

import { Poppins } from "next/font/google";

import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Snippet Store",
  description:
    "A centralized repository to securely store and organize all your important code snippets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-bg", poppins.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
