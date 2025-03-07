"use client";

import { BlogGrid } from "@/components/blog/BlogGrid";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Suspense } from "react";
import { BlogGridSkeleton } from "@/components/blog/loading";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";

interface BlogGridSectionProps {
  posts: BlogPost[];
}

export function BlogGridSection({ posts }: BlogGridSectionProps) {
  return (
    <SectionWrapper className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid posts={posts} />
        </Suspense>
      </motion.div>
    </SectionWrapper>
  );
}