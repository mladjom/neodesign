"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import { ProjectDetail } from "@/types/project";

// Import static data directly from project-service
import { getAllProjects } from "@/lib/project-service";
import { useEffect, useState } from "react";

export function FeaturedWork() {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects.slice(0, 4));
    };
    
    loadProjects();
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          className="space-y-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center">Featured Work</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.2 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
                    <div className="aspect-video relative">
                      <img
                        src={project.thumbnail || `https://picsum.photos/seed/${project.title}/600/400`}
                        alt={project.title}
                        className="object-cover w-full h-full"
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
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}