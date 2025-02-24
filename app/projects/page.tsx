"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CaseStudyPreview } from "@/components/projects/CaseStudyPreview";

const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform Redesign",
    client: "Fashion Retailer",
    timeline: "4 months",
    role: "Full-stack Development",
    thumbnail: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "E-commerce",
    summary: "Complete redesign and development of an e-commerce platform",
    description: "A comprehensive e-commerce solution with advanced features...",
    outcomes: [
      "150% increase in conversion rate",
      "40% reduction in page load time",
      "95% positive user feedback"
    ]
  },
  // Add more projects...
];

const categories = ["E-commerce", "Web Apps", "Mobile", "Branding"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

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