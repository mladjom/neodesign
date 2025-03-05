"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TeamData } from "@/config/about";
import { OptimizedImage } from "@/components/core/OptimizedImage";

export function AboutTeam() {
  return (
    <SectionWrapper>
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented people behind our success
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TeamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-[4/5]">
                  <OptimizedImage
                    src={`/images/team/${member.image || `team-${index + 1}.jpg`}`}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}