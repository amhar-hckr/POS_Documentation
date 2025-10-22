import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS_GUIDE",
  description: "Documentation for POS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-t border-border h-14 flex items-center px-2 sm:px-4 md:px-6">
              <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  © 2025 POS Documentation
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Last updated: September 22, 2025
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
