import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDB + Next.js",
  description: "Demo application of a Next.js site using HDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
