import { BlogPagination } from "@/components/blog/BlogPagination";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

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
      <BlogPagination totalPages={totalPages} currentPage={currentPage} />
    </SectionWrapper>
  );
}