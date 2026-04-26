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
  title: "Ali Sabry | Mobile, SaaS, and AI Product Engineer",
  description:
    "Ali Sabry builds launch-ready mobile apps, SaaS products, and AI-powered experiences for founders who need strong design, fast execution, and shipped results.",
  keywords: [
    "Ali Sabry",
    "Flutter developer",
    "Next.js developer",
    "AI product engineer",
    "mobile app developer",
    "freelance software engineer",
  ],
  openGraph: {
    title: "Ali Sabry | Mobile, SaaS, and AI Product Engineer",
    description:
      "From mobile launches to AI product experiences, Ali Sabry helps founders ship polished products that attract users and convert better.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Sabry | Mobile, SaaS, and AI Product Engineer",
    description:
      "Launch-focused engineering for mobile apps, SaaS platforms, and AI features.",
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
