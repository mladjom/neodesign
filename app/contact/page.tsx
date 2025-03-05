import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactFormSection } from "@/components/sections/contact/ContactForm";
import { PageTransition } from "@/components/animation/PageTransition";
import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "Contact Us | Get in Touch",
  description: "Contact our team to discuss your project needs and learn how we can help bring your vision to life.",
  keywords: ["contact", "get in touch", "web design agency", "hire developers"],
});

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
    </PageTransition>
  );
}