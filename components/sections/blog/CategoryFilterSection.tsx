import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Suspense } from "react";
import { CategoryFilterSkeleton } from "@/components/blog/loading";
import { BlogCategory } from "@/types/blog";

interface CategoryFilterSectionProps {
  categories: BlogCategory[];
}

export function CategoryFilterSection({ categories }: CategoryFilterSectionProps) {
  return (
    <SectionWrapper className="py-4">
      <Suspense fallback={<CategoryFilterSkeleton />}>
        <CategoryFilter categories={categories} />
      </Suspense>
    </SectionWrapper>
  );
}