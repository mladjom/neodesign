import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityContext';
import { Header } from "@/components/core/Header";
import { Footer } from "@/components/core/Footer";
import { AccessibilityControls } from '@/components/accessibility/AccessibilityControls';
import { baseMetadata } from '@/config/metadata';
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AccessibilityProvider>
            <Header />
            <main className="container mx-auto min-h-screen">
              {children}
            </main>
            <Footer />
            <AccessibilityControls />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}