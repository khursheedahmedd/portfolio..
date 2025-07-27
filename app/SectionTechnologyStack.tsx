"use client";

import { assets } from "@/constant/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./home.module.css";
import { projects as allProjects } from "@/constant/projects";

interface Technology {
  name: string;
  image: string;
  experience: string;
  projects?: { title: string; slug: string }[];
  category: string; // Added category field
}

const techCategories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "devops", name: "DevOps" },
  { id: "ai-ml", name: "AI / ML" },
];

const technologyStack: Technology[] = [
  {
    name: "Next JS",
    image: assets.home.technologyStack.nextJs,
    experience: "Experienced in building full-stack applications with SSR.",
    // projects: [ ... will be dynamically generated ... ],
    category: "frontend",
  },
  {
    name: "Node JS",
    image: assets.home.technologyStack.node,
    experience: "Experienced in building backend with Node JS.",
    category: "backend",
  },
  {
    name: "MongoDB",
    image: assets.home.technologyStack.mongo,
    experience: "I have good experience working with MongoDB.",
    category: "backend",
  },
  {
    name: "Vercel",
    image: assets.home.technologyStack.vercel,
    experience: "I have good deployment experience with Vercel.",
    category: "devops",
  },
  {
    name: "Express JS",
    image: assets.home.technologyStack.expressJs,
    experience: "Experienced in building backend with Express JS.",
    category: "backend",
  },
  {
    name: "Clerk",
    image: assets.home.technologyStack.clerk,
    experience: "Experienced in building Auth with clerk.",
    category: "backend",
  },
  {
    name: "Flask",
    image: assets.home.technologyStack.flask,
    experience: "Experienced in building API's with Flask",
    category: "backend",
  },
  {
    name: "Supabase",
    image: assets.home.technologyStack.supabase,
    experience: "Experienced with Supabase Auth and DB.",
    category: "backend",
  },
  {
    name: "Python",
    image: assets.home.technologyStack.python,
    experience:
      "Experienced in building full-stack applications in python with Flask. I have worked on several python libraries.",
    category: "ai-ml",
  },
  {
    name: "Javascript",
    image: assets.home.technologyStack.javascript,
    experience: "Experienced in building full-stack applications with SSR.",
    category: "frontend",
  },
  {
    name: "React JS",
    image: assets.home.technologyStack.reactJs,
    experience:
      "I have good expertise in React JS. Work on so many projects that have frontend made with React JS.",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    image: assets.home.technologyStack.tailwindCss,
    experience: "I have good expertise in building frontend with Tailwind.",
    category: "frontend",
  },
  {
    name: "Typescript",
    image: assets.home.technologyStack.typescript,
    experience: "Experienced in building full-stack applications with SSR.",
    category: "frontend",
  },
  {
    name: "OpenAI Agents SDK",
    image: assets.home.technologyStack.openaisdk,
    experience:
      "I did Agentic AI Engineer course by PIAIC where I have learned OpenAI Agents SDK.",
    category: "ai-ml",
  },
  {
    name: "Langchain",
    image: assets.home.technologyStack.langchain,
    experience:
      "I have worked on several GenAI products integrating langchain.",
    category: "ai-ml",
  },
  {
    name: "Langgraph",
    image: assets.home.technologyStack.langgraph,
    experience:
      "I have worked on several Agentic AI products integrating Langgraph.",
    category: "ai-ml",
  },
  {
    name: "Groq",
    image: assets.home.technologyStack.groq,
    experience:
      "I have worked on several Agentic AI and GenAI products integrating LLMs from Groq.",
    category: "ai-ml",
  },
  {
    name: "ChromaDB",
    image: assets.home.technologyStack.chroma,
    experience:
      "I have worked on several RAG products that uses ChromaDB for vector store.",
    category: "ai-ml",
  },
  {
    name: "Azure AI studio",
    image: assets.home.technologyStack.azureai,
    experience:
      "I have worked on several integrating AI services from Azure AI studio.",
    category: "ai-ml",
  },
  {
    name: "Docker",
    image: assets.home.technologyStack.docker,
    experience: "I have good deployment experience with docker.",
    category: "devops",
  },
  {
    name: "Dapr",
    image: assets.home.technologyStack.dapr,
    experience: "I have good experience in buidling distributed runtime environment with dapr.",
    category: "devops",
  },
  {
    name: "Azure",
    image: assets.home.technologyStack.azure,
    experience: "I have good deployment experience with Azure.",
    category: "devops",
  },
];

// Dynamically add projects to each technology
const technologyStackWithProjects = technologyStack.map(tech => {
  const relatedProjects = allProjects.filter(project =>
    project.techStacks.some(stack => stack.name.toLowerCase().replace(/\s+/g, "") === tech.name.toLowerCase().replace(/\s+/g, ""))
  );
  return {
    ...tech,
    projects: relatedProjects.map(p => ({ title: p.title, slug: p.slug })),
  };
});

