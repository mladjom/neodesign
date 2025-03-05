"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProjectDetailHero } from "@/components/sections/projects/ProjectDetailHero";
import { ProjectOverviewSection } from "@/components/sections/projects/ProjectOverviewSection";
import { ProjectProcessSection } from "@/components/sections/projects/ProjectProcessSection";
import { ChallengeAndSolution } from "@/components/sections/projects/ChallengeAndSolution";
import { ProjectResults } from "@/components/sections/projects/ProjectResults";
import { ProjectTestimonial } from "@/components/sections/projects/ProjectTestimonial";
import { RelatedProjects } from "@/components/sections/projects/RelatedProjects";
import { getProjectBySlug } from "@/lib/project-service";
import { ProjectDetail } from "@/types/project";
import { PageTransition } from "@/components/animation/PageTransition";
import ErrorBoundary from "@/components/error/ErrorBoundary";

export default function ProjectPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProject() {
      setLoading(true);
      try {
        if (typeof slug !== 'string') {
          throw new Error('Invalid project slug');
        }
        
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="space-y-20">
        <section className="pt-20 md:pt-32">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="h-8 w-32 animate-pulse bg-muted rounded-md"></div>
              <div className="h-16 w-full animate-pulse bg-muted rounded-md"></div>
              <div className="h-12 w-3/4 animate-pulse bg-muted rounded-md"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">
            {error?.message || "The project you're looking for doesn't exist or has been removed."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <PageTransition>
        <div className="space-y-20">
          <ProjectDetailHero 
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />

          <ProjectOverviewSection
            client={project.client}
            timeline={project.timeline}
            role={project.role}
            technologies={project.technologies}
            thumbnail={project.thumbnail}
            title={project.title}
          />

          <ProjectProcessSection steps={project.process} />

          <ChallengeAndSolution 
            challenge={project.challenge}
            solution={project.solution}
          />

          <ProjectResults results={project.results} />

          {project.testimonial && (
            <ProjectTestimonial testimonial={project.testimonial} />
          )}

          <RelatedProjects 
            currentSlug={project.slug}
            category={project.category}
          />
        </div>
      </PageTransition>
    </ErrorBoundary>
  );
}