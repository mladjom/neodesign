"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/core/OptimizedImage";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function AboutStory() {
  return (
    <SectionWrapper>
      <motion.div
        className="grid gap-12 md:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2020, NeoDesign emerged from a vision to bridge the gap
              between sophisticated technology and human-centered design.
            </p>
            <p>
              What started as a small team of dreamers has grown into a diverse
              collective of creative minds, technical experts, and strategic
              thinkers.
            </p>
            <p>
              Today, we&apos;re proud to have partnered with businesses across the
              globe, helping them achieve their digital transformation goals
              and create meaningful connections with their audiences.
            </p>
          </div>
        </div>
        <div className="aspect-square">
          <OptimizedImage
            src="https://picsum.photos/600/600"
            alt="Team collaboration"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}