"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/useNavigation";
import { Logo } from '@/components/common/Logo';

const FooterLinkGroup = ({ title, links }: { title: string; links: { title: string; href: string }[] }) => (
  <div className="space-y-4">
    <h3 className="font-semibold">{title}</h3>
    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  </div>
);

const Copyright = ({ className }: { className?: string }) => (
  <p className={cn("text-sm text-muted-foreground", className)}>
    © {new Date().getFullYear()} NeoDesign. All rights reserved.
  </p>
);

// Footer variants
export function SimpleFooter() {
  const { companyLinks } = useNavigation();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.title}
              </Link>
            ))}
          </nav>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export function ExtendedFooter() {
const { services, companyLinks, legalLinks } = useNavigation();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">
              Creating exceptional digital experiences through innovative design and development solutions.
            </p>
          </div>
          
          <FooterLinkGroup title="Services" links={services} />
          <FooterLinkGroup title="Company" links={companyLinks} />

          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <p className="text-sm text-muted-foreground">
              Ready to start your next project? We'd love to hear from you.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <Copyright />
            <nav className="flex gap-6">
            {legalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Default export
export default function Footer() {
  return <ExtendedFooter />;
}