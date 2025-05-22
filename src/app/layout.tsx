import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BottomNavbar from "@/components/BottomNavbar";
import BackgroundVideo from "@/components/BackgroundVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jyothi Vardhana Rao Metta - Portfolio",
  description: "Full Stack Developer & Cloud Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Global background - lowest layer */}
            <div className="fixed inset-0 bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 z-0" />
            
            {/* Theme-aware video background - middle layer */}
            <BackgroundVideo />
            
            {/* Animated background elements - above video */}
            <div className="fixed inset-0 overflow-hidden z-[6]">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl floating" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl floating" />
            </div>

            {/* Main Content - above all background elements */}
            <main className="flex-1 relative z-10 pb-24">
              {children}
            </main>
            
            {/* Bottom Navigation - floating UI, highest layer */}
            <div className="relative z-50">
              <BottomNavbar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
