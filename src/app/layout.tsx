import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WOŚP Barcelona",
    template: "%s | WOŚP Barcelona",
  },
  description: "Wielka Orkiestra Świątecznej Pomocy w Barcelonie. Jesteśmy zespołem pełnym pasji i zaangażowania, który od 9 lat organizuje Finały WOŚP i wydarzenia charytatywne w Barcelonie i okolicach.",
  keywords: ["WOŚP", "Barcelona", "Wielka Orkiestra Świątecznej Pomocy", "charytatywność", "Polonia", "Hiszpania", "finał WOŚP"],
  authors: [{ name: "WOŚP Barcelona" }],
  openGraph: {
    title: "WOŚP Barcelona",
    description: "Wielka Orkiestra Świątecznej Pomocy w Barcelonie. Jesteśmy zespołem pełnym pasji i zaangażowania, który od 9 lat organizuje Finały WOŚP i wydarzenia charytatywne.",
    url: "https://wospbarcelona.org",
    siteName: "WOŚP Barcelona",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/34FinalWOSP2026_serduszko.png",
        width: 800,
        height: 800,
        alt: "WOŚP Barcelona - 34. Finał WOŚP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOŚP Barcelona",
    description: "Wielka Orkiestra Świątecznej Pomocy w Barcelonie. Organizujemy Finały WOŚP i wydarzenia charytatywne.",
    images: ["/34FinalWOSP2026_serduszko.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/34FinalWOSP2026_serduszko.png",
  },
  metadataBase: new URL("https://wospbarcelona.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
