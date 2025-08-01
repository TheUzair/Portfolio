"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

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
    <div
      className={`container mx-auto px-5 pt-5 lg:px-20 min-h-[80vh] flex items-center ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 md:w-1/2"
        >
          <h1 className="mb-4 text-4xl font-bold leading-[110%] md:text-5xl lg:text-6xl">
            {["Creating", "Fullstack", "Systems that Inspire and Deliver."].map(
              (text, index) => (
                <span
                  key={index}
                  className={`bg-clip-text text-transparent ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                      : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
                  }`}
                >
                  {text}
                  <br />
                </span>
              )
            )}
          </h1>

          <p
            className={`mb-8 text-lg ${
              isDarkMode ? "text-gray-300" : "text-[#666]"
            } lg:text-xl`}
          >
            Hi, I&apos;m Uzair! Based in Delhi-NCR, India, I craft fast, elegant
            solutions with sleek interfaces and powerful backend systems.
          </p>

          <div className="flex flex-row items-center justify-between w-full gap-4">
            {/* Contact Button */}
            <div className="flex-shrink-0">
              <a href="/contact">
                <div
                  className={`relative h-[60px] w-[150px] bg-gradient-to-r ${
                    isDarkMode
                      ? "from-purple-500 via-pink-500 to-purple-500"
                      : "from-blue-400 via-green-500 to-blue-600"
                  }`}
                >
                  <button
                    className="absolute h-[64px] w-[156px] bg-black text-lg font-medium text-white transition-transform duration-300 ease-in-out transform hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black"
                    style={{ right: "8px", bottom: "8px" }}
                  >
                    Reserve a Spot
                  </button>
                </div>
              </a>
            </div>

            {/* CV Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                onClick={downloadCV}
                className="group text-lg font-bold px-4 py-2 flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          className="flex-1 md:w-1/2 flex justify-center"
        >
          <div className="hidden md:block w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
            <Image
              alt="profile image"
              fetchPriority="high"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="rounded-full object-cover"
              src="/user.jpg?v=3"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
