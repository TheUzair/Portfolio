import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'golfdraw',
    title: 'GolfDraw',
    overview:
      'Subscription platform where golfers track Stableford scores, enter monthly prize draws, and support charities.',
    description:
      'GolfDraw turns every round of golf into an opportunity. Subscribers enter up to 5 Stableford scores each month as lottery draw numbers. When the monthly draw runs, matching numbers win a share of the prize pool — and a portion of every subscription goes directly to the charity of the player\'s choice. Features Stripe subscriptions, role-based access, admin draw management, winner verification, multilingual i18n, and multi-currency support.',
    imageUrl: '/golfdraw-ss.jpg',
    link: 'https://golf-platform-delta-three.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'NextAuth', 'next-intl', 'Tailwind CSS'],
    github: 'https://github.com/TheUzair/GolfDraw',
  },
  {
    id: 'hcpulse-ai',
    title: 'HCPulse AI',
    overview:
      'AI-powered CRM for pharmaceutical field reps to log and manage healthcare professional interactions using natural language.',
    description:
      'HCPulse AI replaces manual data entry with an AI chat assistant powered by LangGraph and Groq LLMs. Field reps describe their HCP interactions in plain English — the AI agent automatically extracts structured data, logs it to the database, and provides intelligent follow-up suggestions. Features dual-mode interaction logging (form + chat), 5 specialized AI tools, real-time Redux form-chat sync, and an HCP directory with analytics dashboard.',
    imageUrl: '/hcpulse-ai-ss.jpg',
    link: 'https://hc-pulse-ai.vercel.app/',
    technologies: ['Next.js', 'FastAPI', 'Python', 'LangGraph', 'Groq', 'PostgreSQL', 'Redux Toolkit', 'SQLAlchemy'],
    github: 'https://github.com/TheUzair/HCPulse-AI',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG AI',
    overview:
      'Paste any public URL and have a natural AI conversation grounded strictly in that page\'s content.',
    description:
      'RAG AI is a production-grade Retrieval-Augmented Generation chatbot built with Next.js 16. It uses Puppeteer to scrape meaningful content from any public URL, stores it as vector embeddings in Weaviate, and streams AI answers via Groq\'s LLaMA 3.3-70b model. Every response includes source citations linking back to the original page. Features streaming word-by-word responses, collapsible sidebar with search history, dark/light/system theme, and skeleton loaders.',
    imageUrl: '/rag-chatbot-ss.jpg',
    link: 'https://rag-chatbot-eta.vercel.app/',
    technologies: ['Next.js', 'Groq', 'Weaviate', 'Puppeteer', 'Redux Toolkit', 'Tailwind CSS'],
    github: 'https://github.com/TheUzair/RAG-Chatbot',
  },
  {
    id: 'flexora',
    title: 'Flexora',
    overview:
      'Production-ready Shopify-inspired e-commerce storefront for a premium athleisure brand.',
    description:
      'FLEXORA is a full-featured e-commerce storefront built with Next.js 15 and TypeScript. It includes a product catalogue of 8 items with size/colour variants, a slide-out cart drawer with Zustand persistence, discount code validation (FLEX15, FREESHIP, BUNDLE20, NEWDROP10), mock checkout with order confirmation, PDP with sticky ATC bar, size guide modal, and a dark-mode-first brand identity using electric lime accents.',
    imageUrl: '/flexora-ss.jpg',
    link: 'https://flexora-two.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Zustand', 'TanStack Query', 'Framer Motion', 'Tailwind CSS', 'Shadcn UI'],
    github: 'https://github.com/TheUzair/Flexora',
  },
  {
    id: 'edutrack360',
    title: 'EduTrack360',
    overview:
      'Comprehensive school management system for tracking student activities, awards, and academic records.',
    description:
      'EduTrack360 is a full-stack school management platform designed to track behavioral records, extracurricular activities, academic achievements, class sections, and academic terms. Built with React (Vite) + Node.js/Express + MongoDB, it features role-based access control for admins, teachers, and students, a fully responsive UI with Shadcn UI components, and real-time data management.',
    imageUrl: '/edutrack360-ss.jpg',
    link: 'https://edutrack360.onrender.com',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Shadcn UI'],
    github: 'https://github.com/TheUzair/EduTrack360',
  },
  {
    id: 'get-me-a-chai',
    title: 'Get Me A Chai',
    overview:
      'Crowdfunding platform for creators with Razorpay payments, personalized dashboards, and top-supporters list.',
    description:
      'Get-Me-A-Chai is a crowdfunding platform built with Next.js that empowers creators to receive direct support from their fans. The application offers user authentication via NextAuth (GitHub + Google), personalized dashboards, and secure payment processing via Razorpay. Fans can buy a "chai" to fund creative projects, view top supporters, and engage with the creator community.',
    imageUrl: '/get-me-a-chai-ss.jpg',
    link: 'https://get-me-a-chai-pi.vercel.app/',
    technologies: ['Next.js', 'NextAuth', 'Razorpay', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/TheUzair/Get-Me-A-Chai',
  },
];

