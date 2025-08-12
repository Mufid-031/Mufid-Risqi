import Image from "next/image";
import Magnetic from "../common/magnetic";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion, MotionProps } from "framer-motion";

interface ProjectCard extends MotionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  techstacks: string[];
  githubLink?: string;
  demoLink?: string;
  onClick?: () => void;
}

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  techstacks,
  githubLink,
  demoLink,
  onClick,
  ...props
}: ProjectCard) => {
  return (
    <motion.div layoutId={`card-${title}-${id}`} onClick={onClick} {...props}>
      <Magnetic magnetStrength={20}>
        <Card className="max-w-sm bg-transparent z-1 overflow-hidden pt-0">
          <motion.div
            layoutId={`image-${title}-${id}`}
            className="group w-full h-60 flex items-center justify-center bg-foreground"
          >
            <Image
              src={image || "/logo.png"}
              alt="logo"
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
            />
          </motion.div>
          <CardContent>
            <motion.h2
              layoutId={`title-${title}-${id}`}
              className="text-2xl font-bold line-clamp-1"
            >
              {title}
            </motion.h2>
            <motion.p
              layoutId={`description-${title}-${id}`}
              className="text-sm text-muted-foreground mt-2 line-clamp-3"
            >
              {description}
            </motion.p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techstacks.map((techstack, index) =>
                index < 3 ? (
                  <Badge
                    key={index}
                    className="rounded-full px-3"
                    variant="secondary"
                  >
                    {techstack}
                  </Badge>
                ) : null
              )}
              {techstacks.length > 3 && (
                <Badge className="rounded-full px-3" variant="secondary">{`+${
                  techstacks.length - 3
                }`}</Badge>
              )}
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
      </Magnetic>
    </motion.div>
  );
};
