"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { BlogSearch } from "@/components/blog/BlogSearch";

export function BlogSearchSection() {
  return (
    <SectionWrapper className="py-4">
      <div className="max-w-md mx-auto w-full">
        <BlogSearch />
      </div>
    </SectionWrapper>
  );
}