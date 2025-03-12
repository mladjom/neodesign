// app/projects/page.tsx
import { ProjectListHero } from "@/components/sections/projects/ProjectListHero";
import { ProjectList } from "@/components/sections/projects/ProjectList";
import { FeaturedCaseStudies } from "@/components/sections/projects/FeaturedCaseStudies";
import { PageTransition } from "@/components/animation/PageTransition";
import { createMetadata } from "@/config/metadata";
import { getAllProjectCategories } from "@/lib/project-service";

export const metadata = createMetadata({
  title: "Our Work - Portfolio Projects",
  description: "Explore our portfolio of successful digital solutions and case studies.",
  keywords: ["portfolio", "case studies", "design projects", "web development"],
});

// Dynamically fetch categories
const categories = await getAllProjectCategories();

export default function ProjectsPage() {
  return (
    <PageTransition>
      <ProjectListHero />
      <ProjectList categories={categories} />
      <FeaturedCaseStudies />
    </PageTransition>
  );
}