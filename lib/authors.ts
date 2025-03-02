import { Author } from "@/types/blog";

export const authors: Record<string, Author> = {
  "alex-morgan": {
    name: "Alex Morgan",
    avatar: "/images/authors/alex-morgan.jpeg",
    title: "Senior Developer",
    bio: "Alex specializes in frontend development with a focus on React and Next.js. With over 8 years of experience building web applications, Alex loves sharing practical insights about modern development techniques.",
    twitter: "alexmorg",
    github: "alexmorg",
    linkedin: "alex-morgan",
  },
  "taylor-chen": {
    name: "Taylor Chen",
    avatar: "/images/authors/taylor-chen.jpg",
    title: "UX Designer",
    bio: "Taylor brings a user-centered approach to design with experience in research and interaction design. Their work focuses on creating accessible and inclusive digital experiences.",
    twitter: "taylorchen",
    github: "taylorchen",
    linkedin: "taylor-chen",
  },
  "jordan-patel": {
    name: "Jordan Patel",
    avatar: "/images/authors/jordan-patel.jpg",
    title: "DevOps Engineer",
    bio: "Jordan focuses on infrastructure automation and deployment pipelines. With expertise in Kubernetes, Docker, and cloud platforms, Jordan helps teams build resilient and scalable systems.",
    twitter: "jordanpatel",
    github: "jordanpatel",
  },
  "editorial-team": {
    name: "Editorial Team",
    avatar: "/images/authors/editorial-team.jpg",
    title: "Content Team",
    bio: "Our editorial team creates in-depth content on a variety of technical topics, ensuring accuracy and clarity in everything we publish.",
    twitter: "ourcompany",
  },
};

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}

export function getAuthorBySlugWithFallback(slug: string): Author {
  return authors[slug] || authors["editorial-team"]; // Always return an author, fallback to editorial team
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
}

export default authors;
