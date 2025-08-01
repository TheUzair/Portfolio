"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const ProjectsSection = () => {
  const updatedProjects = [
    {
      title: "Get-Me-A-Chai",
      description:
        "A web app for micro-donations, featuring user authentication and real-time payment tracking.",
      imageUrl: "/get-me-a-chai-ss.jpg",
      link: "https://get-me-a-chai-pi.vercel.app/",
      tags: ["Next.js", "Razorpay", "MongoDB"],
    },
    {
      title: "NurtureTech",
      description:
        "A full-stack app for managing childcare settings with real-time updates and secure authentication.",
      imageUrl: "/nurturetech-ss.jpg",
      link: "https://nurturetech.onrender.com/",
      tags: ["React", "Node.js", "PortgreSQL"],
    },
    {
      title: "PassOp - Password Manager",
      description:
        "An open-source password manager with real-time syncing and a user-friendly interface.",
      imageUrl: "/passop-ss.jpg",
      link: "https://pass-op-olive.vercel.app/",
      tags: ["JavaScript", "Encryption", "Tailwind"],
    },
    {
      title: "GeoVault",
      description:
        "A web app for managing delivery locations with secure authentication and interactive map features.",
      imageUrl: "/geovault-ss.jpg",
      link: "https://github.com/TheUzair/GeoVault",
      tags: ["Mapbox", "JWT", "Geolocation"],
    },
    {
      title: "Form Builder",
      description:
        "An interactive platform for creating and managing diverse question types with drag-and-drop functionality.",
      imageUrl: "/form-builder-ss.jpg",
      link: "https://formbuilder-6s1k.onrender.com/",
      tags: ["Drag & Drop", "Form Validation", "JSON Schema"],
    },
    {
      title: "BitLinks",
      description:
        "A URL shortening service with custom links, real-time analytics, and a user-friendly dashboard.",
      imageUrl: "/bitlinks-ss.jpg",
      link: "https://bit-links-blush.vercel.app/",
      tags: ["URL Shortening", "Analytics", "Custom Domains"],
    },
  ];

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center"
    >
      <div className="flex items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h6
            className={`bg-clip-text text-transparent mb-4 text-xl font-bold ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
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
            className={`relative h-[62px] w-[200px] ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
            }`}
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              className="absolute h-[66px] bg-black text-lg font-medium text-white w-[205px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black dark:font-medium"
              style={{ right: "8px", bottom: "8px" }}
            >
              Discover More Boundless Creations
            </button>
          </motion.div>
        </Link>
      </div>

      <div className="relative flex-grow">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {updatedProjects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[350px]">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`flex flex-col h-full p-5 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">
                        View Project →
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm lg:text-base mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-gray-700 text-gray-200"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-colors ${
                        isDarkMode
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                          : "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                      }`}
                    >
                      Explore Project
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link href="/projects" className="block md:hidden mt-10 mx-auto">
        <motion.div
          className={`relative h-[62px] w-[200px] ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
              : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            className="absolute h-[66px] bg-black text-lg font-medium text-white w-[205px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black dark:font-medium"
            style={{ right: "8px", bottom: "8px" }}
          >
            Discover More Boundless Creations
          </button>
        </motion.div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
