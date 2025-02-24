import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectOverviewProps {
  client: string;
  timeline: string;
  role: string;
  technologies: string[];
  thumbnail: string;
  title: string;
}

export function ProjectOverview({ client, timeline, role, technologies, thumbnail, title }: ProjectOverviewProps) {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium">Client</h3>
                  <p className="text-muted-foreground">{client}</p>
                </div>
                <div>
                  <h3 className="font-medium">Timeline</h3>
                  <p className="text-muted-foreground">{timeline}</p>
                </div>
                <div>
                  <h3 className="font-medium">Role</h3>
                  <p className="text-muted-foreground">{role}</p>
                </div>
                <div>
                  <h3 className="font-medium">Deliverables</h3>
                  <p className="text-muted-foreground">{technologies.join(", ")}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video relative"
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
