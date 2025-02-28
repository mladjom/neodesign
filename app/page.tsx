import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { getAllBlogPosts } from "@/lib/blog-service"; 
import { BlogPosts } from "@/components/sections/BlogPosts";
import { CTA } from "@/components/sections/CTA";

export default async function Home() {
    // Fetch the latest blog posts
    const allPosts = await getAllBlogPosts();
    // Get the most recent 3 posts
    const latestPosts = allPosts.slice(0, 3);
  return (
    <div className="space-y-20 md:space-y-32">
      <Hero />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <BlogPosts posts={latestPosts} />
      <CTA />
    </div>
  );
}