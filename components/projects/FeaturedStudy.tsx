'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

interface FeaturedStudyProps {
  project: Project;
  index: number;
}

export function FeaturedStudy({ project, index }: FeaturedStudyProps) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      className="h-full"
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
        <CardContent className="p-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.summary}</p>
              <ul className="space-y-2 pb-2">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <Link href={`/projects/${project.slug}`}>
                <Button className="group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}