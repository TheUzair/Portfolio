import React from 'react';
import ProjectDetailClient from './ProjectDetailClient';

const projects = [
  {
    id: 'get-me-a-chai',
    title: "Get Me A Chai",
    overview: "A web app for micro-donations, featuring user authentication and real-time payment tracking.",
    description: "Get-Me-A-Chai is a crowdfunding platform built with Next.js that empowers creators to receive direct support from their fans. The application offers features such as user authentication, personalized dashboards, and secure payment processing via Razorpay. Visitors can quickly learn about the platform's mission of supporting creative projects through 'chai' purchases. The platform fosters a supportive community where fans can collaborate, contribute financially, and engage with creators. It makes it easy for fans to back creators directly and for creators to bring their projects to life with the help of their supporters. Fans can explore different ways to contribute, such as being a part of the creator's journey by sharing ideas and offering moral support, buying a chai to fund creative projects, and joining a passionate community that supports and believes in the creators' work. Additionally, the platform provides detailed information on how it connects creators with fans, offers flexible funding options, and fosters a growing community committed to collaboration and creativity.",
    imageUrl: "/chai.jpg",
    link: "https://get-me-a-chai-pi.vercel.app/",
    technologies: ["Next.js", "React", "Razorpay", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/TheUzair/get-me-a-chai"
  },
  {
    id: 'nurturetech',
    title: "NurtureTech",
    overview: "A full-stack app for managing childcare settings with real-time updates and secure authentication.",
    description: "The NurtureTech project is a comprehensive full-stack application designed to manage and track attendance, caregiver information, child enrollments, and financial records for childcare or educational settings. It includes a backend server for API management and a frontend client for user interaction, featuring real-time updates, caching, robust authentication mechanisms, and seamless integration with Neon PostgreSQL for database management. The application aims to streamline operations in childcare settings, providing administrators with tools to efficiently manage daily tasks and ensure secure data handling. With its user-friendly interface, NurtureTech enhances communication between caregivers and parents, offering real-time notifications and updates on children's activities and progress.",
    imageUrl: "/nurture.jpg",
    link: "https://nurturetech.onrender.com/",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/TheUzair/nurturetech"
  },
  {
    id: 'passop',
    title: "PassOp - Password Manager",
    overview: "An open-source password manager with real-time syncing and a user-friendly interface.",
    description: "PassOp is a secure password management application built with React and Vite, featuring a MongoDB backend. It provides users with a reliable solution for storing and managing passwords securely. The application supports real-time syncing across devices, ensuring that users have access to their credentials whenever needed. With its intuitive interface, PassOp simplifies the process of organizing and retrieving passwords, offering features such as password generation, categorization, and secure sharing options. The open-source nature of PassOp encourages community contributions, fostering continuous improvement and innovation in password management solutions.",
    imageUrl: "/password.jpg",
    link: "https://pass-op-olive.vercel.app/",
    technologies: ["React", "Vite", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/TheUzair/passop"
  },
  {
    id: 'edutrack360',
    title: "EduTrack360",
    overview: "A comprehensive school management system for tracking student activities, awards, and academic records.",
    description: "EduTrack360 is a comprehensive school management system designed to track and manage various aspects of student life, including behavioral records, extracurricular activities, academic achievements, class sections, and more. This application provides a user-friendly interface for managing and visualizing student data while supporting role-based access control to ensure appropriate permissions.",
    imageUrl: "/records.jpg",
    link: "https://edutrack360.onrender.com",
    technologies: ["React", "Node.js", "MongoDB", "School Management", "Education Technology", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/TheUzair/edutrack360"
  },
  {
    id: 'form-builder',
    title: "Form Builder",
    overview: "An interactive platform for creating and managing diverse question types with drag-and-drop functionality.",
    description: "Form Builder is an interactive platform designed to streamline the creation, management, and assessment of various question formats such as comprehension, cloze, and categorization questions. It provides educators and learners with a flexible and user-friendly interface, offering innovative tools to enhance the learning process. The platform supports drag-and-drop functionality, allowing users to easily create and customize forms to suit their needs. Form Builder aims to improve the efficiency of educational assessments, enabling educators to design engaging and interactive quizzes and tests. With its robust analytics and reporting features, the platform provides valuable insights into student performance and learning outcomes.",
    imageUrl: "/form.jpg",
    link: "https://formbuilder-6s1k.onrender.com/",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Drag-and-Drop API"],
    github: "https://github.com/TheUzair/form-builder"
  },
  {
    id: 'bitlinks',
    title: "BitLinks",
    overview: "A URL shortening service with custom links, real-time analytics, and a user-friendly dashboard.",
    description: "Bitlinks is a URL shortening service built with Next.js, allowing users to generate shortened versions of long URLs, making them easier to share and manage. The service offers custom links, real-time analytics, and a user-friendly dashboard for tracking link performance. Bitlinks aims to simplify the process of managing and sharing URLs, providing users with tools to analyze link engagement and optimize their online presence. The platform supports integration with various social media and marketing tools, enabling users to enhance their digital marketing strategies and reach a wider audience.",
    imageUrl: "/links.jpg",
    link: "https://bit-links-blush.vercel.app/",
    technologies: ["React", "MongoDB", "Node.js"],
    github: "https://github.com/TheUzair/bitlinks"
  },
];

async function getData(projectId) {
  return projects.find((project) => project.id === projectId);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

const ProjectDetailPage = async ({ params }) => {
  const { projectId } = await params;
  const project = await getData(projectId);

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;