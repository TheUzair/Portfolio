"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
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
      tags: ["React", "Node.js", "PostgreSQL"],
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

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-12"
    >
      <div className="flex items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h6 className="eyebrow">Boundless Creations</h6>
          <h2 className="mt-3 mb-10 max-w-[600px] text-4xl font-bold leading-[120%] tracking-[0.5px] lg:text-6xl">
            Building Beyond <span className="text-gradient">Boundaries</span>
          </h2>
        </motion.div>

        <Link href="/projects" className="hidden md:block">
          <motion.div
            className="btn-offset rounded-md"
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="h-[60px] w-[230px]" />
            <span className="btn-offset-inner h-[64px] w-[234px] text-base px-3 rounded-md text-center">
              Discover More Creations
            </span>
          </motion.div>
        </Link>
      </div>

      <div className="relative flex-grow mt-8">
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
          pagination={{ clickable: true }}
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
                  className="flex flex-col h-full p-5 rounded-2xl glass transition-all duration-300 hover:shadow-glow-cyan hover:border-brand-cyan-400/50"
                >
                  <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="350px"
                      placeholder="blur"
                      blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JZQCdAEO/gHOAAD++P/YAAAA"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/80 via-brand-navy-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">
                        View Project →
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base mb-4 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-brand-cyan-500/10 text-brand-cyan-700 dark:text-brand-cyan-300 border border-brand-cyan-500/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-full py-2 px-4 rounded-lg text-center font-medium bg-gradient-brand text-white shadow-glow-cyan transition-shadow hover:shadow-glow-amber">
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
          className="btn-offset rounded-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-[60px] w-[230px]" />
          <span className="btn-offset-inner h-[64px] w-[234px] text-base px-3 rounded-md text-center">
            Discover More Creations
          </span>
        </motion.div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
