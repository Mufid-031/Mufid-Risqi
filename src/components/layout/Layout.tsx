import { TransitionPageProvider } from "@/contexts/transition-page-context";
import ThemeProvider from "../theme-provider";
import Header from "./Header";
import { BottomNav } from "../bottom-nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TransitionPageProvider>
        <Header />
        {children}
        <BottomNav />
        <Footer />
      </TransitionPageProvider>
    </ThemeProvider>
  );
}
