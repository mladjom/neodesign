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
        image: "https://picsum.photos/600x400"
      },
      {
        title: "Design & Prototyping",
        description: "Created high-fidelity prototypes with focus on mobile optimization and user experience.",
        image: "https://picsum.photos/600x400"
      },
      {
        title: "Development & Testing",
        description: "Implemented the solution using modern technologies and conducted extensive performance testing.",
        image: "https://picsum.photos/600x400"
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
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "Tech Startup",
    timeline: "6 months",
    role: "Frontend Development",
    thumbnail: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "D3.js"],
    category: "SaaS",
    summary: "Built a dynamic, real-time analytics dashboard for a SaaS company.",
    description: "Developed an interactive dashboard with real-time data visualization and custom reports.",
    outcomes: [
      "50% reduction in data processing time",
      "Enhanced user engagement with interactive charts",
      "Increased client retention by 30%"
    ],
    challenge: "The startup needed a scalable and performant dashboard to handle high-frequency data updates without compromising UX.",
    solution: "Implemented Next.js with server-side rendering, optimized data fetching, and integrated D3.js for interactive visualizations.",
    process: [
      {
        title: "Data Modeling & API Design",
        description: "Structured database and API endpoints to ensure efficient data retrieval.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "UI/UX Design & Prototyping",
        description: "Created an intuitive dashboard interface with smooth animations and dark mode support.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "Development & Optimization",
        description: "Implemented efficient state management and real-time updates with WebSockets.",
        image: "/api/placeholder/600/400"
      }
    ],
    testimonial: {
      quote: "Our customers love the new dashboard! The real-time analytics have been a game changer for our business.",
      author: "Mike Roberts",
      role: "CEO, Tech Startup"
    },
    results: [
      {
        metric: "Data Processing Time",
        value: "-50%"
      },
      {
        metric: "User Engagement",
        value: "+40%"
      },
      {
        metric: "Client Retention",
        value: "+30%"
      }
    ]
  },
  {
    slug: "fitness-app",
    title: "AI-Powered Fitness App",
    client: "Health & Wellness Startup",
    timeline: "5 months",
    role: "Full-stack Development",
    thumbnail: "/api/placeholder/600/400",
    technologies: ["React Native", "Node.js", "TensorFlow.js"],
    category: "Health & Fitness",
    summary: "Developed a personalized AI-driven fitness coaching app.",
    description: "An AI-based fitness app that customizes workouts based on user progress and preferences.",
    outcomes: [
      "70% increase in daily active users",
      "90% user satisfaction rating",
      "50% growth in premium subscriptions"
    ],
    challenge: "Users wanted a fitness app that could provide personalized workouts in real-time while tracking progress.",
    solution: "Implemented AI-powered recommendations with TensorFlow.js and real-time progress tracking using Firebase.",
    process: [
      {
        title: "AI Model Training",
        description: "Developed and trained models to analyze user workout data and suggest improvements.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "App Design & Prototyping",
        description: "Designed a sleek and user-friendly mobile interface with dark mode support.",
        image: "/api/placeholder/600/400"
      },
      {
        title: "Development & Launch",
        description: "Built the app using React Native with real-time tracking and push notifications.",
        image: "/api/placeholder/600/400"
      }
    ],
    testimonial: {
      quote: "The AI recommendations are incredible! I feel like I have a personal trainer at all times.",
      author: "Jessica Lee",
      role: "Founder, Health & Wellness Startup"
    },
    results: [
      {
        metric: "Daily Active Users",
        value: "+70%"
      },
      {
        metric: "User Satisfaction",
        value: "90%"
      },
      {
        metric: "Premium Subscription Growth",
        value: "+50%"
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