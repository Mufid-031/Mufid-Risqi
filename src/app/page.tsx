"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Landing } from "@/components/landing";
import { Lanyard } from "@/components/lanyard";
import { Quote } from "@/components/quote";
import ChatBot from "@/components/ui/chatbot";
import { Works } from "@/components/works";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function Home() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Generate a unique session ID on component mount
    // You might want to persist this in localStorage for returning users
    if (!sessionId) {
      setSessionId(uuidv4());
    }
  }, [sessionId]);

  return (
    <motion.div
      key="main-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-0"
    >
      <Landing />
      <About />
      <Works />
      <Quote />
      <Contact />
      <Lanyard />
      <Footer />
      <ChatBot sessionId={sessionId!} />
    </motion.div>
  );
}
