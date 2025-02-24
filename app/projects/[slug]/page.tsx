// app/projects/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectProcess } from "@/components/projects/ProjectProcess";
import { getProjectBySlug } from "@/lib/project-service";
import { ProjectDetail } from "@/types/project";
import { Skeleton } from "@/components/ui/skeleton";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  // Unwrap the params Promise using React.use()
  const { slug } = use(params);
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  if (loading) {
    return <ProjectSkeleton />;
  }

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="space-y-20">
      <ProjectHero
        title={project.title}
        description={project.description}
        technologies={project.technologies}
      />

      <ProjectOverview
        client={project.client}
        timeline={project.timeline}
        role={project.role}
        technologies={project.technologies}
        thumbnail={project.thumbnail}
        title={project.title}
      />

      <ProjectProcess steps={project.process} />

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Results</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {project.results.map((result) => (
                <div key={result.metric} className="text-center space-y-2">
                  <p className="text-4xl font-bold text-primary">{result.value}</p>
                  <p className="text-muted-foreground">{result.metric}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-20">
          <div className="container px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl italic">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{project.testimonial.author}</p>
                <p className="text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="space-y-20">
      <section className="pt-20 md:pt-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="h-8 w-32">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="h-16">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="h-12">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground">
          The project you're looking for doesn't exist or has been removed.
        </p>
      </div>
    </div>
  );
}