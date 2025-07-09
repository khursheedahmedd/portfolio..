"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoArrowBack, IoTime, IoPerson } from "react-icons/io5";
import { getBlogPost, getRelatedPosts } from "@/constant/blogs";
import { BlogPost } from "@/constant/blogs";
import styles from "../../home.module.css";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (params.id) {
      const post = getBlogPost(params.id as string);
      if (post) {
        setBlogPost(post);
        const related = getRelatedPosts(post.id, post.category);
        setRelatedPosts(related);
      } else {
        // Redirect to blog page if post not found
        router.push("/blog");
      }
    }
  }, [params.id, router]);

  if (!blogPost) {
    return (
      <div className="safe-layout px-4 py-8 md:py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  // Convert markdown content to HTML (simple conversion)
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
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-200"
        >
          <IoArrowBack className="text-lg" />
          Back to Blog
        </Link>
      </motion.div>

      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat gradient-text mb-6">
          {blogPost.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-6 max-w-4xl">
          {blogPost.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <IoPerson className="text-lg" />
            <span>{blogPost.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoTime className="text-lg" />
            <span>{blogPost.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>•</span>
            <span>{blogPost.date}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blogPost.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: convertMarkdownToHTML(blogPost.content) 
          }}
        />
      </motion.div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl font-bold text-accent mb-8">Related Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
                >
                  <h3 className="text-xl font-bold text-accent mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Back to Blog Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 gradient-btn rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105"
        >
          <IoArrowBack className="text-lg" />
          Back to All Posts
        </Link>
      </motion.div>
    </div>
  );
} 