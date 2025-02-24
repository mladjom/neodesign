import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface CaseStudyPreviewProps {
  project: Project;
}

export function CaseStudyPreview({ project }: CaseStudyPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <div className="flex gap-x-6 text-muted-foreground">
            <div>
              <p className="font-medium">Client</p>
              <p>{project.client}</p>
            </div>
            <div>
              <p className="font-medium">Timeline</p>
              <p>{project.timeline}</p>
            </div>
            <div>
              <p className="font-medium">Role</p>
              <p>{project.role}</p>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="space-y-4">
          <h4 className="font-medium">Key Outcomes:</h4>
          <ul className="space-y-2 text-muted-foreground">
            {project.outcomes.map((outcome, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild>
          <Link href={`/projects/${project.slug}`}>View Full Case Study</Link>
        </Button>
      </Card>
    </motion.div>
  );
}