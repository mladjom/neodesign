"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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
                      {service.icon}
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
                  <Button className="mt-6 w-full">Learn More</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Our Process</h2>
            <div className="max-w-3xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative pl-8 pb-12 border-l border-primary/20 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Our Technology Stack</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {techStacks.map((stack, index) => (
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
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Case Studies</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={`https://picsum.photos/600/400`}
                        alt={study.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {study.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                      <p className="text-muted-foreground">{study.description}</p>
                      <Button variant="outline">View Case Study</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    icon: <div className="w-6 h-6 bg-primary" />, // Replace with actual icon
    description: "Custom web solutions built with cutting-edge technologies",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration"
    ]
  },
  {
    title: "UI/UX Design",
    icon: <div className="w-6 h-6 bg-primary" />, // Replace with actual icon
    description: "User-centered design that delivers exceptional experiences",
    features: [
      "User Research",
      "Interface Design",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    title: "Digital Strategy",
    icon: <div className="w-6 h-6 bg-primary" />, // Replace with actual icon
    description: "Strategic planning for digital transformation",
    features: [
      "Market Analysis",
      "Digital Roadmap",
      "Technology Consulting",
      "Growth Strategy"
    ]
  }
];

const process = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges to create a solid foundation for your project."
  },
  {
    title: "Strategy",
    description: "Our team develops a comprehensive plan tailored to your needs, outlining the technical approach and timeline."
  },
  {
    title: "Design",
    description: "We create intuitive, engaging designs that align with your brand and deliver exceptional user experiences."
  },
  {
    title: "Development",
    description: "Our developers bring the designs to life using modern technologies and best practices."
  },
  {
    title: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and scenarios."
  },
  {
    title: "Launch",
    description: "We carefully deploy your solution and provide ongoing support to ensure continued success."
  }
];

const techStacks = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Go", "REST APIs"]
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  }
];

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description: "Complete redesign and development of an e-commerce platform, resulting in 150% increase in conversions."
  },
  {
    title: "SaaS Dashboard Development",
    category: "UI/UX Design",
    description: "Created an intuitive dashboard interface that improved user engagement by 80%."
  }
];