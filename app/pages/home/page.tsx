"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and applications built with modern technologies and best practices.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging digital experiences.",
  },
  {
    title: "Digital Strategy",
    description: "Strategic planning and consulting to achieve your digital transformation goals.",
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with seamless user experience and robust functionality.",
  },
  {
    title: "SaaS Dashboard",
    description: "An intuitive dashboard interface for managing complex business operations.",
  },
];

  const testimonials = [
    {
      quote: "NeoDesign turned our vision into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO, TechTrend Innovations",
    },
    {
      quote: "The team’s expertise in UI/UX design transformed our user engagement. Professional, timely, and creative!",
      name: "Mike Carter",
      role: "Product Manager, SaaSify",
    },
    {
      quote: "Their strategic guidance helped us streamline our digital presence. A true partner in our growth.",
      name: "Emily Davis",
      role: "Founder, BrightPath Solutions",
    },
  ];

export default function Home() {
  return (

    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="container px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 animate-in fade-in duration-1000">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We Create Digital{" "}
              <span className="text-primary">Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Transforming ideas into powerful digital solutions through innovative design and development.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="/projects">View Our Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] animate-in slide-in-from-right duration-1000">
            <img
              src="https://picsum.photos/800/600"
              alt="Hero illustration"
              className="object-cover rounded-lg shadow-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Button variant="link" className="p-0" asChild>
                  <a href="/services">Learn more →</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container px-4 bg-muted/50 py-12">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Featured Work
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[3/2]">
                  <img
                    src={`https://picsum.photos/600/400`}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <Button variant="outline" asChild>
                    <a href="/projects">View Case Study</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="container px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-shadow duration-300 animate-in fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6 space-y-4">
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let’s collaborate to bring your vision to life with cutting-edge technology and design.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </div>
  );
}