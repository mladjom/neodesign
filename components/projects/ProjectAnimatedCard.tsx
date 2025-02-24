'use client';

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectAnimatedCardProps {
  project: Project;
  index: number;
}

export function ProjectAnimatedCard({ project, index }: ProjectAnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="h-full">
        <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex gap-2 flex-wrap">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
