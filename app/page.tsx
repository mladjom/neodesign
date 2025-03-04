import { Suspense, lazy } from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { getAllBlogPosts } from "@/lib/blog-service"; 
import { SectionLoading } from "@/components/ui/section-loading";

// Lazy load below-the-fold components
const LazyFeaturedWork = lazy(() => import("@/components/sections/FeaturedWork").then(mod => ({ default: mod.FeaturedWork })));
const LazyTestimonials = lazy(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })));
const LazyBlogPosts = lazy(() => import("@/components/sections/BlogPosts").then(mod => ({ default: mod.BlogPosts })));
const LazyCTA = lazy(() => import("@/components/sections/CTA").then(mod => ({ default: mod.CTA })));

export default async function Home() {
    // Fetch the latest blog posts
    const allPosts = await getAllBlogPosts();
    // Get the most recent 3 posts
    const latestPosts = allPosts.slice(0, 3);
    
    return (
      <div className="space-y-20 md:space-y-32">
        {/* Always render above-the-fold content immediately */}
        <Hero />
        <Services />
        
        {/* Lazy load below-the-fold content */}
        <Suspense fallback={<SectionLoading layout="grid" columns={2} />}>
          <LazyFeaturedWork />
        </Suspense>
        
        <Suspense fallback={<SectionLoading layout="grid" columns={3} />}>
          <LazyTestimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoading layout="grid" columns={3} />}>
          <LazyBlogPosts posts={latestPosts} />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <LazyCTA />
        </Suspense>
      </div>
    );
}