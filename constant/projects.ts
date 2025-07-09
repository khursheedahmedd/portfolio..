export interface ProjectTech {
  name: string;
  imageUrl: string;
  webUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  images?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  techStacks: ProjectTech[];
  caseStudy?: string;
  features?: string[];
  category: string;
  type: string;
}

export const projects: Project[] = [
  {
    slug: "my-vision",
    title: "myVision",
    summary: "An AI-powered app for visually impaired users, utilizing IBM YOLO for object detection and voice-based interaction.",
    description: `myVision is an innovative application designed to empower visually impaired users. Leveraging IBM YOLO for real-time object detection and advanced voice-based interaction, myVision provides users with the ability to navigate their environment more independently and safely. The app integrates cutting-edge AI models, intuitive UI, and robust accessibility features to deliver a seamless experience.`,
    image: "/myLatestProject/projects/myVision.webp",
    images: [
      "/myLatestProject/projects/myVision.webp"
    ],
    repositoryUrl: "https://github.com/khursheedahmedd/vision-guide",
    demoUrl: "https://ibm-vision-guide.vercel.app/",
    techStacks: [
      {
        name: "Next JS",
        imageUrl: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    caseStudy: `
### Problem
Visually impaired individuals face significant challenges in navigating their environment safely and independently. Traditional aids are often limited in functionality and accessibility.

### Solution
myVision leverages AI-powered object detection and voice interaction to provide real-time feedback and guidance. The app is designed with accessibility in mind, ensuring ease of use for all users.

### Results
- Improved independence for visually impaired users
- Real-time object detection and feedback
- Seamless voice-based interaction
- Positive user feedback and adoption
`,
    features: [
      "Real-time object detection",
      "Voice-based interaction",
      "Accessible UI/UX",
      "Integration with IBM YOLO",
      "Cross-platform support"
    ],
    category: "app",
    type: "case-study"
  },
  {
    slug: "lux-ride-sydney",
    title: "Lux Ride Sydney",
    summary: "A luxury ride-sharing platform in Australia, providing premium transportation services.",
    description: `Lux Ride Sydney is a premium ride-sharing platform designed for the Australian market. The platform offers luxury transportation services with a focus on safety, reliability, and customer experience. The app features real-time booking, driver tracking, secure payments, and a user-friendly interface.`,
    image: "/myLatestProject/projects/luxRide.webp",
    images: [
      "/myLatestProject/projects/luxRide.webp"
    ],
    repositoryUrl: "https://github.com/khursheedahmedd",
    demoUrl: "https://luxridesydney.com/",
    techStacks: [
      {
        name: "Next JS",
        imageUrl: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    caseStudy: `
### Problem
Urban commuters in Australia require reliable, safe, and luxurious transportation options. Existing ride-sharing platforms often lack premium features and customer service.

### Solution
Lux Ride Sydney offers a luxury ride-sharing experience with professional drivers, high-end vehicles, and advanced safety features. The platform integrates real-time tracking, secure payments, and a seamless booking process.

### Results
- Increased customer satisfaction and loyalty
- High ratings for safety and reliability
- Growing user base in Sydney
`,
    features: [
      "Luxury vehicle fleet",
      "Real-time booking and tracking",
      "Secure payment integration",
      "User-friendly mobile app",
      "Professional drivers"
    ],
    category: "app",
    type: "case-study"
  },
  // ... Add more projects as needed
];

export const getProject = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter(project => project.slug !== currentSlug && project.category === category)
    .slice(0, 3);
}; 