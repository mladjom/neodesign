"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { AnalyticsLink } from "@/components/core/AnalyticsLink";

export function CTASection() {
  return (
    <SectionWrapper background="primary">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life with cutting-edge technology and design.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <AnalyticsLink 
            href="/contact"
            category="cta"
            action="click"
            label="homepage_cta"
          >
            Get in Touch
          </AnalyticsLink>
        </Button>
      </div>
    </SectionWrapper>
  );
}