 import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secondskate.de"),
  title: "Einzelne Skateschuhe kaufen | secondskate",
  description:
    "Nur ein Skateschuh kaputt? Kaufe einzelne Skateschuhe statt ein ganzes Paar. Perfekt für Goofy und Regular Skater.",

  keywords: [
    "einzelne skateschuhe kaufen",
    "nur einen schuh kaufen",
    "linker skateschuh kaufen",
    "rechter skateschuh kaufen",
    "skateschuh vorne kaputt",
    "goofy regular schuh unterschied",
    "skateschuhe einzeln kaufen deutschland",
    "secondskate"
  ],

  alternates: {
    canonical: "https://secondskate.de",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Einzelne Skateschuhe kaufen | secondskate",
    description:
      "Nur ein Schuh kaputt? Kauf dir einfach einen einzelnen Skateschuh statt ein ganzes Paar.",
    url: "https://secondskate.de",
    siteName: "secondskate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Einzelne Skateschuhe kaufen auf secondskate",
      },
    ],
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Einzelne Skateschuhe kaufen | secondskate",
    description:
      "Nur ein Skateschuh kaputt? Kaufe einfach einen einzelnen statt ein ganzes Paar.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
        {/* <CookieBanner /> */}
        <Analytics />
      </body>
    </html>
  );
}
