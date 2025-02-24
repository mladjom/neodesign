import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPosts } from "@/components/sections/BlogPosts";
import { CTA } from "@/components/sections/CTA";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-20 md:space-y-32">
      <Hero />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <BlogPosts posts={posts} />
      <CTA />
    </div>
  );
}