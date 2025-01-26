"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeContext } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectDetailClient = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const projectImages = [
    '/gmac.jpg',
    '/ntclient.jpg',
    '/pm.jpg',
    '/sr.jpg',
    '/fb.jpg',
    '/bl.jpg',
  ];

  const projectImageMap = {
    'get-me-a-chai': 0,
    'nurturetech': 1,
    'passop': 2,
    'edutrack360': 3,
    'form-builder': 4,
    'bitlinks': 5,
  };

  const imageIndex = projectImageMap[project.id];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Header />
        <p className="text-red-500 text-center text-2xl font-bold mt-20">Project not found</p>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
        }`}
    >
      <Header />
      <main className="container mx-auto px-5 pt-10 lg:px-20 mb-8">
        <section className="mb-20 mt-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h6
                className={`bg-gradient-to-r ${isDarkMode
                  ? "from-purple-500 via-pink-500 to-purple-500"
                  : "from-blue-400 via-green-500 to-blue-600"
                  } bg-clip-text text-transparent text-sm font-bold tracking-wider`}
              >
                {project.id}
              </h6>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                {project.title}
              </h1>
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-3 text-2xl font-bold leading-snug md:text-3xl">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed">{project.overview}</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="relative overflow-hidden rounded-xl shadow-2xl group">
            <Image
              src={projectImages[imageIndex]}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Link
                href={project.link}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-transform transform hover:scale-105"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>

        <section className="prose prose-lg mx-auto max-w-3xl pt-10 xl:prose-xl">
          <h2 className="text-3xl font-bold mb-6">{project.title} Details</h2>
          <p className="mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.technologies &&
              project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode
                    ? "bg-gray-700 text-gray-200"
                    : "bg-gray-200 text-gray-700"
                    } shadow`}
                >
                  {tech}
                </span>
              ))}
          </div>

          <div className="flex gap-4">
            <Link
              href={project.link}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <FaExternalLinkAlt />
              Visit Live Site
            </Link>
            {project.github && (
              <Link
                href={project.github}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg ${isDarkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                <FaGithub />
                View on GitHub
              </Link>
            )}
          </div>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProjectDetailClient;