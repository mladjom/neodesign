"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface ProjectTestimonialProps {
  testimonial: Testimonial;
}

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  return (
    <SectionWrapper>
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <blockquote className="text-2xl italic">
          "{testimonial.quote}"
        </blockquote>
        <div>
          <p className="font-medium">{testimonial.author}</p>
          <p className="text-muted-foreground">{testimonial.role}</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}