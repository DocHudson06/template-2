import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | John Doe",
  description: "Full-stack developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            {/* Background Video */}
            <BackgroundVideo />

            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>

            {/* Main Content */}
            <main className="relative z-10">
              {children}
            </main>

            {/* Toast Notifications */}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
