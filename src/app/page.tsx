"use client";

import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, QuoteIcon } from "lucide-react";
import { InView } from "react-intersection-observer";

import { Works } from "@/components/works";
import ChatBot from "@/components/ui/chatbot";
import { Lanyard } from "@/components/lanyard";
import Particles from "@/components/particles";
import { Background } from "@/components/background";
import { TextReveal } from "@/components/text-reveal";
import ScrollVelocity from "@/components/ScrollVelocity";
import RoundedButton from "@/components/common/rounded-button";
import VariableProximity from "@/components/variable-proximity";
import { RandomLetterSwapPingPong } from "@/components/RandomLetterSwap";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import { cn } from "@/lib/utils";

export const imageVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [-10, 10],
    scale: [1.1, 1],
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
      damping: 15,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Home() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const MotionImage = motion(Image);

  useEffect(() => {
    // Generate a unique session ID on component mount
    // You might want to persist this in localStorage for returning users
    if (!sessionId) {
      setSessionId(uuidv4());
    }
  }, [sessionId]);

  return (
    <motion.main
      key="main-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-0"
    >
      <InView triggerOnce>
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={cn(
              "relative h-screen overflow-hidden flex justify-center items-center",
              inView && "fade-in-start"
            )}
            data-scroll-section
          >
            <Background />
            <MotionImage
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              src="/logo.png"
              alt="logo"
              width={300}
              height={300}
              className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            />
            <div
              data-scroll
              data-scroll-speed="2"
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 z-20"
            >
              <VariableProximity
                label="AHMAD MUFID RISQI"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={ref}
                radius={100}
                falloff="linear"
              />
            </div>
            <div
              data-scroll
              data-scroll-speed="1"
              className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <ScrollVelocity
                className="text-5xl lg:text-8xl font-extrabold"
                texts={[
                  "FRONTEND DEVELOPER-ANDROID DEVELEOPER-",
                  "BACKEND DEVELOPER-UI/UX DESIGNER-",
                ]}
              />
            </div>
            <div
              data-scroll
              data-scroll-speed="1"
              className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <RoundedButton
                padding={10}
                className="group p-3 hover:px-6 py-3 transition-all duration-400 flex gap-3"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
              >
                <p className="hidden group-hover:block group-hover:text-muted z-20 transition-all duration-400">
                  Scroll
                </p>
                <ArrowDown className="w-6 h-6 group-hover:text-muted z-20" />
              </RoundedButton>
            </div>
            <Particles
              speed={0.1}
              particleCount={100}
              particleSpread={10}
              particleBaseSize={100}
              disableRotation={false}
              alphaParticles={false}
              moveParticlesOnHover={false}
              className="pointer-events-none"
            />
          </section>
        )}
      </InView>
      <InView triggerOnce>
        {({ ref, inView }) => (
          <section
            ref={ref}
            data-scroll-section
            data-scroll
            data-scroll-speed="1"
            className={cn("relative h-full", inView && "fade-in-start")}
          >
            <TextReveal>
              Hi! I&apos;m Ahmad Mufid Risqi, an Information Technology student
              passionate about web development and learning new technologies. I
              enjoy building clean and functional digital experiences.
            </TextReveal>
            <div className="w-full overflow-hidden flex justify-center pb-20">
              <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
              />
            </div>
            <div className="flex justify-center items-center pb-20">
              <RoundedButton padding={15} className="group px-6 py-3">
                <Link href="/about" className="group-hover:text-muted z-10">
                  MORE ABOUT ME
                </Link>
              </RoundedButton>
            </div>
          </section>
        )}
      </InView>
      <Works />
      <InView triggerOnce>
        {({ ref, inView }) => (
          <motion.section
            ref={ref}
            className={cn(
              "w-full h-96 md:h-screen overflow-hidden pb-24 flex flex-col items-center relative",
              inView && "fade-in-start"
            )}
          >
            <h1
              className="text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[25rem] font-extrabold text-muted/50 text-center mb-10"
              data-fade="0"
            >
              QUOTE
            </h1>
            <div
              className="absolute text-center w-[80%] xl:w-[60%] top-10 md:top-32 lg:top-52 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
              data-fade="1"
            >
              <QuoteIcon
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
                fill="currentColor"
              />
              <motion.p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                I see AI not as a destination, but as a bridge to smarter
                solutions.
              </motion.p>
            </div>
          </motion.section>
        )}
      </InView>
      <InView triggerOnce>
        {({ ref, inView }) => (
          <motion.section
            ref={ref}
            className={cn(
              "w-full h-96 md:h-screen overflow-hidden pb-24 flex flex-col items-center relative",
              inView && "fade-in-start"
            )}
          >
            <h1
              className="text-[5rem] md:text-[10rem] lg:text-[12rem] xl:text-[19rem] font-extrabold text-muted/50 text-center mb-10"
              data-fade="0"
            >
              CONTACT
            </h1>
            <div
              className="absolute text-center w-full xl:w-[60%] top-20 md:top-32 lg:top-52 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
              data-fade="1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[4.2rem] font-extrabold">
                Let’s Build Something Great
              </h2>
              <Link href="mailto:risqimufid50@gmail.com">
                <RandomLetterSwapPingPong
                  label="CONTACT ME"
                  reverse={false}
                  className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground"
                />
              </Link>
              <p className="text-md md:text-xl lg:text-2xl text-muted-foreground px-20">
                I’m always open to discussing new opportunities, collaborations,
                or simply having a chat. Feel free to reach out!
              </p>
            </div>
          </motion.section>
        )}
      </InView>
      <Lanyard />
      <ChatBot sessionId={sessionId!} />
    </motion.main>
  );
}

const skills = [
  "/htmlnime.avif",
  "/cssnime.avif",
  "/tsnime.avif",
  "/pynime.avif",
  "/nodenime.avif",
  "/bunime.avif",
  "/reactnime.avif",
  "/nextnime.avif",
  "/twnime.avif",
  "/laranime.avif",
  "/vsnime.avif",
  "/figmanime.avif",
];
