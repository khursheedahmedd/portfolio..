"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/constant/blogs";

export default function Blog() {
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
        {blogPosts.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">{blog.title}</h3>
              <p className="text-gray-600 flex-grow line-clamp-3">{blog.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
