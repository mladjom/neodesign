import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/core/Header";
import { Footer } from "@/components/core/Footer"; 
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
        <Footer /> 
      </body>
    </html>
  );
}