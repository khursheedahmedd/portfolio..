"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getProject, getRelatedProjects, Project } from "@/constant/projects";
import { IoArrowBack, IoOpen, IoLogoGithub } from "react-icons/io5";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (params.slug) {
      const proj = getProject(params.slug as string);
      if (proj) {
        setProject(proj);
        setRelatedProjects(getRelatedProjects(proj.slug, proj.category));
      } else {
        router.push("/project");
      }
    }
  }, [params.slug, router]);

  if (!project) {
    return (
      <div className="safe-layout px-4 py-8 md:py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading project...</p>
      </div>
    );
  }

  // Convert markdown to HTML for case study
  const convertMarkdownToHTML = (markdown: string) => {
    return markdown
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-accent mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-accent mt-8 mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-accent mt-8 mb-6">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-1">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^<p/, '<p class="mb-4 text-gray-700 leading-relaxed"')
      .replace(/```(.*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>');
  };

  return (
    <div className="safe-layout px-4 py-8 md:py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-lg" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat gradient-text mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6 max-w-4xl">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {project.techStacks.map((tech) => (
            <a
              key={tech.name}
              href={tech.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <img src={tech.imageUrl} alt={tech.name} width={20} height={20} />
              {tech.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-btn rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <IoOpen className="text-lg" />
              Live Demo
            </a>
          )}
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              <IoLogoGithub className="text-lg" />
              Repository
            </a>
          )}
        </div>
        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            {project.images.map((img, idx) => (
              <div key={idx} className="relative w-full max-w-xl h-64 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image src={img} alt={project.title + " screenshot " + (idx + 1)} fill className="object-contain" />
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-bold text-accent mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-accent mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {project.caseStudy && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-accent mb-2">Case Study</h3>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(project.caseStudy) }}
            />
          </div>
        )}
      </motion.div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl font-bold text-accent mb-8">Related Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((proj) => (
              <Link href={`/project/${proj.slug}`} key={proj.slug}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
                >
                  <div className="w-full h-32 mb-4 relative rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={200}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2 line-clamp-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 flex-grow line-clamp-3">
                    {proj.summary}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                    {proj.techStacks.map((tech) => (
                      <span key={tech.name} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        <img src={tech.imageUrl} alt={tech.name} width={16} height={16} className="inline-block" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 