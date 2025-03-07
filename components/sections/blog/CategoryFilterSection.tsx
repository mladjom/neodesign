"use client";

import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Suspense } from "react";
import { CategoryFilterSkeleton } from "@/components/blog/loading";
import { BlogCategory } from "@/types/blog";
import { motion } from "framer-motion";

interface CategoryFilterSectionProps {
  categories: BlogCategory[];
}

export function CategoryFilterSection({ categories }: CategoryFilterSectionProps) {
  return (
    <SectionWrapper className="py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Suspense fallback={<CategoryFilterSkeleton />}>
          <CategoryFilter categories={categories} />
        </Suspense>
      </motion.div>
    </SectionWrapper>
  );
}