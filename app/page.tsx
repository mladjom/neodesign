import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { FeaturedWorkSection } from "@/components/sections/home/FeaturedWorkSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { BlogSection } from "@/components/sections/home/BlogSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { getAllBlogPosts } from "@/lib/blog-service";
import { PageTransition } from "@/components/animation/PageTransition";

export default async function Home() {
  // Fetch the latest blog posts
  const allPosts = await getAllBlogPosts();
  // Get the most recent 3 posts
  const latestPosts = allPosts.slice(0, 3);

  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <BlogSection posts={latestPosts} />
      <CTASection />
    </PageTransition>
  );
}