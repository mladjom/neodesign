import { BlogListHero } from "@/components/sections/blog/BlogListHero";
import { BlogSearchSection } from "@/components/sections/blog/BlogSearchSection";
import { FeaturedPostSection } from "@/components/sections/blog/FeaturedPostSection";
import { CategoryFilterSection } from "@/components/sections/blog/CategoryFilterSection";
import { BlogGridSection } from "@/components/sections/blog/BlogGridSection";
import { BlogPaginationSection } from "@/components/sections/blog/BlogPaginationSection";
import { 
  getPaginatedBlogPosts, 
  getAllCategories, 
  getFeaturedPosts 
} from "@/lib/blog-service";
import { createMetadata } from "@/config/metadata";
import { PageTransition } from "@/components/animation/PageTransition";

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    tag?: string;
  }>;
}

export const metadata = createMetadata({
  title: "Blog | Our Insights and Thoughts",
  description: "Discover our latest articles, tutorials, and insights on web development, design, and technology.",
});

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await the searchParams before accessing its properties
  const params = await searchParams;
  
  const page = Number(params.page) || 1;
  const category = params.category || '';
  const tag = params.tag || '';
  const postsPerPage = 9;
  
  const { items: posts, pageCount, currentPage } = await getPaginatedBlogPosts(
    page,
    postsPerPage,
    category,
    tag
  );
  
  const categories = await getAllCategories();
  const featuredPosts = await getFeaturedPosts(1);
  const featuredPost = featuredPosts[0];

  return (
    <PageTransition>
      <BlogListHero />
      <BlogSearchSection />
      {featuredPost && <FeaturedPostSection post={featuredPost} />}
      <CategoryFilterSection categories={categories} />
      <BlogGridSection posts={posts} />
      <BlogPaginationSection totalPages={pageCount} currentPage={currentPage} />
    </PageTransition>
  );
}