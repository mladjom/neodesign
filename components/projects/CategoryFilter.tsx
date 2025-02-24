'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-4 justify-center"
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
  );
}