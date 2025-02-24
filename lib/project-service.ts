import { unstable_cache } from 'next/cache';
import { ProjectDetail } from "@/types/project";

const projects: ProjectDetail[] = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform Redesign",
    client: "Fashion Retailer",
    timeline: "4 months",
    role: "Full-stack Development",
    thumbnail: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "E-commerce",
    summary: "Complete redesign and development of an e-commerce platform",
    description: "A comprehensive e-commerce solution with advanced features...",
    outcomes: [
      "150% increase in conversion rate",
      "40% reduction in page load time",
      "95% positive user feedback"
    ],
    challenge: "The client's existing platform was outdated, slow, and unable to handle peak traffic periods. Mobile conversion rates were particularly low.",
    solution: "We rebuilt the platform using Next.js for optimal performance and implemented a mobile-first design approach with advanced caching strategies.",
    process: [
      {
        title: "Discovery & Analysis",
        description: "Conducted thorough user research and technical audit to identify pain points and opportunities.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "Design & Prototyping",
        description: "Created high-fidelity prototypes with focus on mobile optimization and user experience.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "Development & Testing",
        description: "Implemented the solution using modern technologies and conducted extensive performance testing.",
        image: "/api/placeholder/600/400"
      }
    ],
    testimonial: {
      quote: "The new platform has transformed our business. We've seen remarkable improvements in sales and customer satisfaction.",
      author: "Sarah Johnson",
      role: "Head of Digital, Fashion Retailer"
    },
    results: [
      {
        metric: "Conversion Rate",
        value: "+150%"
      },
      {
        metric: "Page Load Time",
        value: "-40%"
      },
      {
        metric: "Mobile Sales",
        value: "+200%"
      }
    ]
  }
];

// Cache the project data with a revalidation period
export const getProjectBySlug = unstable_cache(
  async (slug: string): Promise<ProjectDetail> => {
    // Simulate database lookup delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const project = projects.find(p => p.slug === slug);
    if (!project) {
      throw new Error(`Project not found: ${slug}`);
    }
    
    return project;
  },
  ['project'],
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['projects']
  }
);

export const getAllProjects = unstable_cache(
  async (): Promise<ProjectDetail[]> => {
    // Simulate database lookup delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return projects;
  },
  ['projects'],
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['projects']
  }
);