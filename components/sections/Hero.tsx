"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-32">
      <div className="container px-4">
        <motion.div 
          className="grid gap-8 md:grid-cols-2 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeIn} className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              We Create Digital 
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}Experiences
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforming ideas into powerful digital solutions through innovative design and development.
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Our Work</Button>
              <Button size="lg" variant="outline">Contact Us</Button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="relative aspect-video">
            <img
              src="https://picsum.photos/800/600"
              alt="Hero illustration"
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}