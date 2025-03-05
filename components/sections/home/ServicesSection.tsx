"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { fadeIn } from "@/lib/animations";
import { ServicesData } from "@/config/services";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";
import { Code, Palette, LineChart } from "lucide-react";

// Define the type for service props
interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    iconName: string;
    description: string;
    features: string[];
  };
  index: number;
}

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

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.2 }}
    >
      <Card className="p-6 h-full">
        <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
          <IconComponent iconName={service.iconName} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4">{service.description}</p>
        <Button variant="link" className="p-0" asChild>
          <AnalyticsLink 
            href={`/services#${service.id}`}
            category="services"
            action="learn_more"
            label={service.id}
          >
            Learn more →
          </AnalyticsLink>
        </Button>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <SectionWrapper 
      background="muted" 
      title="Our Services"
      centered
    >
      <div className="grid gap-6 md:grid-cols-3">
        {ServicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}