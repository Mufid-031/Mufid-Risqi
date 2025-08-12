import Link from "next/link";
import RoundedButton from "../common/rounded-button";
import { TextReveal } from "../text-reveal";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export const About = () => {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="1"
      className="relative h-full"
    >
      <TextReveal>
        Hi! I&apos;m Ahmad Mufid Risqi, an Information Technology student
        passionate about web development and learning new technologies. I enjoy
        building clean and functional digital experiences.
      </TextReveal>
      <div className="w-full overflow-hidden flex justify-center pb-20">
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
      <div className="flex justify-center items-center pb-20">
        <RoundedButton padding={15} className="group px-6 py-3">
          <Link href="/about" className="group-hover:text-muted z-10">
            MORE ABOUT ME
          </Link>
        </RoundedButton>
      </div>
    </div>
  );
};

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
