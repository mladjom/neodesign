"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Target, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate designers and developers dedicated to 
              transforming ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4">
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
                  Today, we're proud to have partnered with businesses across the
                  globe, helping them achieve their digital transformation goals
                  and create meaningful connections with their audiences.
                </p>
              </div>
            </div>
            <div className="aspect-square">
              <img
                src="https://picsum.photos/600/600"
                alt="Team collaboration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
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
              {values.map((value, index) => (
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
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4">
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
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <div className="aspect-[4/5]">
                      <img
                        src={`https://picsum.photos/400/500`}
                        alt={member.name}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground">
              Let's work together to bring your vision to life
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Innovation",
    icon: <Target className="h-6 w-6 text-primary" />,
    description:
      "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Collaboration",
    icon: <Users className="h-6 w-6 text-primary" />,
    description:
      "We believe in the power of teamwork and close partnership with our clients."
  },
  {
    title: "Excellence",
    icon: <Heart className="h-6 w-6 text-primary" />,
    description:
      "We strive for excellence in every project, paying attention to every detail."
  },
  {
    title: "Impact",
    icon: <Globe className="h-6 w-6 text-primary" />,
    description:
      "We create solutions that make a real difference for businesses and users."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "With over 10 years of experience in design, Sarah leads our creative team in crafting beautiful and functional experiences."
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    bio: "Michael brings expertise in cutting-edge web technologies and ensures our solutions are scalable and performant."
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    bio: "Emma's passion for user-centered design helps create intuitive and engaging interfaces that users love."
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    bio: "David specializes in creating responsive and accessible web applications with modern frameworks."
  },
  {
    name: "Lisa Patel",
    role: "Project Manager",
    bio: "Lisa ensures smooth project delivery through effective communication and strategic planning."
  },
  {
    name: "James Wilson",
    role: "Backend Developer",
    bio: "James architects robust backend solutions that power our complex web applications."
  }
];