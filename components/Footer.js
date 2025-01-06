"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-12 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8" style={{ opacity: 1, transform: "none" }}>
            <motion.h2
              className="text-4xl font-bold tracking-[0.5px] text-black md:text-5xl xl:text-6xl"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Excited to Bring Ideas to Life?
            </motion.h2>
            <motion.h4
              className="relative inline-block bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600 cursor-pointer text-3xl font-bold tracking-[0.5px] md:text-5xl xl:text-6xl group"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bring Your Vision
              <span
                className="block h-[3px] w-0 bg-gradient-to-r from-blue-400 via-green-500 to-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"
              ></span>
            </motion.h4>
          </div>

          <div className="flex flex-col xl:flex-row xl:justify-between items-start xl:items-center gap-8 xl:gap-0">
            <div className="flex flex-col items-start">
              <h2 className="font-medium italic text-black text-lg sm:text-xl md:text-2xl lg:text-3xl lg:font-bold">
                &lt;Next
                <span className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600">
                  Mode /&gt;
                </span>
                .
              </h2>
              <p className="py-2 text-gray-600 text-base lg:text-lg">Delhi - NCR, India</p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#8a95ad"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                </svg>
                <Link
                  href="mailto:mohujer90@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gray-600 hover:text-black transition-colors"
                >
                  mohujer90@gmail.com
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 xl:grid-cols-3 xl:gap-12 text-sm sm:text-base">
              {['About', 'Services', 'Experience', 'Contact', 'Articles', 'Projects'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    target="_self"
                    className="text-gray-600 hover:text-black transition-colors"
                    href={`/#${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  href="https://leetcode.com/u/Mohd_Uzair"
                >
                  Leetcode
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  href="https://github.com/TheUzair"
                >
                  Github
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  href="https://linkedin.com/in/mohd-uzair-33b166204"
                >
                  Linkedin
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-12 pb-10 text-lg font-medium">
            <p>
              &copy; {currentYear} <span className="text-[15px] font-medium italic">&lt;Next<span className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600">Mode</span> /&gt;</span>. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Built using NextJS, Shadcn/UI, and Framer Motion.
            </p>
          </div>
        </motion.section>
      </div>
    </footer>
  );
};

export default Footer;