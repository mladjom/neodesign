"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

export function BlogListHero() {
    return (
        <SectionWrapper className="py-12">
            <motion.div
                className="max-w-3xl mx-auto text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Our Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our latest articles, tutorials, and insights on web development,
                        design, and technology.
                    </p>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}