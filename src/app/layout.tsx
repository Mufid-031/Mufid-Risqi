"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "@/components/preloader";
import Layout from "@/components/layout/Layout";
import { GridBackground } from "@/components/grid-background";

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
        <Layout>
          <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
          <AnimatePresence>
            {showGridBackground && <GridBackground />}
          </AnimatePresence>
          {isContentVisible && children}
        </Layout>
      </body>
    </html>
  );
}
