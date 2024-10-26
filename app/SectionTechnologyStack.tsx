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
}

const technologyStack: Technology[] = [
  {
    name: "Next JS",
    image: assets.home.technologyStack.nextJs,
    experience: "Experienced in building full-stack applications with SSR.",
    projects: ["Cryptonews", "Dreams Marketing", "Eventussol"],
  },
  {
    name: "Node JS",
    image: assets.home.technologyStack.node,
    experience: "Experienced in building backend with Node JS.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
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
  },
  {
    name: "Express JS",
    image: assets.home.technologyStack.expressJs,
    experience: "Experienced in building backend with Express JS.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
  },
  {
    name: "Python",
    image: assets.home.technologyStack.python,
    experience:
      "Experienced in building full-stack applications in python with Flask. I have worked on several python libraries.",
    projects: ["myVision"],
  },
  {
    name: "Javascript",
    image: assets.home.technologyStack.javascript,
    experience: "Experienced in building full-stack applications with SSR.",
    projects: ["Lux Ride Sydney", "myVision", "Climate AI"],
  },
  {
    name: "React JS",
    image: assets.home.technologyStack.reactJs,
    experience:
      "I have good expertise in React JS. Work on so many projects that have frontend made with React JS.",
    projects: ["Lux Ride Sydney", "Dreams Marketing", "Eventussol", "myVision"],
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
  },
  // {
  //   name: "React Native",
  //   image: assets.home.technologyStack.reactNative,
  //   experience: "Experienced in building full-stack applications with SSR.",
  //   projects: ["Lux Ride Sydney", "Dreams Marketing"],
  // },
  {
    name: "Typescript",
    image: assets.home.technologyStack.typescript,
    experience: "Experienced in building full-stack applications with SSR.",
    projects: ["Eventussol", "Dreams Marketing", "Cryptonews"],
  },
  // {
  //   name: "LLMs Integration",
  //   image: assets.home.technologyStack.llm,
  //   experience: "Experienced in building full-stack applications with SSR.",
  //   projects: ["Lux Ride Sydney", "Dreams Marketing"],
  // },
  {
    name: "Machine Learning",
    image: assets.home.technologyStack.ml,
    experience:
      "I have work on training and deploying machine learning models.",
    // projects: ["Lux Ride Sydney", "Dreams Marketing"],
  },
  {
    name: "GenAI",
    image: assets.home.technologyStack.genai,
    experience:
      "I have good expertise in integrating Large Language Models(LLMs).",
    projects: ["myVision", "LUMA AI", "Climate AI"],
  },
];

export default function SectionTechnologyStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  // Function to open modal with selected tech
  const openModal = (tech: Technology) => {
    setSelectedTech(tech);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedTech(null);
  };

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
      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center">
          {technologyStack.map((item, index) => (
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
                {/* Hover overlay for tech stack name */}
                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 text-white rounded-xl"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-semibold">{item.name}</p>
                </motion.div> */}
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
