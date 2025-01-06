"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf"; 
    link.download = "Uzair_CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-5 pt-5 lg:px-20 min-h-screen flex items-center">
      <section className="flex flex-col-reverse xl:flex-row items-center gap-16 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1"
        >
          <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[70px]">
            <span className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600">
              Creating
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600">
              Fullstack
            </span>
            <br />
            Systems that Inspire and Deliver.
          </h1>
          <p className="mb-16 text-[19px] text-[#666] lg:text-[22px]">
            Hi, I&apos;m Uzair! Based in Delhi-NCR, India, I craft fast, elegant solutions with sleek interfaces and powerful backend systems.
          </p>
          <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
            <a href="/contact">
              <div className="relative h-[60px] bg-gradient-to-r from-blue-400 via-green-500 to-blue-600 w-[150px]">
                <button
                  className="absolute h-[62px] bg-black text-lg font-medium text-white w-[152px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3"
                  style={{ right: "8px", bottom: "8px" }}
                >
                  Reserve a Spot
                </button>
              </div>
            </a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              download="Uzair_CV.pdf"
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