export const projectImageMap: Record<string, string> = {
  golfdraw: '/golfdraw-ss.jpg',
  'hcpulse-ai': '/hcpulse-ai-ss.jpg',
  'rag-chatbot': '/rag-chatbot-ss.jpg',
  flexora: '/flexora-ss.jpg',
  edutrack360: '/edutrack360-ss.jpg',
  'get-me-a-chai': '/get-me-a-chai-ss.jpg',
};

// ─── About skills ────────────────────────────────────────────────────────────
export const skills: string[] = [
  'Next.js',
  'React.js',
  'Node.js',
  'JavaScipt',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'GCP',
];

// ─── FAQ items ───────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What services do you offer as a full-stack developer?',
    answer: 'I offer web development, API development, and consulting services.',
  },
  {
    question: 'What is your experience with cloud services?',
    answer:
      'I work with AWS, Google Cloud, and platforms like Vercel for hosting and serverless functions.',
  },
  {
    question: 'What technologies are you proficient in?',
    answer: 'I work with JavaScript, React, Next.js, Node.js, MongoDB, and more.',
  },
  {
    question: 'How do you handle project deployment?',
    answer:
      'I use platforms like Vercel, Netlify, AWS, or Docker for efficient and scalable deployments.',
  },
  {
    question: 'What is your approach to user authentication?',
    answer:
      'I implement secure authentication using JWT, OAuth2, and services like Auth0 or Firebase Authentication.',
  },
  {
    question: 'How do you manage API integration in your projects?',
    answer:
      'I use RESTful APIs, GraphQL endpoints, and libraries like Axios or Fetch to handle integration efficiently.',
  },
  {
    question: 'How do you ensure the quality of your code?',
    answer:
      'I follow clean code principles, use automated testing, and conduct regular code reviews.',
  },
  {
    question: 'What is your experience with databases?',
    answer:
      'I have experience with both relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases.',
  },
  {
    question: 'How do you handle real-time functionality?',
    answer:
      'I use WebSockets, Socket.IO, and serverless solutions for real-time updates.',
  },
  {
    question: 'How do you handle application security?',
    answer:
      'I implement encryption, validate inputs, sanitize data, and follow OWASP guidelines.',
  },
  {
    question: 'What tools do you use for UI development?',
    answer:
      'I use Tailwind CSS, Material-UI, and Figma for creating responsive and user-friendly interfaces.',
  },
  {
    question: 'What is your approach to debugging?',
    answer:
      'I use tools like Chrome DevTools, Postman, and logging libraries like Winston to debug efficiently.',
  },
  {
    question: 'How do you ensure application performance?',
    answer:
      'I optimize code, use caching strategies, and implement CDNs and lazy loading techniques.',
  },
  {
    question: 'How do you ensure scalability in your applications?',
    answer:
      'I write modular code, use database indexing, caching, and leverage cloud services for scalability.',
  },
];
