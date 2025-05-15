import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import BackgroundVideo from "@/components/BackgroundVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My professional portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundVideo
            darkVideoUrl="/videos/bg-dark.mp4"
            lightVideoUrl="/videos/bg-light.mp4"
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
