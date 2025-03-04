"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { services } from "@/config/content";
import Link from "next/link";

// Separate component for service card improves SRP
function ServiceCard({ service, index }) {
  return (
    <motion.div
      key={service.title}
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.2 }}
    >
      <Card className="p-6 h-full">
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <Button variant="link" className="p-0" asChild>
          <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn more →
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
}

export function Services() {
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
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}