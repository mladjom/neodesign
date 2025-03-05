"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactData } from "@/config/contact";

export function ContactInfo() {
    return (
        <SectionWrapper>
            <div className="grid gap-8 md:grid-cols-3">
                {[
                    {
                        icon: <Mail className="h-6 w-6" />,
                        title: "Email",
                        content: ContactData.email,
                        link: `mailto:${ContactData.email}`,
                    },
                    {
                        icon: <Phone className="h-6 w-6" />,
                        title: "Phone",
                        content: ContactData.phone,
                        link: `tel:${ContactData.phone.replace(/\D/g, '')}`,
                    },
                    {
                        icon: <MapPin className="h-6 w-6" />,
                        title: "Office",
                        content: ContactData.address,
                        link: ContactData.mapLink,
                    },
                ].map((item) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 text-center space-y-4">
                            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold">{item.title}</h3>

                            <a href={item.link}
                                className="text-muted-foreground hover:text-primary"
                                target={item.title === 'Office' ? '_blank' : undefined}
                                rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                            >
                                {item.content}
                            </a>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}