"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
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
        <div className="flex flex-col items-center gap-2">
          {testimonial.avatarUrl && (
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
              <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-muted-foreground">
              {testimonial.role}
              {testimonial.company && ` at ${testimonial.company}`}
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}