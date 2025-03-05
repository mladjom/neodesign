import { BlogGrid } from "@/components/blog/BlogGrid";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Suspense } from "react";
import { BlogGridSkeleton } from "@/components/blog/loading";
import { BlogPost } from "@/types/blog";

interface BlogGridSectionProps {
  posts: BlogPost[];
}

export function BlogGridSection({ posts }: BlogGridSectionProps) {
  return (
    <SectionWrapper className="py-8">
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid posts={posts} />
      </Suspense>
    </SectionWrapper>
  );
}