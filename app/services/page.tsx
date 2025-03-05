import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { ProcessTimeline } from "@/components/sections/services/ProcessTimeline";
import { TechnologyStack } from "@/components/sections/services/TechnologyStack";
import { CaseStudiesPreview } from "@/components/sections/services/CaseStudiesPreview";
import { PageTransition } from "@/components/animation/PageTransition";
import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "Our Services | Web Development & Design",
  description: "Explore our comprehensive range of web development, UI/UX design, and digital strategy services tailored to your business needs.",
  keywords: ["web development", "UI/UX design", "digital strategy", "custom web solutions"],
});

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
      <ServicesList />
      <ProcessTimeline />
      <TechnologyStack />
      <CaseStudiesPreview />
    </PageTransition>
  );
}