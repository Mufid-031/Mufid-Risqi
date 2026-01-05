import { EyeIcon, FileTextIcon, SortAscIcon, SortDescIcon } from "lucide-react";

import LightRays from "@/components/light-rays";
import ShinyText from "@/components/shiny-text";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardBlog } from "@/components/blog/CardBlog";

import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { getTags, sortByTitle } from "@/lib/mdx.client";
import { SearchInput } from "@/components/blog/SearchInput";

export default async function BlogPage() {
  const files = await getAllFilesFrontmatter("blog");
  const snippets = sortByTitle(files);
  const tags = getTags(snippets);

  console.log("Snippets: ", snippets);
  console.log("Tags: ", tags);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-left"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* HERO */}
        <section className="pt-28 md:pt-36 flex flex-col items-center gap-3 max-w-xl w-full text-center">
          <div className="w-16 h-16 bg-muted/90 p-4 rounded-xl flex items-center justify-center">
            <FileTextIcon className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold">
            My <span className="text-[#00ffff]">Blog</span>
          </h1>

          <ShinyText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            speed={2}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
          />

          <SearchInput />
        </section>

        <section className="w-full mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 border-t border-r p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {snippets.length > 0 ? (
                snippets.map((snippet) => (
                  <CardBlog key={snippet.slug} {...snippet} />
                ))
              ) : (
                <p>No snippets found</p>
              )}
            </div>

            <aside className="border-t p-6 min-h-[300px] space-y-5">
              <Select defaultValue="sort-a-to-z">
                <SelectTrigger className="w-1/2 py-7">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="sort-a-to-z">
                    <SortAscIcon />
                    Sort A to Z
                  </SelectItem>
                  <SelectItem value="sort-z-to-a">
                    <SortDescIcon /> Sort Z to A
                  </SelectItem>
                  <SelectItem value="sort-by-views">
                    <EyeIcon /> Sort By Views
                  </SelectItem>
                </SelectContent>
              </Select>
              <ShinyText text="Choose topic" />
              <div className="flex items-center gap-4">
                <Badge variant="secondary">Category</Badge>
                <Badge variant="secondary">Category</Badge>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
