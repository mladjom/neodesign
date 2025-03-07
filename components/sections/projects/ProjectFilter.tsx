"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SectionWrapper } from '@/components/layout/SectionWrapper';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <SectionWrapper>
    <motion.div
      className="flex flex-wrap gap-4 justify-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className="relative"
      >
        {activeCategory === "all" && (
          <motion.div
            layoutId="activeCategory"
            className="absolute inset-0 bg-primary opacity-10 rounded-md"
          />
        )}
        All Projects
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="relative"
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-primary opacity-10 rounded-md"
            />
          )}
          {category}
        </Button>
      ))}
    </motion.div>
    </SectionWrapper>
  );
}