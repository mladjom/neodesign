"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { BlogSearch } from "@/components/blog/BlogSearch";

export function BlogSearchSection() {
  return (
    <SectionWrapper className="py-4">
      <motion.div 
        className="max-w-md mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >        
      <BlogSearch />
      </motion.div>
    </SectionWrapper>
  );
}