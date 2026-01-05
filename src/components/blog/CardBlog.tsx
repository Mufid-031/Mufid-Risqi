"use client";

import { FC } from "react";
import { motion } from "framer-motion";

import { Separator } from "../ui/separator";
import { BlogFrontmatter } from "@/types/frontmatters";

type CardBlogProps = BlogFrontmatter;

export const CardBlog: FC<CardBlogProps> = ({ title, description }) => {
  return (
    <div className="aspect-square border-dashed border rounded-md bg-muted/30">
      <motion.div
        className="w-full h-full bg-muted/50 rounded-md"
        whileHover={{
          rotate: -2,
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
      >
        <div className="p-5 flex flex-col justify-between h-40">
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
        <Separator />
        <div className="flex gap-3 p-5">
          {/* {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))} */}
        </div>
      </motion.div>
    </div>
  );
};
