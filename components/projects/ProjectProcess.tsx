import Image from "next/image";
import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

interface ProjectProcessProps {
  steps: ProcessStep[];
}

export function ProjectProcess({ steps }: ProjectProcessProps) {
  return (
    <section className="py-20">
      <div className="container px-4">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center">Our Process</h2>
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="grid gap-12 md:grid-cols-2 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 ? "md:order-2" : ""}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className={index % 2 ? "md:order-1" : ""}>
                  <div className="aspect-video relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}