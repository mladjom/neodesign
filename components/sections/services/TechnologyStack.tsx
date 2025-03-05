"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TechStackData } from "@/config/services";
import { CheckCircle } from "lucide-react";

export function TechnologyStack() {
  return (
    <SectionWrapper title="Our Technology Stack">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {TechStackData.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <h3 className="font-semibold mb-4">{stack.category}</h3>
              <div className="space-y-2 text-muted-foreground">
                {stack.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}