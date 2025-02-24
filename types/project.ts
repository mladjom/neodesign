export interface Project {
  slug: string;
  title: string;
  client: string;
  timeline: string;
  role: string;
  thumbnail: string;
  technologies: string[];
  category: string;
  summary: string;
  description: string;
  outcomes: string[];
}

export interface ProjectDetail extends Project {
  challenge: string;
  solution: string;
  process: {
    title: string;
    description: string;
    image: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  results: {
    metric: string;
    value: string;
  }[];
}