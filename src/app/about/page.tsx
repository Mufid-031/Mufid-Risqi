import { Profile } from "@/components/about/profile";
import { Social } from "@/components/about/social";
import { Exprerience } from "@/components/about/experience";
import { Location } from "@/components/about/location";
import { Skills } from "@/components/about/skills";
import { Certificate } from "@/components/about/certificate";

export default function About() {
  return (
    <div className="flex justify-center py-32">
      <div className="w-[90%] lg:w-[70%] grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Profile />
        <Social />
        <Exprerience />
        <Certificate />
        <Location />
        <Skills />
      </div>
    </div>
  );
}
