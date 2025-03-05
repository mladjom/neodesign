"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { OptimizedImage } from "@/components/core/OptimizedImage";

interface ProjectOverviewSectionProps {
  client: string;
  timeline: string;
  role: string;
  technologies: string[];
  thumbnail: string;
  title: string;
}

export function ProjectOverviewSection({ 
  client, 
  timeline, 
  role, 
  technologies, 
  thumbnail, 
  title 
}: ProjectOverviewSectionProps) {
  return (
    <SectionWrapper>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium">Client</h3>
                <p className="text-muted-foreground">{client}</p>
              </div>
              <div>
                <h3 className="font-medium">Timeline</h3>
                <p className="text-muted-foreground">{timeline}</p>
              </div>
              <div>
                <h3 className="font-medium">Role</h3>
                <p className="text-muted-foreground">{role}</p>
              </div>
              <div>
                <h3 className="font-medium">Deliverables</h3>
                <p className="text-muted-foreground">{technologies.join(", ")}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-video relative"
        >
          <OptimizedImage
            src={thumbnail}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}