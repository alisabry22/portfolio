import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Sabry | Senior Flutter Developer · Mobile, SaaS, and AI",
  description:
    "Senior Flutter developer building launch-ready mobile apps, SaaS products, and AI-powered experiences for founders who need strong design, fast execution, and shipped results.",
  keywords: [
    "Ali Sabry",
    "Senior Flutter developer",
    "Flutter developer",
    "Dart developer",
    "Next.js developer",
    "AI product engineer",
    "mobile app developer",
    "freelance software engineer",
  ],
  openGraph: {
    title: "Ali Sabry | Senior Flutter Developer",
    description:
      "Senior Flutter developer shipping mobile, SaaS, and AI products that founders actually launch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Sabry | Senior Flutter Developer",
    description:
      "Senior Flutter developer building launch-ready mobile, SaaS, and AI products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
