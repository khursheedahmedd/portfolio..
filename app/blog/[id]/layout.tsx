import { Metadata } from "next";
import { getBlogPost } from "@/constant/blogs";

interface BlogLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const blogPost = getBlogPost(params.id);
  
  if (!blogPost) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: blogPost.title,
    description: blogPost.description,
    keywords: blogPost.tags.join(", "),
    authors: [{ name: blogPost.author }],
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: "article",
      publishedTime: blogPost.date,
      authors: [blogPost.author],
    },
  };
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>;
} 