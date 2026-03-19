import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "secondskate | Einzelne Skateschuhe kaufen & verkaufen",
  description: "Zerstörst du auch immer nur den vorderen Schuh? Kaufe und verkaufe einzelne Skateschuhe für Goofy & Regular Skater.",
  keywords: ["einzelne Skateschuhe", "Skateschuhe", "Goofy", "Regular", "linker Schuh", "rechter Schuh", "Skateboard Schuhe kaufen", "secondskate", "second skate", "secondhand schuhe", "gebrauchte schuhe", "secondhand skateschuhe", "gebrauchte skateschuhe", "skate schuhe kaputt", "skate schuhe kaputt links", "skate schuhe kaputt rechts"],
  openGraph: {
    title: "secondskate | Einzelne Skateschuhe kaufen & verkaufen",
    description: "Zerstörst du auch immer nur den vorderen Schuh? Kauf und verkaufe einzelne Skateschuhe basierend auf deiner Stance.",
    url: "https://secondskate.de",
    siteName: "secondskate",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased selection:bg-primary selection:text-black`}
        suppressHydrationWarning
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
