"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32">
        <div className="container px-4">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeIn} className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                We Create Digital 
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {" "}Experiences
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming ideas into powerful digital solutions through innovative design and development.
              </p>
              <div className="flex gap-4">
                <Button size="lg">View Our Work</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative aspect-video">
              <img
                src="https://picsum.photos/800/600"
                alt="Hero illustration"
                className="rounded-lg object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
  key={service.title}
  variants={{
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }}
  initial="initial"
  animate="animate"
  transition={{ delay: index * 0.2 }}
>
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="link" className="p-0">Learn more →</Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Featured Work</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-video relative">
                      <img
                        src={`https://picsum.photos/600/400`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="outline">View Case Study</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            className="space-y-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 h-full">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{testimonial.content}</p>
                      <div className="flex items-center gap-4">
                        <img
                          src={`https://picsum.photos/40/40`}
                          alt={testimonial.author}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
{/* Blog Posts Section */}
<section className="py-20">
  <div className="container px-4">
    <motion.div
      className="space-y-12"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center">Latest Insights</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.2 }}
          >
            <Card className="overflow-hidden h-full">
              <div className="aspect-video">
                <img
                  src={`https://picsum.photos/400/250`}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <Button variant="link" className="p-0">Read More →</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <motion.div
            className="text-center"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and design.
            </p>
            <Button size="lg" variant="secondary">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
    content: "Working with NeoDesign transformed our online presence. Their attention to detail and technical expertise is outstanding.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    content: "The team delivered a beautiful, functional website that exceeded our expectations. Highly recommended!",
    author: "Mike Anderson",
    role: "Marketing Director, GrowthCo",
  },
  {
    content: "Professional, creative, and technically proficient. NeoDesign is our go-to partner for all things digital.",
    author: "Lisa Chen",
    role: "Product Manager, InnovateLab",
  },
];

const blogPosts = [
  {
    title: "The Future of Web Development in 2025",
    excerpt: "Explore emerging trends and technologies shaping the future of web development.",
    date: "Feb 18, 2025",
    slug: "future-web-development-2025"
  },
  {
    title: "Designing for Accessibility",
    excerpt: "Best practices for creating inclusive digital experiences that work for everyone.",
    date: "Feb 15, 2025",
    slug: "designing-for-accessibility"
  },
  {
    title: "Performance Optimization Tips",
    excerpt: "Practical strategies to improve your website's loading speed and performance.",
    date: "Feb 12, 2025",
    slug: "performance-optimization-tips"
  }
];