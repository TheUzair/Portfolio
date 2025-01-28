"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const ProjectsSection = () => {
  const updatedProjects = [
    {
      title: "Get-Me-A-Chai",
      description: "A web app for micro-donations, featuring user authentication and real-time payment tracking.",
      imageUrl: "/get-me-a-chai-ss.jpg",
      link: "https://get-me-a-chai-pi.vercel.app/"
    },
    {
      title: "NurtureTech",
      description: "A full-stack app for managing childcare settings with real-time updates and secure authentication.",
      imageUrl: "/nurturetech-ss.jpg",
      link: "https://nurturetech.onrender.com/"
    },
    {
      title: "PassOp - Password Manager",
      description: "An open-source password manager with real-time syncing and a user-friendly interface.",
      imageUrl: "/passop-ss.jpg",
      link: "https://pass-op-olive.vercel.app/"
    },
    {
      title: "GeoVault",
      description: "A web app for managing delivery locations with secure authentication and interactive map features.",
      imageUrl: "/geovault-ss.jpg",
      link: "/projects/three"
    },
    {
      title: "Form Builder",
      description: "An interactive platform for creating and managing diverse question types with drag-and-drop functionality.",
      imageUrl: "/form-builder-ss.jpg",
      link: "https://formbuilder-6s1k.onrender.com/"
    },
    {
      title: "BitLinks",
      description: "A URL shortening service with custom links, real-time analytics, and a user-friendly dashboard.",
      imageUrl: "/bitlinks-ss.jpg",
      link: "https://bit-links-blush.vercel.app/"
    },
  ];

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center">
      <div className="flex items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h6
            className={`bg-clip-text text-transparent mb-4 text-xl font-bold ${isDarkMode
              ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
              : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'
              }`}
          >
            BOUNDLESS CREATIONS
          </h6>

          <h2 className="mx-auto mb-10 max-w-[600px] text-4xl font-bold leading-[120%] tracking-[0.5px] lg:text-6xl">
            Building Beyond Boundaries
          </h2>
        </motion.div>

        <Link href="/projects" className="hidden md:block">
          <motion.div
            className={`relative h-[60px] w-[200px] ${isDarkMode
              ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
              : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'
              }`}
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              className="absolute h-[62px] bg-black text-lg font-medium text-white w-[202px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black dark:font-medium"
              style={{ right: '8px', bottom: '8px' }}
            >
              Discover More Boundless Creations
            </button>
          </motion.div>
        </Link>
      </div>

      <div className="relative mt-10 flex-grow">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {updatedProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center justify-between p-5 shadow-lg rounded-lg text-center ${index === 0 ? 'bg-gray-800 text-white' : ''
                  } ${index === 1 ? 'bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white' : ''}`}
                style={{
                  height: '600px',
                  backgroundColor: index === 0 || index === 1
                    ? undefined
                    : index === 5
                      ? 'hsl(270, 70%, 80%)'
                      : `hsl(${(index * 60) % 360}, 70%, 90%)`,
                }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg"
                  width={400}
                  height={200}
                  style={{ objectFit: 'cover', flexShrink: 0 }}
                />
                <h3 className={`text-2xl font-bold ${index === 0 || index === 1 ? 'text-white' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-sm lg:text-base px-4 max-w-[400px] ${index === 0 || index === 1 ? 'text-white' : 'text-gray-800'}`}>
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className={`py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform ${index === 0 ? 'bg-gradient-to-b from-gray-700 to-gray-900' :
                    index === 1 ? 'bg-gradient-to-b from-indigo-600 to-pink-600' :
                      index === 2 ? 'bg-gradient-to-b from-green-400 to-green-600' :
                        index === 3 ? 'bg-gradient-to-b from-cyan-400 to-cyan-600' :
                          index === 4 ? 'bg-gradient-to-b from-blue-600 to-blue-800' :
                            index === 5 ? 'bg-gradient-to-b from-purple-600 to-purple-800' :
                              'bg-gradient-to-b from-purple-400 to-orange-500'
                    } text-white`}
                >
                  View Project
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/projects" className="block md:hidden mt-10 mx-auto">
        <motion.div
          className={`relative h-[60px] w-[200px] ${isDarkMode
            ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
            : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'
            }`}
          initial={{ opacity: 0, y: 50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            className="absolute h-[62px] bg-black text-lg font-medium text-white w-[202px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black dark:font-medium"
            style={{ right: '8px', bottom: '8px' }}
          >
            Discover More Boundless Creations
          </button>
        </motion.div>
      </Link>
    </section>
  )
};

export default ProjectsSection;