// After technologyStackWithProjects is defined, add the following manual project additions:
const manualProjectAdditions: { [tech: string]: { title: string; slug: string }[] } = {
  "Next JS": [
    { title: "StreamlyAI", slug: "streamlyai" },
  ],
  "Node JS": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "clipSync", slug: "clipsync" },
  ],
  "MongoDB": [
    { title: "AgroAI", slug: "agroai" },
    { title: "StreamlyAI", slug: "streamlyai" },
    { title: "Lux Ride Sydney", slug: "lux-ride-sydney" },
  ],
  "Vercel": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "Vibe Terminal", slug: "vibe-terminal" },
    { title: "clipSync", slug: "clipsync" },
  ],
  "Express JS": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "clipSync", slug: "clipsync" },
    { title: "Lux Ride Sydney", slug: "lux-ride-sydney" },
    { title: "AgroAI", slug: "agroai" },
    { title: "myVision", slug: "my-vision" },
  ],
  "Clerk": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "StreamlyAI", slug: "streamlyai" },
  ],
  "Supabase": [
    { title: "StreamlyAI", slug: "streamlyai" },
  ],
  "Javascript": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "AgroAI", slug: "agroai" },
    { title: "Privify", slug: "privify" },
    { title: "Lux Ride Sydney", slug: "lux-ride-sydney" },
    { title: "myVision", slug: "my-vision" },
  ],
  "React JS": [
    { title: "clipSync", slug: "clipsync" },
    { title: "AgroAI", slug: "agroai" },
    { title: "StreamlyAI", slug: "streamlyai" },
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
    { title: "Vibe Terminal", slug: "vibe-terminal" },
  ],
  "Typescript": [
    { title: "StreamlyAI", slug: "streamlyai" },
    { title: "clipSync", slug: "clipsync" },
    { title: "Vibe Terminal", slug: "vibe-terminal" },
    { title: "Privify", slug: "privify" },
  ],
  "Langchain": [
    { title: "Privify", slug: "privify" },
  ],
  "Groq": [
    { title: "Vibe Terminal", slug: "vibe-terminal" },
    { title: "StreamlyAI", slug: "streamlyai" },
    { title: "Privify", slug: "privify" },
    { title: "AgroAI", slug: "agroai" },
    { title: "myVision", slug: "my-vision" },
  ],
  "ChromaDB": [
    { title: "StreamlyAI", slug: "streamlyai" },
    { title: "AgroAI", slug: "agroai" },
  ],
  "Azure AI studio": [
    { title: "Smart Grade AI", slug: "smart-grade-ai" },
  ],
  "Docker": [
    { title: "Vibe Terminal", slug: "vibe-terminal" },
    { title: "AgroAI", slug: "agroai" },
    { title: "Privify", slug: "privify" },
  ],
};

const technologyStackWithManual = technologyStackWithProjects.map(tech => {
  const additions = manualProjectAdditions[tech.name] || [];
  // Avoid duplicates by slug
  const existingSlugs = new Set((tech.projects || []).map(p => p.slug));
  const mergedProjects = [
    ...(tech.projects || []),
    ...additions.filter(p => !existingSlugs.has(p.slug)),
  ];
  return { ...tech, projects: mergedProjects };
});

export default function SectionTechnologyStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  // Function to open modal with selected tech
  const openModal = (tech: Technology) => {
    setSelectedTech(tech);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedTech(null);
  };

  // Use technologyStackWithManual instead of technologyStackWithProjects in the UI rendering
  const filteredTechnologies = selectedCategory === "all"
    ? technologyStackWithManual
    : technologyStackWithManual.filter(tech => tech.category === selectedCategory);

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Technology Stack
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
        >
          I prioritize security and performance for my clients, always utilizing
          top technologies for every product.
        </motion.p>
      </div>
      {/* Category Tabs */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mt-12 mb-16"
      >
        {techCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? "gradient-bg text-white shadow-lg"
                : "bg-gray text-accent hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      {/* Technology Grid */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center">
          {filteredTechnologies.map((item, index) => (
            <div
              key={index.toString()}
              className="relative h-full"
              onClick={() => openModal(item)}
            >
              <motion.div
                className="relative flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  className="w-auto h-[100px] cursor-pointer"
                  src={item.image}
                  width={0}
                  height={100}
                  alt={item.name}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                  <p className="font-semibold text-center line-clamp-3">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-4/5 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <Image
                src={selectedTech.image}
                alt={selectedTech.name}
                width={50}
                height={50}
                className="mb-4"
              />
              <h1 className="text-lg font-semibold mb-2 gradient-text">
                {selectedTech.name}
              </h1>
              <p className="mb-4 text-center">{selectedTech.experience}</p>
              <div>
                {selectedTech.projects && selectedTech.projects.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      Projects:
                    </h3>
                    <ul className="list-disc list-inside text-left">
                      {selectedTech.projects.map((project, index) => (
                        <li key={index} className="text-sm">
                          <Link href={`/project/${project.slug}`} className="text-primary hover:underline">
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                onClick={closeModal}
                className="mt-6 px-6 py-2 text-white gradient-btn rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
