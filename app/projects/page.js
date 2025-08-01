"use client";

import React, { useContext, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

const projects = [
  {
    id: "get-me-a-chai",
    title: "Get Me A Chai",
    imageUrl: "/chai.jpg",
  },
  {
    id: "nurturetech",
    title: "NurtureTech",
    imageUrl: "/nurture.jpg",
  },
  {
    id: "passop",
    title: "PassOp - Password Manager",
    imageUrl: "/password.jpg",
  },
  {
    id: "edutrack360",
    title: "Edutrack360",
    imageUrl: "/records.jpg",
  },
  {
    id: "form-builder",
    title: "Form Builder",
    imageUrl: "/form.jpg",
  },
  {
    id: "bitlinks",
    title: "BitLinks",
    imageUrl: "/links.jpg",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const [loadingProject, setLoadingProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setLoadingProject(projectId);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {loadingProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <div className="flex space-x-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-6 h-6 rounded-full"
                  style={{
                    backgroundColor:
                      i === 0 ? "#3b82f6" : i === 1 ? "#10b981" : "#8b5cf6",
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {projects.map((project, index) => {
          let borderColor;
          switch (index) {
            case 0:
            case 1:
              borderColor = "border-black";
              break;
            case 2:
              borderColor = "border-green-500";
              break;
            case 3:
              borderColor = "border-blue-500";
              break;
            case 4:
              borderColor = "border-blue-300";
              break;
            case 5:
              borderColor = "border-purple-500";
              break;
            default:
              borderColor = isDarkMode ? "border-black" : "border-white";
          }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Link
                href={`/projects/${project.id}`}
                onClick={() => handleProjectClick(project.id)}
                className="block mb-8"
              >
                <div className="relative flex flex-col md:flex-row max-w-full md:max-w-[600px] cursor-pointer items-center justify-end xl:ml-32 group">
                  <div
                    className={`overflow-hidden border-4 h-96 w-72 ${borderColor}`}
                  >
                    <Image
                      alt={`${project.title} interface screenshot`}
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimage="1"
                      className="w-full transition-transform duration-300 group-hover:scale-[1.1]"
                      style={{ color: "transparent" }}
                      src={project.imageUrl}
                      priority
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 sm:-bottom-8 md:-bottom-16 -right-1 sm:-right-2 w-1/2 md:mb-14 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    } px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 md:-right-[150px] xl:py-10 xl:-right-[400px] xl:bottom-20 xl:w-full`}
                  >
                    <h6
                      className={`bg-clip-text text-transparent text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] md:text-sm xl:text-lg ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-400 via-red-500 to-orange-600"
                          : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
                      }`}
                    >
                      {project.title}
                    </h6>
                    <h2
                      className={`${
                        isDarkMode ? "text-black" : "text-white"
                      } my-1 sm:my-2 truncate text-sm sm:text-base md:text-xl font-bold leading-[100%] md:my-4 lg:text-4xl xl:text-5xl`}
                    >
                      {project.title}
                    </h2>
                    <p className="cursor-pointer flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white md:text-sm lg:text-base">
                      <span
                        className={`${
                          isDarkMode ? "text-black" : "text-white"
                        } group-hover:underline`}
                      >
                        View Project
                      </span>
                      <ArrowRight
                        size={10}
                        className={`transition-transform duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2 ${
                          isDarkMode ? "text-black" : "text-white"
                        }`}
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default Projects;
