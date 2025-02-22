"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">NeoDesign</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crafting innovative digital solutions for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Action */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Ready to start your next project? Let’s talk!
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} NeoDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Simple Footer
export function SimpleFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Neo<span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Design</span></span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2024 NeoDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Extended Footer
export function ExtendedFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Neo<span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Design</span></span>
            </div>
            <p className="text-sm text-muted-foreground">Creating exceptional digital experiences through innovative design and development solutions.</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/services#web-development">Web Development</Link>
              <Link href="/services#design">UI/UX Design</Link>
              <Link href="/services#strategy">Digital Strategy</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">Ready to start your next project? We'd love to hear from you.</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 NeoDesign. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}