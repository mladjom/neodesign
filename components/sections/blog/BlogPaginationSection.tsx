"use client";

import { BlogPagination } from "@/components/blog/BlogPagination";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

interface BlogPaginationSectionProps {
  totalPages: number;
  currentPage: number;
}

export function BlogPaginationSection({ 
  totalPages, 
  currentPage 
}: BlogPaginationSectionProps) {
  if (totalPages <= 1) {
    return null;
  }
  
  return (
    <SectionWrapper className="py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <BlogPagination totalPages={totalPages} currentPage={currentPage} />
      </motion.div>
    </SectionWrapper>
  );
}