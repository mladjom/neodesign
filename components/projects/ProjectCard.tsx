// components/projects/ProjectCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="overflow-hidden group">
          <div className="aspect-video relative">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground">{project.summary}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}