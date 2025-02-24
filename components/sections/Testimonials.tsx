"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";
import { testimonials } from "@/config/content";

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          className="space-y-12"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://picsum.photos/40/40`}
                        alt={testimonial.author}
                        className="rounded-full"
                      />
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
        </motion.div>
      </div>
    </section>
  );
}