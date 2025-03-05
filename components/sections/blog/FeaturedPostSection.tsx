import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogPost } from "@/types/blog";
import { Suspense } from "react";
import { FeaturedPostSkeleton } from "@/components/blog/loading";

interface FeaturedPostSectionProps {
  post: BlogPost;
}

export function FeaturedPostSection({ post }: FeaturedPostSectionProps) {
  return (
    <SectionWrapper className="py-8">
      <Suspense fallback={<FeaturedPostSkeleton />}>
        <FeaturedPost post={post} />
      </Suspense>
    </SectionWrapper>
  );
}