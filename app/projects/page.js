"use client";

import React, { useContext } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import { ArrowRight } from 'lucide-react';
import FAQ from "@/components/FAQ";

const projects = [
  {
    id: 'get-me-a-chai',
    title: "Get Me A Chai",
    imageUrl: "/chai.jpg",
  },
  {
    id: 'nurturetech',
    title: "NurtureTech",
    imageUrl: "/nurture.jpg",
  },
  {
    id: 'passop',
    title: "PassOp - Password Manager",
    imageUrl: "/password.jpg",
  },
  {
    id: 'edutrack360',
    title: "Edutrack360",
    imageUrl: "/records.jpg",
  },
  {
    id: 'form-builder',
    title: "Form Builder",
    imageUrl: "/form.jpg",
  },
  {
    id: 'bitlinks',
    title: "BitLinks",
    imageUrl: "/links.jpg",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {projects.map((project, index) => {
          let borderColor;
          switch (index) {
            case 0:
            case 1:
              borderColor = 'border-black';
              break;
            case 2:
              borderColor = 'border-green-500';
              break;
            case 3:
              borderColor = 'border-blue-500';
              break;
            case 4:
              borderColor = 'border-blue-300';
              break;
            case 5:
              borderColor = 'border-purple-500';
              break;
            default:
              borderColor = isDarkMode ? 'border-black' : 'border-white';
          }

          return (
            <Link key={project.id} href={`/projects/${project.id}`} className="block mb-8">
              <div className="relative flex flex-col md:flex-row max-w-full md:max-w-[600px] cursor-pointer items-center justify-end xl:ml-40 group">
                <div className={`overflow-hidden border-4 ${borderColor}`}>
                  <Image
                    alt={`${project.title} interface screenshot`}
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimage="1"
                    className="w-full transition-transform duration-300 group-hover:scale-[1.1]"
                    style={{ color: 'transparent' }}
                    src={project.imageUrl}
                    priority
                  />
                </div>
                <div className={`absolute -bottom-4 sm:-bottom-8 md:-bottom-16 -right-1 sm:-right-2 w-1/2 md:mb-14 ${isDarkMode ? 'bg-white' : 'bg-black'} px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 md:-right-[150px] xl:py-10 xl:-right-[400px] xl:bottom-20 xl:w-full`}>
                  <h6 className={`bg-clip-text text-transparent text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] md:text-sm xl:text-lg ${isDarkMode ? 'bg-gradient-to-r from-purple-400 via-red-500 to-orange-600' : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'}`}>
                    {project.title}
                  </h6>
                  <h2 className={`${isDarkMode ? 'text-black' : 'text-white'} my-1 sm:my-2 truncate text-sm sm:text-base md:text-xl font-bold leading-[100%] md:my-4 lg:text-4xl xl:text-5xl`}>
                    {project.title}
                  </h2>
                  <p className="cursor-pointer flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-white md:text-sm lg:text-base">
                    <span className={`${isDarkMode ? 'text-black' : 'text-white'} group-hover:underline`}>View Project</span>
                    <ArrowRight
                      size={10}
                      className={`transition-transform duration-500 group-hover:translate-x-1 sm:group-hover:translate-x-2 ${isDarkMode ? 'text-black' : 'text-white'}`}
                    />
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default Projects;