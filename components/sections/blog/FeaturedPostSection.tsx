"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogPost } from "@/types/blog";
import { Suspense } from "react";
import { FeaturedPostSkeleton } from "@/components/blog/loading";
import { motion } from "framer-motion";

interface FeaturedPostSectionProps {
  post: BlogPost;
}

export function FeaturedPostSection({ post }: FeaturedPostSectionProps) {
  return (
    <SectionWrapper className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Suspense fallback={<FeaturedPostSkeleton />}>
          <FeaturedPost post={post} />
        </Suspense>
      </motion.div>
    </SectionWrapper>
  );
}