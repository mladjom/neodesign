"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CaseStudyPreview } from "@/components/projects/CaseStudyPreview";
import { getAllProjects } from "@/lib/project-service";
import { ProjectDetail } from "@/types/project";
import { Skeleton } from "@/components/ui/skeleton";

const categories = ["E-commerce", "Web Apps", "Mobile", "Branding"];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  if (loading) {
    return <ProjectsPageSkeleton />;
  }

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful digital solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="container px-4">
          <div className="space-y-12">
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Case Studies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deep dive into our most impactful projects
              </p>
            </div>
            <div className="space-y-8">
              {projects.slice(0, 3).map((project) => (
                <CaseStudyPreview key={project.slug} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProjectsPageSkeleton() {
  return (
    <div className="space-y-20 md:space-y-32">
      <section className="relative pt-20 md:pt-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="h-16">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="h-12">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="space-y-12">
            <div className="flex justify-center gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24" />
              ))}
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}