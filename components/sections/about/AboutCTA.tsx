"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";

export function AboutCTA() {
  return (
    <SectionWrapper background="muted">
      <motion.div className="max-w-3xl mx-auto text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="text-xl text-muted-foreground">
          Let's work together to bring your vision to life
        </p>
        <Button size="lg" asChild>
          <AnalyticsLink 
            href="/contact" 
            category="cta" 
            action="click" 
            label="about_page_cta"
          >
            Get in Touch
          </AnalyticsLink>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}