'use client';

import { motion } from "framer-motion";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectProcess } from "./ProjectProcess";
import type { ProjectDetail } from "@/types/project";

interface ProjectContentProps {
  project: ProjectDetail;
}

export function ProjectContent({ project }: ProjectContentProps) {
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

      {/* Challenge & Solution */}
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

      {/* Results */}
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
                  <p className="text-4xl font-bold text-primary">
                    {result.value}
                  </p>
                  <p className="text-muted-foreground">{result.metric}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
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
                <p className="text-muted-foreground">
                  {project.testimonial.role}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}