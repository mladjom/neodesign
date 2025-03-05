"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ValuesData } from "@/config/about";
import { Target, Users, Heart, Globe } from "lucide-react";

// Helper component to render the correct icon
const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "Target":
      return <Target className="h-6 w-6 text-primary" />;
    case "Users":
      return <Users className="h-6 w-6 text-primary" />;
    case "Heart":
      return <Heart className="h-6 w-6 text-primary" />;
    case "Globe":
      return <Globe className="h-6 w-6 text-primary" />;
    default:
      return null;
  }
};

export function AboutValues() {
  return (
    <SectionWrapper background="muted">
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do and shape how we work
            with our clients and each other.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ValuesData.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 w-fit rounded-lg">
                    <IconComponent iconName={value.iconName} />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}