import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/layout/Header";
import Footer from "@/components/Footer"; // Default import
import { SimpleFooter, ExtendedFooter } from "@/components/Footer"; // Named imports
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeoDesign - Web Design & Development Agency",
  description: "Professional web design and development services for modern businesses",
  keywords: "web design, web development, UI/UX design, digital agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="container mx-auto min-h-screen">
          {children}
        </main>
        <ExtendedFooter />
      </body>
    </html>
  );
}