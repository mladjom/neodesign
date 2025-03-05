"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ServicesData } from "@/config/services";
import { CheckCircle, Code, Palette, LineChart } from "lucide-react";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";

// Helper component to render the correct icon
const IconComponent = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "Code":
      return <Code className="w-6 h-6 text-primary" />;
    case "Palette":
      return <Palette className="w-6 h-6 text-primary" />;
    case "LineChart":
      return <LineChart className="w-6 h-6 text-primary" />;
    default:
      return null;
  }
};

export function ServicesList() {
  return (
    <SectionWrapper>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ServicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full flex flex-col">
              <div className="space-y-4 flex-grow">
                <div className="p-3 bg-primary/10 w-fit rounded-lg">
                  <IconComponent iconName={service.iconName} />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-6 w-full" asChild>
                <AnalyticsLink 
                  href={`/services#${service.id}`}
                  category="services"
                  action="learn_more"
                  label={service.id}
                >
                  Learn More
                </AnalyticsLink>
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}