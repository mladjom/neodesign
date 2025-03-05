"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { OptimizedImage } from "@/components/core/OptimizedImage";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1.0],
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export function HeroSection() {
  return (
    <SectionWrapper className="relative pt-20 md:pt-32" animate={false}>
      <motion.div 
        className="grid gap-8 md:grid-cols-2 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            We Create Digital 
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {" "}Experiences
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming ideas into powerful digital solutions through innovative design and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <AnalyticsLink 
                href="/projects" 
                category="hero" 
                action="click" 
                label="view_work"
              >
                View Our Work
              </AnalyticsLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <AnalyticsLink 
                href="/contact" 
                category="hero" 
                action="click" 
                label="contact_us"
              >
                Contact Us
              </AnalyticsLink>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="relative aspect-video"
          style={{ willChange: "opacity, transform" }}
        >
          <OptimizedImage
            src="/images/hero/digital-design-process_800x600.webp"
            alt="Hero illustration of digital design process"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-full"
            priority
          />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}