export interface Certificate {
  id: string;
  title: string;
  description: string;
  image: string;
  verifyUrl: string;
  platform: string;
  issueDate: string;
  category: "web-development" | "ai-ml" | "cloud" | "other";
}

export const certificates: Certificate[] = [
//   {
//     id: "nextjs-cert",
//     title: "Next.js Developer Certification",
//     description: "Comprehensive certification covering Next.js fundamentals, App Router, and advanced features for building modern web applications.",
//     image: "/certificates/nextjs-cert.png",
//     verifyUrl: "https://vercel.com/certificates/verify",
//     platform: "Vercel",
//     issueDate: "December 2024",
//     category: "web-development"
//   },
//   {
//     id: "react-cert",
//     title: "React.js Advanced Certification",
//     description: "Advanced React concepts including hooks, context, performance optimization, and modern React patterns.",
//     image: "/certificates/react-cert.png",
//     verifyUrl: "https://react.dev/certificates/verify",
//     platform: "React",
//     issueDate: "November 2024",
//     category: "web-development"
//   },
  {
    id: "ai-ml-cert",
    title: "Microsoft Imagine Cup 2025 Semifinalist",
    description: "Lead the product and received a certificate of appreciation for being a semifinalist in the Microsoft Imagine Cup 2025.",
    image: "/certificates/imagin-cup.png",
    verifyUrl: "https://imaginecup.microsoft.com/en-US/Member/WinnerCertificate?userid=rPYsK640ZitNzXP59CF9SQ%253d%253d&compId=gBcKa8lOtQKof4CiRWjRxw%253d%253d&teamId=7G897Xq1tKuWafS%252b5FllEw%253d%253d",
    platform: "Microsoft",
    issueDate: "April 2025",
    category: "ai-ml"
  },
//   {
//     id: "aws-cert",
//     title: "AWS Solutions Architect",
//     description: "AWS cloud infrastructure and architecture certification for designing scalable and reliable applications.",
//     image: "/certificates/aws-cert.png",
//     verifyUrl: "https://aws.amazon.com/verification",
//     platform: "Amazon Web Services",
//     issueDate: "September 2024",
//     category: "cloud"
//   },
//   {
//     id: "typescript-cert",
//     title: "TypeScript Mastery",
//     description: "Advanced TypeScript certification covering type safety, advanced types, and best practices for large-scale applications.",
//     image: "/certificates/typescript-cert.png",
//     verifyUrl: "https://typescript.org/certificates/verify",
//     platform: "Microsoft",
//     issueDate: "August 2024",
//     category: "web-development"
//   },
  {
    id: "genai-cert",
    title: "Agentic AI Hackathon By Microsoft",
    description: "Received the certificate for participating and lead the project in  AI Agents Hackathon by Microsoft Reactor.",
    image: "/certificates/ai-agents.png",
    verifyUrl: "https://www.credly.com/badges/c803e5e1-1a64-4ad2-ae65-316086a06bf7/public_url",
    platform: "Microsoft ",
    issueDate: "June 2025",
    category: "ai-ml"
  },
//   {
//     id: "nodejs-cert",
//     title: "Node.js Backend Development",
//     description: "Complete Node.js certification covering server-side development, APIs, databases, and deployment strategies.",
//     image: "/certificates/nodejs-cert.png",
//     verifyUrl: "https://nodejs.org/certificates/verify",
//     platform: "Node.js Foundation",
//     issueDate: "June 2024",
//     category: "web-development"
//   },
//   {
//     id: "docker-cert",
//     title: "Docker Containerization",
//     description: "Docker certification covering containerization, orchestration, and DevOps best practices.",
//     image: "/certificates/docker-cert.png",
//     verifyUrl: "https://docker.com/certificates/verify",
//     platform: "Docker",
//     issueDate: "May 2024",
//     category: "cloud"
//   },
  {
    id: "python-cert",
    title: "Generative AI Hackathon with IBM",
    description: "Received certificate for delivering the 3rd best solution in Generative AI Hackathon with IBM by Lablab.ai",
    image: "/certificates/ibm.png",
    verifyUrl: "https://lablab.ai/u/@khursheed_ahmed940/cm1g74kvj0040u2dakvip8cmp?_gl=1*5rero9*_up*MQ..*_ga*MjQ0ODIxNTQxLjE3NTIwMjEzNDc.*_ga_0DKXC1L0Y7*czE3NTIwMjEzNDYkbzEkZzAkdDE3NTIwMjEzNDYkajYwJGwwJGgxMTk3OTI3ODAw",
    platform: "IBM",
    issueDate: "October 2024",
    category: "ai-ml"
  },
  {
    id: "gemma-ai",
    title: "Google Gemma 2 AI Challenge",
    description: "Certificate for delivering 2nd best solution in Google Gemma 2 AI Challenge",
    image: "/certificates/ibm.png",
    verifyUrl: "https://lablab.ai/u/@khursheed_ahmed940/cm4mv1xnv000ax1taaq8te9ys?_gl=1*13mngq2*_up*MQ..*_ga*MjQ0ODIxNTQxLjE3NTIwMjEzNDc.*_ga_0DKXC1L0Y7*czE3NTIwMjEzNDYkbzEkZzAkdDE3NTIwMjEzNDYkajYwJGwwJGgxMTk3OTI3ODAw",
    platform: "Google",
    issueDate: "November 2024",
    category: "ai-ml"
  },
  {
    id: "o1",
    title: "Reasoning with GPT Model o1",
    description: "Certificate for delivering solution in Reasoning with o1.",
    image: "/certificates/o1.png",
    verifyUrl: "https://lablab.ai/u/@khursheed_ahmed940/cm4wx1o8a002sfu6i1spxdyhd?_gl=1*hq21lx*_up*MQ..*_ga*MjQ0ODIxNTQxLjE3NTIwMjEzNDc.*_ga_0DKXC1L0Y7*czE3NTIwMjEzNDYkbzEkZzAkdDE3NTIwMjEzNDYkajYwJGwwJGgxMTk3OTI3ODAw",
    platform: "OpenAI",
    issueDate: "November 2024",
    category: "ai-ml"
  }
];

export const categories = [
  { id: "all", name: "All Certificates" },
  { id: "web-development", name: "Web Development" },
  { id: "ai-ml", name: "Generative AI & AI Agents" },
//   { id: "cloud", name: "Cloud & DevOps" },
  { id: "other", name: "Other" }
]; 