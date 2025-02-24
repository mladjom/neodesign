'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

interface AnimatedFeaturedStudyProps {
  project: Project;
  index: number;
}

export function AnimatedFeaturedStudy({ project, index }: AnimatedFeaturedStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl font-semibold"
              >
                {project.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                {project.summary}
              </motion.p>
              <motion.ul className="space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {outcome}
                  </motion.li>
                ))}
              </motion.ul>
              <Link href={`/projects/${project.slug}`}>
                <Button className="group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-video relative rounded-lg overflow-hidden"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}