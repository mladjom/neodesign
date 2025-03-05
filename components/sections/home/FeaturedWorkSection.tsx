"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { OptimizedImage } from "@/components/core/OptimizedImage";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

export function FeaturedWorkSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        // Limit to 4 featured projects
        setProjects(data.slice(0, 4));
        setError(null);
      } catch (error) {
        console.error("Error loading projects:", error);
        setError("Failed to load projects. Please try again later.");
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <SectionWrapper title="Featured Work" centered>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="aspect-video bg-muted animate-pulse" />
              <div className="p-6">
                <div className="h-6 w-3/4 bg-muted animate-pulse mb-2 rounded" />
                <div className="h-16 bg-muted animate-pulse mb-4 rounded" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-muted animate-pulse rounded" />
                  <div className="h-6 w-16 bg-muted animate-pulse rounded" />
                  <div className="h-6 w-16 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-10 w-32 bg-muted animate-pulse rounded" />
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  // Error state
  if (error) {
    return (
      <SectionWrapper title="Featured Work" centered>
        <div className="text-center py-8">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </SectionWrapper>
    );
  }

  // Empty state
  if (projects.length === 0) {
    return (
      <SectionWrapper title="Featured Work" centered>
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">No projects found</p>
          <Button asChild variant="outline">
            <AnalyticsLink href="/contact" category="featured_work" action="contact">
              Contact Us
            </AnalyticsLink>
          </Button>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title="Featured Work" centered>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <AnalyticsLink 
              href={`/projects/${project.slug}`}
              category="featured_work"
              action="view"
              label={project.slug}
            >
              <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                <div className="aspect-video relative">
                  <OptimizedImage
                    src={project.thumbnail || `/images/projects/project-${index + 1}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                    )}
                  </div>
                  <Button>View Case Study</Button>
                </div>
              </Card>
            </AnalyticsLink>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" asChild>
          <AnalyticsLink 
            href="/projects"
            category="featured_work"
            action="view_all"
          >
            View All Projects
          </AnalyticsLink>
        </Button>
      </div>
    </SectionWrapper>
  );
}