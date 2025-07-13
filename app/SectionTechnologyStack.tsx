"use client";

import { assets } from "@/constant/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./home.module.css";

interface Technology {
  name: string;
  image: string;
  experience: string;
  projects?: string[];
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
    projects: ["Cryptonews", "Dreams Marketing", "Eventussol"],
    category: "frontend",
  },
  {
    name: "Node JS",
    image: assets.home.technologyStack.node,
    experience: "Experienced in building backend with Node JS.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "backend",
  },
  {
    name: "MongoDB",
    image: assets.home.technologyStack.mongo,
    experience: "I have good experience working with MongoDB.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "Cryptonews",
    ],
    category: "backend",
  },
  {
    name: "Vercel",
    image: assets.home.technologyStack.vercel,
    experience: "I have good deployment experience with Vercel.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "Cryptonews",
      "myVision",
      "Climate AI",
    ],
    category: "devops",
  },
  {
    name: "Express JS",
    image: assets.home.technologyStack.expressJs,
    experience: "Experienced in building backend with Express JS.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "backend",
  },
  {
    name: "Clerk",
    image: assets.home.technologyStack.clerk,
    experience: "Experienced in building Auth with clerk.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "backend",
  },
  {
    name: "Flask",
    image: assets.home.technologyStack.flask,
    experience: "Experienced in building API's with Flask",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "backend",
  },
  {
    name: "Supabase",
    image: assets.home.technologyStack.supabase,
    experience: "Experienced with Supabase Auth and DB.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "backend",
  },
  {
    name: "Python",
    image: assets.home.technologyStack.python,
    experience:
      "Experienced in building full-stack applications in python with Flask. I have worked on several python libraries.",
    projects: ["myVision"],
    category: "ai-ml",
  },
  {
    name: "Javascript",
    image: assets.home.technologyStack.javascript,
    experience: "Experienced in building full-stack applications with SSR.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
    category: "frontend",
  },
  {
    name: "React JS",
    image: assets.home.technologyStack.reactJs,
    experience:
      "I have good expertise in React JS. Work on so many projects that have frontend made with React JS.",
    projects: ["Lux Ride Sydney", "Dreams Marketing", "Eventussol", "myVision"],
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    image: assets.home.technologyStack.tailwindCss,
    experience: "I have good expertise in building frontend with Tailwind.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "myVision",
      "Climate AI",
    ],
    category: "frontend",
  },
  {
    name: "Typescript",
    image: assets.home.technologyStack.typescript,
    experience: "Experienced in building full-stack applications with SSR.",
    projects: ["Eventussol", "Dreams Marketing", "Cryptonews"],
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
    projects: ["myVision", "LUMA AI", "Climate AI"],
    category: "ai-ml",
  },
  {
    name: "Langgraph",
    image: assets.home.technologyStack.langgraph,
    experience:
      "I have worked on several Agentic AI products integrating Langgraph.",
    projects: ["myVision", "LUMA AI", "Climate AI"],
    category: "ai-ml",
  },
  {
    name: "Groq",
    image: assets.home.technologyStack.groq,
    experience:
      "I have worked on several Agentic AI and GenAI products integrating LLMs from Groq.",
    projects: ["myVision", "LUMA AI", "Climate AI"],
    category: "ai-ml",
  },
  {
    name: "ChromaDB",
    image: assets.home.technologyStack.chroma,
    experience:
      "I have worked on several RAG products that uses ChromaDB for vector store.",
    projects: ["myVision", "LUMA AI", "Climate AI"],
    category: "ai-ml",
  },
  {
    name: "Azure AI studio",
    image: assets.home.technologyStack.azureai,
    experience:
      "I have worked on several integrating AI services from Azure AI studio.",
    projects: ["myVision", "LUMA AI", "Climate AI"],
    category: "ai-ml",
  },
  {
    name: "Docker",
    image: assets.home.technologyStack.docker,
    experience: "I have good deployment experience with docker.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "Cryptonews",
      "myVision",
      "Climate AI",
    ],
    category: "devops",
  },
  {
    name: "Dapr",
    image: assets.home.technologyStack.dapr,
    experience: "I have good experience in buidling distributed runtime environment with dapr.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "Cryptonews",
      "myVision",
      "Climate AI",
    ],
    category: "devops",
  },
  {
    name: "Azure",
    image: assets.home.technologyStack.azure,
    experience: "I have good deployment experience with Azure.",
    projects: [
      "Lux Ride Sydney",
      "Dreams Marketing",
      "Eventussol",
      "Cryptonews",
      "myVision",
      "Climate AI",
    ],
    category: "devops",
  },
];

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

  const filteredTechnologies = selectedCategory === "all"
    ? technologyStack
    : technologyStack.filter(tech => tech.category === selectedCategory);

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
                {selectedTech.projects && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-left">
                      Projects:
                    </h3>
                    <ul className="list-disc list-inside text-left">
                      {selectedTech.projects.map((project, index) => (
                        <li key={index} className="text-sm">
                          {project}
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
