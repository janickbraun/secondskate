import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "secondskate - Buy & Sell Single Shoes",
  description: "Zerstörst du auch immer nur einen Schuh? Kauf und verkaufe einzelne Skateschuhe basierend auf deiner Stance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${inter.variable} antialiased selection:bg-primary selection:text-black`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
