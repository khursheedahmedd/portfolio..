export interface ProjectTech {
  name: string;
  imageUrl: string;
  webUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  images?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  techStacks: ProjectTech[];
  caseStudy?: string;
  features?: string[];
  category: string;
  type: string;
  demoVideoUrl?: string; // Optional field for demo video
}

export const projects: Project[] = [
  {
    slug: "vibe-terminal",
    title: "Vibe Terminal",
    summary: "AI-powered, cross-platform terminal assistant for natural language command execution, voice input, and contextual shell automation.",
    description: `Vibe Terminal is an intelligent, cross-platform terminal assistant that leverages AI agents for natural language command execution, voice input, and contextual shell automation. It integrates LangGraph for multi-step agent workflows and conversational context, enabling features like file management, undo/redo, and directory-aware responses. Voice interaction is designed using SpeechRecognition, PyAudio, and TTS (pyttsx3), with a CLI built on Typer and Rich for enhanced UX. The assistant supports secure API usage and cross-OS compatibility, delivering a modern GenAI-powered DevOps experience. Vibe Terminal empowers developers to interact with their system intuitively through natural language, reducing cognitive load and boosting productivity.`,
    image: "/myLatestProject/projects/vibe-terminal.png",
    images: ["/myLatestProject/projects/vibe-terminal.png"],
    repositoryUrl: "",
    demoUrl: "",
    demoVideoUrl: "",
    techStacks: [
      { name: "LangGraph", imageUrl: "/technologyStack/langgraph.png", webUrl: "https://langchain-ai.github.io/langgraph/" },
      { name: "Python", imageUrl: "/technologyStack/python.webp", webUrl: "https://python.org/" },
      { name: "RAG", imageUrl: "/technologyStack/ChromaDB.png", webUrl: "https://www.trychroma.com/" },
      { name: "ChromaDB", imageUrl: "/technologyStack/ChromaDB.png", webUrl: "https://www.trychroma.com/" },
      { name: "Novita AI", imageUrl: "https://novita.ai/favicon.ico", webUrl: "https://novita.ai/" },
      { name: "Flask", imageUrl: "/technologyStack/flask.webp", webUrl: "https://flask.palletsprojects.com/" },
      { name: "SpeechRecognition", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://pypi.org/project/SpeechRecognition/" },
      { name: "PyAudio", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://people.csail.mit.edu/hubert/pyaudio/" },
      { name: "pyttsx3", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://pypi.org/project/pyttsx3/" },
      { name: "Typer", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://typer.tiangolo.com/" },
      { name: "Rich", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://rich.readthedocs.io/" },
    ],
    features: [
      "Natural language command execution",
      "Voice input and TTS feedback",
      "Contextual shell automation",
      "Multi-step agent workflows (LangGraph)",
      "File management, undo/redo, directory-aware responses",
      "Secure API usage",
      "Cross-OS compatibility",
      "Modern CLI UX (Typer, Rich)"
    ],
    caseStudy: `
### Problem
Traditional terminal interfaces require memorization of commands and syntax, leading to cognitive overload and inefficiency, especially for complex workflows and automation.

### Solution
Vibe Terminal introduces an AI-powered, conversational interface for the terminal. By leveraging LangGraph for agentic workflows and integrating voice input/output, it allows users to interact with their system using natural language. Features like file management, undo/redo, and contextual responses make shell automation intuitive and accessible.

### Research & Techniques
- **LangGraph:** Orchestrates multi-step agent workflows for complex tasks.
- **RAG & ChromaDB:** Enables retrieval-augmented command execution and contextual awareness.
- **Voice Interaction:** Uses SpeechRecognition, PyAudio, and pyttsx3 for seamless voice input/output.
- **Modern CLI:** Built with Typer and Rich for enhanced user experience.
- **Security:** Ensures safe API usage and cross-platform compatibility.

### Results
- Reduced cognitive load for developers.
- Increased productivity and task automation.
- Positive feedback from DevOps and developer communities.
`,
    category: "app",
    type: "case-study"
  },
  {
    slug: "smart-grade-ai",
    title: "Smart Grade AI",
    summary: "AI-powered automated exam-checking platform for teachers and students.",
    description: `Smart Grade AI is an AI-powered automated exam-checking platform that streamlines the grading process for teachers. It allows teachers to upload an answer key and generate a unique link for students to submit their scanned or photographed exam papers. The system uses OCR and LLM-based evaluation to analyze answers, assign marks, and generate structured feedback and grading reports in PDF format for both teachers and students.`,
    image: "/myLatestProject/projects/smartgradeai.png",
    images: ["/myLatestProject/projects/smartgradeai.png"],
    repositoryUrl: "",
    demoUrl: "",
    demoVideoUrl: "https://www.youtube.com/embed/EKq1kjySOto?si=8CEJ9kfZZDSgkjXb", // Sample YouTube embed URL
    techStacks: [
      { name: "React.js", imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png", webUrl: "https://reactjs.org/" },
      { name: "Tailwind CSS", imageUrl: "https://img.icons8.com/?size=512&id=13679&format=png", webUrl: "https://tailwindcss.com/" },
      { name: "Node.js", imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png", webUrl: "https://nodejs.org/" },
      { name: "Express", imageUrl: "https://img.icons8.com/?size=512&id=7gdY5qNXaKC0&format=png", webUrl: "https://expressjs.com/" },
      { name: "Python", imageUrl: "https://img.icons8.com/?size=512&id=13441&format=png", webUrl: "https://python.org/" },
      { name: "Flask", imageUrl: "https://img.icons8.com/?size=512&id=13442&format=png", webUrl: "https://flask.palletsprojects.com/" },
      { name: "Azure OpenAI", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/en-us/products/ai-services/openai-service/" },
      { name: "Mistral OCR", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://mistral.ai/" },
      { name: "Langgraph", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://langchain-ai.github.io/langgraph/" },
      { name: "MongoDB", imageUrl: "https://img.icons8.com/?size=512&id=74402&format=png", webUrl: "https://mongodb.com/" },
      { name: "ChromaDB", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://www.trychroma.com/" },
      { name: "Docker", imageUrl: "https://img.icons8.com/?size=512&id=22813&format=png", webUrl: "https://www.docker.com/" },
      { name: "Azure", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/" },
    ],
    features: [
      "Automated grading with OCR and LLMs",
      "Teacher and student portals",
      "PDF feedback and grading reports",
      "Secure exam uploads",
      "Agentic AI implementation",
      "Azure deployment"
    ],
    caseStudy: `
### Problem
Manual grading of exams is time-consuming, error-prone, and often lacks detailed feedback for students. Teachers face challenges in managing large volumes of exam papers and providing individualized feedback.

### Solution
Smart Grade AI automates the grading process using OCR for answer extraction and LLMs for semantic answer evaluation. Teachers upload an answer key and receive a unique link for students to submit their scanned papers. The system processes submissions, assigns marks, and generates detailed feedback and grading reports in PDF format.

### Research & Techniques
- **OCR (Optical Character Recognition):** Used Mistral OCR for high-accuracy text extraction from scanned images.
- **LLM-based Evaluation:** Leveraged Azure OpenAI models to semantically compare student answers with the answer key, supporting partial credit and nuanced grading.
- **Agentic Implementation:** Used Langgraph for orchestrating multi-step grading and feedback workflows.
- **Security & Privacy:** All uploads are securely handled, and grading is performed in a privacy-preserving manner.

### Results
- Reduced grading time by over 80% in pilot studies.
- Improved feedback quality and student satisfaction.
- Scalable to thousands of submissions per session.
`,
    category: "app",
    type: "case-study"
  },
  {
    slug: "streamlyai",
    title: "StreamlyAI",
    summary: "NLP application for analyzing, summarizing, and interacting with video and podcast transcripts in real time.",
    description: `StreamlyAI is a research-oriented NLP application designed for analyzing, summarizing video, creating reels and shorts from video, chatbot for asking questions about the video and podcast transcripts in real time. It extracts topics, performs sentiment analysis, and generates meaningful summaries for content creators and consumers. Built for an NLP course project to demonstrate real-world application of transformer-based models, RAG and LLM APIs.`,
    image: "/myLatestProject/projects/streamlyai.png",
    images: ["/myLatestProject/projects/streamlyai.png"],
    repositoryUrl: "",
    demoUrl: "",
    techStacks: [
      { name: "React.js", imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png", webUrl: "https://reactjs.org/" },
      { name: "Tailwind CSS", imageUrl: "https://img.icons8.com/?size=512&id=13679&format=png", webUrl: "https://tailwindcss.com/" },
      { name: "shadcn/ui", imageUrl: "https://ui.shadcn.com/favicon.ico", webUrl: "https://ui.shadcn.com/" },
      { name: "Python", imageUrl: "https://img.icons8.com/?size=512&id=13441&format=png", webUrl: "https://python.org/" },
      { name: "Flask", imageUrl: "https://img.icons8.com/?size=512&id=13442&format=png", webUrl: "https://flask.palletsprojects.com/" },
      { name: "HuggingFace Transformers", imageUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", webUrl: "https://huggingface.co/transformers/" },
      { name: "Cohere", imageUrl: "https://cohere.com/favicon.ico", webUrl: "https://cohere.com/" },
      { name: "AssemblyAI", imageUrl: "https://www.assemblyai.com/favicon.ico", webUrl: "https://www.assemblyai.com/" },
      { name: "Whisper AI", imageUrl: "https://openai.com/favicon.ico", webUrl: "https://openai.com/research/whisper" },
      { name: "LangChain", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://www.langchain.com/" },
      { name: "RAG", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://www.trychroma.com/" },
      { name: "pytube", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://pytube.io/" },
      { name: "Vercel", imageUrl: "https://vercel.com/favicon.ico", webUrl: "https://vercel.com/" },
      { name: "Azure", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/" },
    ],
    features: [
      "Real-time transcript analysis",
      "Video summarization and topic extraction",
      "Sentiment analysis",
      "Chatbot for video Q&A",
      "Reel and short creation",
      "Speech-to-text with Whisper/AssemblyAI",
      "Vercel and Azure deployment"
    ],
    caseStudy: `
### Problem
Content creators and researchers need efficient tools to analyze, summarize, and interact with long-form video and podcast content. Manual review is slow and often misses key insights.

### Solution
StreamlyAI automates transcript generation, topic extraction, and summarization using state-of-the-art NLP models. It also provides a chatbot interface for real-time Q&A about the content and tools for generating short-form video highlights.

### Research & Techniques
- **Speech-to-Text:** Used Whisper and AssemblyAI for accurate, real-time transcription.
- **Transformer Models:** Leveraged HuggingFace Transformers and Cohere embeddings for topic modeling, sentiment analysis, and summarization.
- **RAG (Retrieval-Augmented Generation):** Combined transcript retrieval with LLMs for context-aware Q&A.
- **Video Processing:** Used pytube for video downloads and custom scripts for highlight generation.

### Results
- Enabled content creators to generate summaries and highlights 10x faster.
- Improved accessibility for podcast and video content.
- Demonstrated real-world application of advanced NLP and RAG techniques in academic settings.
`,
    category: "app",
    type: "case-study"
  },
  {
    slug: "privify",
    title: "Privify",
    summary: "Privacy-focused AI tool for detecting and removing sensitive content from images and videos.",
    description: `Privify is a privacy-focused AI tool that detects and removes sensitive content from images and videos before they are shared online. It reads metadata, performs entity and content analysis using LLMs, and blurs/redacts private data like faces, license plates, IDs, documents, or geo-coordinates to ensure safe sharing.`,
    image: "/myLatestProject/projects/privify.png",
    images: ["/myLatestProject/projects/privify.png"],
    repositoryUrl: "",
    demoUrl: "",
    demoVideoUrl: "https://www.youtube.com/embed/i00dVSakz8w?si=VHHouOvk1OqlmwuC",
    techStacks: [
      { name: "React.js", imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png", webUrl: "https://reactjs.org/" },
      { name: "Tailwind CSS", imageUrl: "https://img.icons8.com/?size=512&id=13679&format=png", webUrl: "https://tailwindcss.com/" },
      { name: "Python", imageUrl: "https://img.icons8.com/?size=512&id=13441&format=png", webUrl: "https://python.org/" },
      { name: "Flask", imageUrl: "https://img.icons8.com/?size=512&id=13442&format=png", webUrl: "https://flask.palletsprojects.com/" },
      { name: "Llama 3.1 (Groq)", imageUrl: "https://groq.com/favicon.ico", webUrl: "https://groq.com/" },
      { name: "YOLOv8", imageUrl: "https://ultralytics.com/favicon.ico", webUrl: "https://ultralytics.com/" },
      { name: "OpenCV", imageUrl: "https://opencv.org/wp-content/uploads/2020/07/cropped-OpenCV_logo_white_600x.png", webUrl: "https://opencv.org/" },
      { name: "Mediapipe", imageUrl: "https://mediapipe.dev/favicon.ico", webUrl: "https://mediapipe.dev/" },
      { name: "ExifTool", imageUrl: "https://exiftool.org/favicon.ico", webUrl: "https://exiftool.org/" },
      { name: "ffmpeg", imageUrl: "https://ffmpeg.org/favicon.ico", webUrl: "https://ffmpeg.org/" },
      { name: "Vercel", imageUrl: "https://vercel.com/favicon.ico", webUrl: "https://vercel.com/" },
      { name: "Azure", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/" },
    ],
    features: [
      "Sensitive content detection (faces, plates, IDs, etc.)",
      "Metadata and intent analysis with LLMs",
      "Blurring/redaction of private data",
      "No storage for privacy",
      "Video/image processing with ffmpeg and OpenCV",
      "Azure and Vercel deployment"
    ],
    caseStudy: `
### Problem
Sharing images and videos online can inadvertently expose sensitive information, leading to privacy breaches and misuse of personal data.

### Solution
Privify automatically detects and redacts sensitive content from media files before sharing. It uses a combination of computer vision models and LLMs to analyze both visual and metadata content, ensuring privacy by design.

### Research & Techniques
- **Object Detection:** Used YOLOv8, OpenCV, and Mediapipe for detecting faces, license plates, and other sensitive entities.
- **Metadata Analysis:** Leveraged ExifTool and custom parsers to identify and redact geo-coordinates and document info.
- **LLM-based Intent Analysis:** Used Llama 3.1 (Groq) for understanding context and intent in media sharing.
- **Privacy by Design:** No user data is stored; all processing is ephemeral and secure.

### Results
- Prevented accidental sharing of private data in pilot tests.
- Adopted by privacy-conscious users and organizations.
- Recognized as a research demo in privacy-preserving AI.
`,
    category: "app",
    type: "case-study"
  },
  {
    slug: "clipsync",
    title: "clipSync",
    summary: "Full-stack cross-platform app for clipboard syncing, file sharing, and collaborative workspaces with real-time features and modular architecture.",
    description: `ClipSync is a full-stack, cross-platform application designed for seamless clipboard syncing, file sharing, and collaborative workspaces. The mobile app is built with React Native and Kotlin-based native overlay modules, while the web app uses React (Vite + Tailwind). Real-time synchronization is powered by Socket.io, with Supabase handling authentication, storage, and PostgreSQL database. Stripe integration enables premium feature subscriptions. The backend is architected with Node.js/Express RESTful APIs, ensuring a seamless user experience across Android, web, and desktop platforms.`,
    image: "/myLatestProject/projects/clipsync.png",
    images: ["/myLatestProject/projects/clipsync.png"],
    repositoryUrl: "",
    demoUrl: "",
    demoVideoUrl: "",
    techStacks: [
      { name: "React.js", imageUrl: "/technologyStack/react-js.webp", webUrl: "https://reactjs.org/" },
      { name: "React Native", imageUrl: "/technologyStack/react-native.webp", webUrl: "https://reactnative.dev/" },
      { name: "Supabase", imageUrl: "/technologyStack/supabase.png", webUrl: "https://supabase.com/" },
      { name: "Stripe", imageUrl: "/technologyStack/stripe.png", webUrl: "https://stripe.com/" },
      { name: "Socket.io", imageUrl: "https://socket.io/images/logo.svg", webUrl: "https://socket.io/" },
      { name: "Node.js", imageUrl: "/technologyStack/node.webp", webUrl: "https://nodejs.org/" },
      { name: "Express", imageUrl: "/technologyStack/express-js.webp", webUrl: "https://expressjs.com/" },
      { name: "Kotlin", imageUrl: "https://img.icons8.com/color/48/000000/kotlin.png", webUrl: "https://kotlinlang.org/" },
      { name: "Vite", imageUrl: "https://vitejs.dev/logo.svg", webUrl: "https://vitejs.dev/" },
      { name: "Tailwind CSS", imageUrl: "/technologyStack/tailwindcss.webp", webUrl: "https://tailwindcss.com/" }
    ],
    features: [
      "Cross-platform clipboard syncing (web, mobile, desktop)",
      "Real-time file sharing and collaboration",
      "Collaborative workspaces with modular architecture",
      "Supabase authentication and storage integration",
      "Premium features with Stripe subscription",
      "RESTful APIs with Node.js/Express",
      "Kotlin-based native overlays for mobile",
      "Seamless UX across Android, web, and desktop"
    ],
    caseStudy: `
### Problem
Managing clipboard data, files, and collaborative tasks across multiple devices and platforms is cumbersome and fragmented. Existing solutions often lack real-time sync, robust sharing, and seamless cross-platform support.

### Solution
ClipSync provides a unified platform for clipboard syncing, file sharing, and collaborative workspaces. Leveraging React.js and React Native for frontend, and Node.js/Express for backend, it ensures real-time updates via Socket.io and secure data management with Supabase. Stripe integration enables monetization of premium features, while modular architecture supports extensibility.

### Results
- Achieved seamless clipboard and file sync across web, mobile, and desktop.
- Enabled real-time collaboration for distributed teams.
- Streamlined user experience with robust authentication and payment flows.
- Positive feedback from users for reliability and ease of use.
`,
    category: "app",
    type: "case-study"
  },
  {
    slug: "agroai",
    title: "AgroAI",
    summary: "Generative AI assistant for farmers, providing crop, soil, and weather advice with multilingual support.",
    description: `AgroAI is a generative AI assistant designed to help farmers make better decisions regarding crop health, soil conditions, weather, and pesticides. Farmers can chat in natural language to get advice tailored to their crop and region. It supports multilingual interactions and uses geolocation + plant databases for hyperlocal support.`,
    image: "/myLatestProject/projects/agro-ai.png",
    images: ["/myLatestProject/projects/agro-ai.png"],
    repositoryUrl: "",
    demoUrl: "",
    techStacks: [
      { name: "React.js", imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png", webUrl: "https://reactjs.org/" },
      { name: "Tailwind CSS", imageUrl: "https://img.icons8.com/?size=512&id=13679&format=png", webUrl: "https://tailwindcss.com/" },
      { name: "Python", imageUrl: "https://img.icons8.com/?size=512&id=13441&format=png", webUrl: "https://python.org/" },
      { name: "Flask", imageUrl: "https://img.icons8.com/?size=512&id=13442&format=png", webUrl: "https://flask.palletsprojects.com/" },
      { name: "Azure OpenAI", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/en-us/products/ai-services/openai-service/" },
      { name: "LangChain", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://www.langchain.com/" },
      { name: "Whisper", imageUrl: "https://openai.com/favicon.ico", webUrl: "https://openai.com/research/whisper" },
      { name: "Google Translate API", imageUrl: "https://translate.google.com/favicon.ico", webUrl: "https://cloud.google.com/translate" },
      { name: "Vercel", imageUrl: "https://vercel.com/favicon.ico", webUrl: "https://vercel.com/" },
      { name: "Azure", imageUrl: "https://img.icons8.com/?size=512&id=20906&format=png", webUrl: "https://azure.microsoft.com/" },
    ],
    features: [
      "Natural language chat for farmers",
      "Crop, soil, and weather advice",
      "Multilingual support",
      "Geolocation and plant database integration",
      "Voice-to-text with Whisper",
      "Azure and Vercel deployment"
    ],
    caseStudy: `
### Problem
Farmers often lack access to timely, localized, and expert advice for managing crops, soil, and weather risks. Language barriers and limited digital literacy further hinder adoption of modern agri-tech solutions.

### Solution
AgroAI provides a conversational AI assistant that supports multilingual chat, geolocation-based recommendations, and integration with agricultural databases. It delivers actionable insights on crop health, soil conditions, and weather, tailored to each farmer's context.

### Research & Techniques
- **Conversational AI:** Used Azure OpenAI and LangChain agents for natural language understanding and structured query responses.
- **Multilingual Support:** Integrated Google Translate API and Whisper for voice-to-text and translation.
- **Agricultural APIs:** Pulled real-time data from weather, soil, and crop databases for hyperlocal advice.
- **User-Centric Design:** Focused on accessibility and ease of use for rural populations.

### Results
- Increased crop yield and reduced input costs in pilot deployments.
- Positive feedback from farmers on usability and relevance.
- Presented as a research project in agri-tech conferences.
`,
    category: "app",
    type: "case-study"
  },

  {
    slug: "my-vision",
    title: "myVision",
    summary: "An AI-powered app for visually impaired users, utilizing IBM YOLO for object detection and voice-based interaction.",
    description: `myVision is an innovative application designed to empower visually impaired users. Leveraging IBM YOLO for real-time object detection and advanced voice-based interaction, myVision provides users with the ability to navigate their environment more independently and safely. The app integrates cutting-edge AI models, intuitive UI, and robust accessibility features to deliver a seamless experience.`,
    image: "/myLatestProject/projects/myVision.webp",
    images: [
      "/myLatestProject/projects/myVision.webp"
    ],
    repositoryUrl: "https://github.com/khursheedahmedd/vision-guide",
    demoUrl: "https://ibm-vision-guide.vercel.app/",
    demoVideoUrl: "https://storage.googleapis.com/lablab-video-submissions/clyyg9s36000f357erj4ytsnm/raw/submission-video-x-clyyg9s36000f357erj4ytsnm-cm07bxrtk0000357dgma8ug4p_z5nu0fh9.mp4",
    techStacks: [
      {
        name: "Next JS",
        imageUrl: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    caseStudy: `
### Problem
Visually impaired individuals face significant challenges in navigating their environment safely and independently. Traditional aids are often limited in functionality and accessibility.

### Solution
myVision leverages AI-powered object detection and voice interaction to provide real-time feedback and guidance. The app is designed with accessibility in mind, ensuring ease of use for all users.

### Results
- Improved independence for visually impaired users
- Real-time object detection and feedback
- Seamless voice-based interaction
- Positive user feedback and adoption
`,
    features: [
      "Real-time object detection",
      "Voice-based interaction",
      "Accessible UI/UX",
      "Integration with IBM YOLO",
      "Cross-platform support"
    ],
    category: "app",
    type: "case-study"
  },
  {
    slug: "lux-ride-sydney",
    title: "Lux Ride Sydney",
    summary: "A luxury ride-sharing platform in Australia, providing premium transportation services.",
    description: `Lux Ride Sydney is a premium ride-sharing platform designed for the Australian market. The platform offers luxury transportation services with a focus on safety, reliability, and customer experience. The app features real-time booking, driver tracking, secure payments, and a user-friendly interface.`,
    image: "/myLatestProject/projects/luxRide.webp",
    images: [
      "/myLatestProject/projects/luxRide.webp"
    ],
    repositoryUrl: "https://github.com/khursheedahmedd",
    demoUrl: "https://luxridesydney.com/",
    techStacks: [
      {
        name: "Next JS",
        imageUrl: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        webUrl: "https://nextjs.org/",
      },
      {
        name: "React JS",
        imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
        webUrl: "https://reactjs.org/",
      },
      {
        name: "Node JS",
        imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
        webUrl: "https://nodejs.org/en/",
      },
    ],
    caseStudy: `
### Problem
Urban commuters in Australia require reliable, safe, and luxurious transportation options. Existing ride-sharing platforms often lack premium features and customer service.

### Solution
Lux Ride Sydney offers a luxury ride-sharing experience with professional drivers, high-end vehicles, and advanced safety features. The platform integrates real-time tracking, secure payments, and a seamless booking process.

### Results
- Increased customer satisfaction and loyalty
- High ratings for safety and reliability
- Growing user base in Sydney
`,
    features: [
      "Luxury vehicle fleet",
      "Real-time booking and tracking",
      "Secure payment integration",
      "User-friendly mobile app",
      "Professional drivers"
    ],
    category: "app",
    type: "case-study"
  },

];

export const getProject = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, category: string): Project[] => {
  return projects
    .filter(project => project.slug !== currentSlug && project.category === category)
    .slice(0, 3);
}; 