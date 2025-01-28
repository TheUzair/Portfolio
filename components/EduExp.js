"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import { ThemeContext } from "@/context/ThemeContext";

const EduExp = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const education = [
    { school: "GL Bajaj Group of Institutions", level: "Graduate (B.Tech)", years: "2020 - 2024" },
    { school: "Vidya Devi Jindal School", level: "Higher Secondary (Grade 12)", years: "2019 - 2020" },
    { school: "M D Jain Public School", level: "Secondary (Grade 10)", years: "2017 - 2018" },
  ];

  const experience = [
    { company: "KreupAI Technologies", role: "Full Stack Developer (Intern)", years: "Jan 2025 - Present" },
    { company: "Udemy", role: "Student", years: "Nov 26, 2021" },
  ];

  return (
    <>
      <section id="experience" className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'}`}>
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className={`text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Education & Work Experience
            </h1>
            <p className={`mt-6 text-xl lg:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Academic Roots and Professional Endeavors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-green-700 flex items-center">
                <span className="mr-3">📚</span> Education
              </h3>
              <ul className="mt-8 space-y-8">
                {education.map((edu, index) => (
                  <li key={index} className="group border-b border-gray-300 pb-6">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.school}
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-book transition-transform duration-300 group-hover:rotate-12"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"></path>
                      </svg>
                    </div>
                    <div className={`flex justify-between text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} pt-4`}>
                      <p>{edu.level}</p>
                      <p>{edu.years}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-orange-700 flex items-center">
                <span className="mr-3">💼</span> Work Experience
              </h3>
              <ul className="mt-8 space-y-8">
                {experience.map((exp, index) => (
                  <li key={index} className="group border-b border-gray-300 pb-6">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.company}
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-briefcase transition-transform duration-300 group-hover:rotate-12"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path>
                      </svg>
                    </div>
                    <div className={`flex justify-between text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} pt-4`}>
                      <p>{exp.role}</p>
                      <p>{exp.years}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EduExp;