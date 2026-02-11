import type { Metadata } from "next";
import { Quintessential, Newsreader } from "next/font/google";
import "./globals.css";

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const newsreader = Newsreader({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Springboard — Enterprise AI Transformation | Malaysia",
  description:
    "Springboard is a consulting and ventures firm based in Malaysia, partnering with Silicon Foundry (a Kearney company) to accelerate enterprise AI transformation.",
  keywords: ["consulting", "ventures", "enterprise AI", "Malaysia", "Silicon Foundry"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quintessential.variable} ${newsreader.variable}`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
