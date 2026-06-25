import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Iqbal | Performance Marketer",
  description: "Personal Portfolio of Arif Iqbal - Performance Marketing, SEO and Website Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased bg-[#121212]`}>
      <body className="min-h-full flex flex-col pt-0 m-0">{children}</body>
    </html>
  );
}
