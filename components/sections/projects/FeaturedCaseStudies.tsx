"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FeaturedStudy } from "@/components/projects/FeaturedStudy";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/lib/project-service";

export function FeaturedCaseStudies() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getAllProjects();
        setProjects(allProjects.slice(0, 3));
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  // Define animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // This creates the staggered effect
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper
      background="muted"
      title="Featured Case Studies"
      subtitle="Deep dive into our most impactful projects"
      centered
    >
      {loading ? (
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i} 
              className="rounded-lg border bg-card shadow-sm h-64 animate-pulse" 
            />
          ))}
        </div>
      ) : (
        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.slug}
              variants={itemVariants}
            >
              <FeaturedStudy 
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </SectionWrapper>
  );
}