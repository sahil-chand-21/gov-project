import type { Metadata } from "next";
import { Inter, Manrope, Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { TopHeader } from "../src/components/TopHeader";
import { Navbar } from "../src/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "500", "600"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Revenue Collection Portal",
  description: "Bilingual Government Revenue Collection Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${notoSerifDevanagari.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <TopHeader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
