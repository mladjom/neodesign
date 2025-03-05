"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TestimonialsData } from "@/config/testimonials";
import { OptimizedImage } from "@/components/core/OptimizedImage";

export function TestimonialsSection() {
  return (
    <SectionWrapper 
      background="muted"
      title="Client Testimonials"
      centered
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TestimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="p-6 h-full">
              <div className="space-y-4">
                <p className="text-muted-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative">
                    <OptimizedImage
                      src={testimonial.avatar || `/images/testimonials/avatar-${index + 1}.jpg`}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}