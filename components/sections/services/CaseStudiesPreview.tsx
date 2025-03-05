"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/project-service";
import { OptimizedImage } from "@/components/core/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";

export function CaseStudiesPreview() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        // Take first two projects
        setProjects(allProjects.slice(0, 2));
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <SectionWrapper background="muted" title="Case Studies">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <OptimizedImage
                  src={project.thumbnail || `/images/projects/project-${index + 1}.jpg`}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="mb-4">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="outline" asChild>
                  <AnalyticsLink 
                    href={`/projects/${project.slug}`}
                    category="case_studies"
                    action="view"
                    label={project.slug}
                  >
                    View Case Study
                  </AnalyticsLink>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}