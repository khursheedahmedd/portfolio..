"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { projects } from "@/constant/projects";
import { useState } from "react";

export default function Project() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Helper to track image error per card
  const [imageErrors, setImageErrors] = useState<{ [slug: string]: boolean }>({});

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <div className="safe-layout px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h2 className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text">
          Projects
        </h2>
        <p className="font-medium text-xl lg:text-2xl text-accent max-w-[960px] mx-auto">
          Explore my latest projects, case studies, and real-world solutions.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" ref={ref}>
        {projects.map((project, idx) => (
          <Link href={`/project/${project.slug}`} key={project.slug}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col"
            >
              <div className="w-full h-48 mb-4 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center" style={{background:'#f3f4f6'}}>
                {!imageErrors[project.slug] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                    onError={() => handleImageError(project.slug)}
                  />
                ) : (
                  <span className="text-gray-800 text-lg font-bold pointer-events-none select-none">
                    {project.title}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-3 line-clamp-2">{project.title}</h3>
              <p className="text-gray-600 flex-grow line-clamp-3">{project.summary}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {/* {project.techStacks.map((tech) => (
                  <span key={tech.name} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    <img src={tech.imageUrl} alt={tech.name} width={18} height={18} className="inline-block" />
                    {tech.name}
                  </span>
                ))} */}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
