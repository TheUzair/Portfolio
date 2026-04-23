import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'get-me-a-chai',
    title: 'Get Me A Chai',
    overview:
      'A web app for micro-donations, featuring user authentication and real-time payment tracking.',
    description:
      `Get-Me-A-Chai is a crowdfunding platform built with Next.js that empowers creators to receive direct support from their fans. The application offers features such as user authentication, personalized dashboards, and secure payment processing via Razorpay. Visitors can quickly learn about the platform's mission of supporting creative projects through "chai" purchases. The platform fosters a supportive community where fans can collaborate, contribute financially, and engage with creators.`,
    imageUrl: '/chai.jpg',
    link: 'https://get-me-a-chai-pi.vercel.app/',
    technologies: ['Next.js', 'React', 'Razorpay', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/TheUzair/get-me-a-chai',
  },
  {
    id: 'nurturetech',
    title: 'NurtureTech',
    overview:
      'A full-stack app for managing childcare settings with real-time updates and secure authentication.',
    description:
      'The NurtureTech project is a comprehensive full-stack application designed to manage and track attendance, caregiver information, child enrollments, and financial records for childcare or educational settings. It includes a backend server for API management and a frontend client for user interaction, featuring real-time updates, caching, robust authentication mechanisms, and seamless integration with Neon PostgreSQL for database management.',
    imageUrl: '/nurture.jpg',
    link: 'https://nurturetech.onrender.com/',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/TheUzair/nurturetech',
  },
  {
    id: 'passop',
    title: 'PassOp - Password Manager',
    overview:
      'An open-source password manager with real-time syncing and a user-friendly interface.',
    description:
      'PassOp is a secure password management application built with React and Vite, featuring a MongoDB backend. It provides users with a reliable solution for storing and managing passwords securely. The application supports real-time syncing across devices, ensuring that users have access to their credentials whenever needed.',
    imageUrl: '/password.jpg',
    link: 'https://pass-op-olive.vercel.app/',
    technologies: ['React', 'Vite', 'MongoDB', 'Express', 'Node.js'],
    github: 'https://github.com/TheUzair/passop',
  },
  {
    id: 'edutrack360',
    title: 'EduTrack360',
    overview:
      'A comprehensive school management system for tracking student activities, awards, and academic records.',
    description:
      'EduTrack360 is a comprehensive school management system designed to track and manage various aspects of student life, including behavioral records, extracurricular activities, academic achievements, class sections, and more. This application provides a user-friendly interface for managing and visualizing student data while supporting role-based access control to ensure appropriate permissions.',
    imageUrl: '/records.jpg',
    link: 'https://edutrack360.onrender.com',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'School Management',
      'Education Technology',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    github: 'https://github.com/TheUzair/edutrack360',
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    overview:
      'An interactive platform for creating and managing diverse question types with drag-and-drop functionality.',
    description:
      'Form Builder is an interactive platform designed to streamline the creation, management, and assessment of various question formats such as comprehension, cloze, and categorization questions. It provides educators and learners with a flexible and user-friendly interface, offering innovative tools to enhance the learning process.',
    imageUrl: '/form.jpg',
    link: 'https://formbuilder-6s1k.onrender.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Drag-and-Drop API'],
    github: 'https://github.com/TheUzair/form-builder',
  },
  {
    id: 'bitlinks',
    title: 'BitLinks',
    overview:
      'A URL shortening service with custom links, real-time analytics, and a user-friendly dashboard.',
    description:
      'Bitlinks is a URL shortening service built with Next.js, allowing users to generate shortened versions of long URLs, making them easier to share and manage. The service offers custom links, real-time analytics, and a user-friendly dashboard for tracking link performance.',
    imageUrl: '/links.jpg',
    link: 'https://bit-links-blush.vercel.app/',
    technologies: ['React', 'MongoDB', 'Node.js'],
    github: 'https://github.com/TheUzair/bitlinks',
  },
];

export const projectImageMap: Record<string, string> = {
  'get-me-a-chai': '/gmac.jpg',
  nurturetech: '/ntclient.jpg',
  passop: '/pm.jpg',
  edutrack360: '/sr.jpg',
  'form-builder': '/fb.jpg',
  bitlinks: '/bl.jpg',
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
