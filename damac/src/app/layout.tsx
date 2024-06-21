import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { Poppins } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "500"],
  variable: "--font-poppins",
})

const fontOswald = Oswald({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-oswald",
})


export const metadata: Metadata = {
  title: "Damac"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontPoppins.variable,
        fontOswald.variable,
      )}>{children}</body>
    </html>
  );
}
