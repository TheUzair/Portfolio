"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "Uzair_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`container mx-auto px-5 pt-5 lg:px-20 min-h-screen flex items-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="flex flex-col-reverse xl:flex-row items-center gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1"
        >
          <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[70px]">
            {['Creating', 'Fullstack', 'Systems that Inspire and Deliver.'].map((text, index) => (
              <span
                key={index}
                className={`bg-clip-text text-transparent ${isDarkMode
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
                  : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'
                  }`}
              >
                {text}
                <br />
              </span>
            ))}
          </h1>

          <p className={`mb-16 text-[19px] ${isDarkMode ? 'text-gray-300' : 'text-[#666]'} lg:text-[22px]`}>
            Hi, I&apos;m Uzair! Based in Delhi-NCR, India, I craft fast, elegant solutions with sleek interfaces and powerful backend systems.
          </p>
          <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
            <a href="/contact">
              <div
                className={`relative h-[60px] w-[150px] bg-gradient-to-r ${isDarkMode
                    ? 'from-purple-500 via-pink-500 to-purple-500'
                    : 'from-blue-400 via-green-500 to-blue-600'
                  }`}
              >
                <button
                  className="absolute h-[62px] w-[152px] bg-black text-lg font-medium text-white transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black"
                  style={{ right: '8px', bottom: '8px' }}
                >
                  Reserve a Spot
                </button>
              </div>
            </a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="group flex cursor-pointer items-center gap-2 text-lg font-bold"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                ></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full aspect-square relative">
            <Image
              alt="profile image"
              fetchPriority="high"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="rounded-full object-cover"
              src="/testing.jpg"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;