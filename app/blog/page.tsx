"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      description:
        "An in-depth look at how AI is transforming industries and the future potential it holds.",
      date: "October 24, 2024",
      link: "/blog/exploring-the-future-of-ai",
    },
    {
      id: 2,
      title: "Top 10 Web Development Trends",
      description:
        "A guide to the latest web development trends that are shaping the industry in 2024.",
      date: "September 15, 2024",
      link: "/blog/top-10-web-development-trends",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      description:
        "Tips and tricks for creating beautiful, responsive designs with Tailwind CSS.",
      date: "August 10, 2024",
      link: "/blog/mastering-tailwind-css",
    },
    {
      id: 4,
      title: "The Rise of Serverless Architecture",
      description:
        "An exploration of serverless architecture and its impact on modern web development.",
      date: "July 22, 2024",
      link: "/blog/the-rise-of-serverless-architecture",
    },
    {
      id: 5,
      title: "Understanding TypeScript",
      description:
        "A beginner's guide to TypeScript and how it can enhance JavaScript projects.",
      date: "June 15, 2024",
      link: "/blog/understanding-typescript-for-js-developers",
    },
  ];

  return (
    <div className="safe-layout px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h2 className="mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text">
          Blog
        </h2>
        <p className="font-medium text-xl lg:text-2xl text-accent max-w-[960px] mx-auto">
          Discover articles on the latest in technology, web development, and
          more.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link href={blog.link} key={blog.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-800">{blog.title}</h3>
              <p className="mt-2 text-gray-600">{blog.description}</p>
              <p className="mt-4 text-sm text-gray-500">{blog.date}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
