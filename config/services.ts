interface ServiceItem {
    id: string;
    title: string;
    iconName: string;
    description: string;
    features: string[];
  }
  
  // Export the services data with string icon names instead of JSX
  export const ServicesData: ServiceItem[] = [
    {
      id: "web-development",
      title: "Web Development",
      iconName: "Code",
      description: "Custom web solutions built with cutting-edge technologies and best practices.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration"
      ]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      iconName: "Palette",
      description: "User-centered design that delivers exceptional experiences.",
      features: [
        "User Research",
        "Interface Design",
        "Prototyping",
        "Usability Testing"
      ]
    },
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      iconName: "LineChart",
      description: "Strategic planning for digital transformation.",
      features: [
        "Market Analysis",
        "Digital Roadmap",
        "Technology Consulting",
        "Growth Strategy"
      ]
    }
  ];
  
export const ProcessData = [
  {
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and challenges to create a solid foundation for your project."
  },
  {
    title: "Strategy",
    description: "Our team develops a comprehensive plan tailored to your needs, outlining the technical approach and timeline."
  },
  {
    title: "Design",
    description: "We create intuitive, engaging designs that align with your brand and deliver exceptional user experiences."
  },
  {
    title: "Development",
    description: "Our developers bring the designs to life using modern technologies and best practices."
  },
  {
    title: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and scenarios."
  },
  {
    title: "Launch",
    description: "We carefully deploy your solution and provide ongoing support to ensure continued success."
  }
];

export const TechStackData = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Go", "REST APIs"]
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"]
  }
];