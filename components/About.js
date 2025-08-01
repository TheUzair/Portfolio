"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ThemeContext } from "@/context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-5 py-16 lg:px-20">
        <section id="about">
          <motion.div
            className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5
                className={`bg-clip-text text-transparent text-[22px] font-bold tracking-[4px] uppercase ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                    : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
                }`}
              >
                Fullstack Developer
              </h5>
              <h2 className="mb-6 mt-2 text-[40px] font-bold leading-[1.3] tracking-[0.5px] md:text-[54px]">
                That’s Me!
              </h2>
            </motion.div>

            <motion.p
              className={`text-xl leading-[1.8] ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } md:text-2xl lg:max-w-[50%]`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I’m a full-stack Software Engineer skilled in{" "}
              <span
                className={`${
                  isDarkMode ? "text-blue-400" : "text-black"
                } font-medium`}
              >
                Next.js
              </span>
              ,{" "}
              <span
                className={`${
                  isDarkMode ? "text-blue-400" : "text-black"
                } font-medium`}
              >
                React.js
              </span>
              ,{" "}
              <span
                className={`${
                  isDarkMode ? "text-blue-400" : "text-black"
                } font-medium`}
              >
                Node.js
              </span>
              , and{" "}
              <span
                className={`${
                  isDarkMode ? "text-blue-400" : "text-black"
                } font-medium`}
              >
                PostgreSQL
              </span>
              , passionate about creating scalable, secure applications that
              enhance user experiences and drive innovation.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          {/* <motion.div
          className="mt-12 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src="/profile-image.jpg"
            alt="About Me"
            width={400}
            height={400}
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </motion.div> */}

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              "Next.js",
              "React.js",
              "Node.js",
              "JavaScipt",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "GCP",
            ].map((skill, index) => (
              <div
                key={index}
                className={`flex items-center justify-center rounded-md py-4 px-6 shadow-md ${
                  isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                <span className="text-lg font-semibold">{skill}</span>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
