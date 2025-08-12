import { Card } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { FigmaLogoIcon, FramerLogoIcon } from "@radix-ui/react-icons";
import { FaLaravel, FaVuejs } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";

export const Skills = () => {
  return (
    <Card className="lg:col-span-3 col-span-2 rounded-xl w-full h-[15rem] p-10">
      <div className="grid grid-cols-3 grid-rows-2 gap-5 lg:grid-cols-6 lg:grid-rows-1 justify-items-center content-center w-full h-full">
        {skillIcons.map((skill, index) => (
          <div key={index} className="flex justify-center items-center">
            <Tooltip>
              <TooltipTrigger>{skill.icon}</TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </Card>
  );
};

const skillIcons = [
  {
    icon: <RiReactjsFill className="w-12 h-12 text-muted-foreground" />,
    name: "React",
  },
  {
    icon: <RiNextjsFill className="w-12 h-12 text-muted-foreground" />,
    name: "Next.js",
  },
  {
    icon: <FaVuejs className="w-12 h-12 text-muted-foreground" />,
    name: "Vue.js",
  },
  {
    icon: <FramerLogoIcon className="w-12 h-12 text-muted-foreground" />,
    name: "Framer Motion",
  },
  {
    icon: <FaLaravel className="w-12 h-12 text-muted-foreground" />,
    name: "Laravel",
  },
  {
    icon: <FigmaLogoIcon className="w-12 h-12 text-muted-foreground" />,
    name: "Figma",
  },
];
