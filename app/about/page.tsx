import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { PageTransition } from "@/components/animation/PageTransition";
import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "About Us | Our Team & Values",
  description: "Learn about NeoDesign's team of passionate designers and developers dedicated to creating exceptional digital experiences.",
  keywords: ["about us", "design team", "development agency", "our values", "web design team"],
});

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </PageTransition>
  );
}