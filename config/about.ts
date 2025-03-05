interface ValueItem {
    title: string;
    iconName: string;
    description: string;
  }
  
  // Export the values data with string icon names instead of JSX
  export const ValuesData: ValueItem[] = [
    {
      title: "Innovation",
      iconName: "Target",
      description:
        "We push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      title: "Collaboration",
      iconName: "Users",
      description:
        "We believe in the power of teamwork and close partnership with our clients."
    },
    {
      title: "Excellence",
      iconName: "Heart",
      description:
        "We strive for excellence in every project, paying attention to every detail."
    },
    {
      title: "Impact",
      iconName: "Globe",
      description:
        "We create solutions that make a real difference for businesses and users."
    }
  ];

export const TeamData = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "sarah-johnson.jpg",
    bio: "With over 10 years of experience in design, Sarah leads our creative team in crafting beautiful and functional experiences."
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "michael-chen.jpg",
    bio: "Michael brings expertise in cutting-edge web technologies and ensures our solutions are scalable and performant."
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    image: "emma-rodriguez.jpg",
    bio: "Emma's passion for user-centered design helps create intuitive and engaging interfaces that users love."
  },
  {
    name: "David Kim",
    role: "Frontend Developer",
    image: "david-kim.jpg",
    bio: "David specializes in creating responsive and accessible web applications with modern frameworks."
  },
  {
    name: "Lisa Patel",
    role: "Project Manager",
    image: "lisa-patel.jpg",
    bio: "Lisa ensures smooth project delivery through effective communication and strategic planning."
  },
  {
    name: "James Wilson",
    role: "Backend Developer",
    image: "james-wilson.jpg",
    bio: "James architects robust backend solutions that power our complex web applications."
  }
];