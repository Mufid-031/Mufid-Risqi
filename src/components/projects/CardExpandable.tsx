"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Magnetic from "../common/magnetic";
import { Card, CardContent, CardFooter } from "../ui/card";

interface CardExpandableProps {
  active:
    | {
        title: string;
        description: string;
        image: string;
        techstacks: string[];
        githubLink?: string;
        demoLink?: string;
      }
    | boolean
    | null;
  id: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

export const CardExpandable = ({ active, id, ref }: CardExpandableProps) => {
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              ref={ref}
              key={`card-${active.title}-${id}`}
              layoutId={`card-${active.title}-${id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
            >
              <Card className="max-w-xl z-1 overflow-hidden pt-0">
                <motion.div
                  layoutId={`image-${active.title}-${id}`}
                  className="w-full h-60 flex items-center justify-center bg-foreground"
                >
                  <Image
                    src={active.image || "/logo.png"}
                    alt="logo"
                    width={400}
                    height={400}
                  />
                </motion.div>
                <CardContent>
                  <motion.h2
                    layoutId={`title-${active.title}-${id}`}
                    className="text-2xl font-bold"
                  >
                    {active.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`description-${active.title}-${id}`}
                    className="text-muted-foreground mt-2"
                  >
                    {active.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {active.techstacks.map((techstack, index) => (
                      <Badge
                        key={index}
                        className="rounded-full px-3"
                        variant="secondary"
                      >
                        {techstack}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Magnetic magnetStrength={20}>
                    <Button className="rounded-full cursor-pointer">
                      View Project
                    </Button>
                  </Magnetic>
                  <Magnetic magnetStrength={20}>
                    <Button
                      className="rounded-full cursor-pointer"
                      variant="secondary"
                    >
                      View Code
                    </Button>
                  </Magnetic>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
