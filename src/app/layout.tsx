import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Mufid Risqi",
  description: "Portfolio of Ahmad Mufid Risqi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
          <Header />
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
