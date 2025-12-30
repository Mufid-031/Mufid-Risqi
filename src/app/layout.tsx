"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";
import { GridBackground } from "@/components/grid-background";
import { useEffect, useState } from "react";
import { TransitionPageProvider } from "@/contexts/transition-page-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [showGridBackground, setShowGridBackground] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Matikan scroll saat loading
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setIsLoading(false);
      setShowGridBackground(true);
      window.scrollTo(0, 0);

      setTimeout(() => {
        setShowGridBackground(false);
        setIsContentVisible(true);
        document.body.style.overflow = ""; // aktifkan scroll
      }, 1000);
    }, 5000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Mufid Risqi" />
        {/* Meta dasar */}
        <meta
          name="description"
          content="Portfolio resmi Ahmad Mufid Risqi, seorang Web Developer yang berfokus pada teknologi modern seperti React, Next.js, dan Laravel. Lihat projek dan pengalaman saya di sini."
        />
        <meta
          name="keywords"
          content="Ahmad Mufid Risqi, Web Developer, Frontend Developer, React, Next.js, Laravel, Portfolio Developer Indonesia"
        />
        <meta name="author" content="Ahmad Mufid Risqi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Ahmad Mufid Risqi - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Lihat projek, pengalaman, dan keahlian Ahmad Mufid Risqi sebagai Web Developer."
        />
        <meta
          property="og:image"
          content="https://mufid-risqi.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://mufid-risqi.vercel.app" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ahmad Mufid Risqi - Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Lihat projek dan pengalaman saya sebagai Web Developer."
        />
        <meta
          name="twitter:image"
          content="https://mufid-risqi.vercel.app/og-image.jpg"
        />
        <meta name="twitter:site" content="@mufid031" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionPageProvider>
            <Header />

            {/* Preloader & GridBackground hanya render sekali */}
            <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
            <AnimatePresence>
              {showGridBackground && <GridBackground />}
            </AnimatePresence>

            {/* Konten halaman */}
            {isContentVisible && children}

            <BottomNav />
          </TransitionPageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
