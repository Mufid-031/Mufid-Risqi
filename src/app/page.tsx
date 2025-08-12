"use client";

import { About } from "@/components/about";
import { BottomNav } from "@/components/bottom-nav";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Landing } from "@/components/landing";
import { Lanyard } from "@/components/lanyard";
import Preloader from "@/components/preloader";
import { Quote } from "@/components/quote";
import ChatBot from "@/components/ui/chatbot";
import { Works } from "@/components/works";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showGridBackground, setShowGridBackground] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Generate a unique session ID on component mount
    // You might want to persist this in localStorage for returning users
    if (!sessionId) {
      setSessionId(uuidv4());
    }
  }, [sessionId]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      // Matikan scroll saat loading
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setIsLoading(false);
        setShowGridBackground(true);
        window.scrollTo(0, 0);

        setTimeout(() => {
          setShowGridBackground(false);
          setIsContentVisible(true);
          document.body.style.overflow = ""; // Aktifkan kembali scroll
        }, 1000);
      }, 5000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <AnimatePresence>
        {showGridBackground && (
          <motion.div
            key="grid-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-10 flex h-screen w-full items-center justify-center bg-white dark:bg-black"
          >
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContentVisible && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-0"
          >
            <Header />
            <Landing />
            <About />
            <Works />
            <Quote />
            <Contact />
            <Lanyard />
            <Footer />
            <ChatBot sessionId={sessionId!} />
            <BottomNav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
