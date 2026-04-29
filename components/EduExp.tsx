"use client";

import React from "react";
import { motion } from "motion/react";

const EduExp = () => {
  const education = [
    {
      school: "GL Bajaj Group of Institutions",
      level: "B.Tech in Computer Science",
      years: "2020 – 2024",
    },
    {
      school: "Vidya Devi Jindal School",
      level: "Higher Secondary (Grade 12, Science Stream)",
      years: "2019 – 2020",
    },
    {
      school: "M D Jain Public School",
      level: "Secondary (Grade 10)",
      years: "2017 – 2018",
    },
  ];

  const experience = [
    {
      company: "KreupAI Technologies",
      role: "Full Stack Developer",
      years: "Jul 2025 – Present",
      location: "Remote",
    },
    {
      company: "KreupAI Technologies",
      role: "Full Stack Developer (Intern)",
      years: "Jan 2025 – Jun 2025",
      location: "Remote",
    },
    {
      company: "Udemy",
      role: "Student – Full Stack Web Development & DevOps",
      years: "Nov 2021 – Present",
      location: "Online",
    },
  ];

  return (
    <section id="experience" className="surface-page py-20 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="blob blob-navy w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-4 lg:px-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Journey</span>
          <h1 className="mt-3 text-4xl lg:text-6xl font-bold leading-tight">
            Education &amp; <span className="text-gradient">Work Experience</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground">
            Academic roots and professional endeavors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold flex items-center gap-3 mb-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan-500/15 text-brand-cyan-500">
                📚
              </span>
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="group border-b border-border/60 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xl lg:text-2xl font-bold group-hover:text-gradient transition-colors">
                      {edu.school}
                    </h4>
                  </div>
                  <div className="flex justify-between text-sm lg:text-base text-muted-foreground pt-3 gap-4">
                    <p>{edu.level}</p>
                    <p className="whitespace-nowrap font-medium text-brand-cyan-600 dark:text-brand-cyan-400">
                      {edu.years}
                    </p>
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
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold flex items-center gap-3 mb-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-amber-500/15 text-brand-amber-500">
                💼
              </span>
              Work Experience
            </h3>
            <ul className="space-y-6">
              {experience.map((exp, index) => (
                <li
                  key={index}
                  className="group border-b border-border/60 pb-6 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xl lg:text-2xl font-bold group-hover:text-gradient-warm transition-colors">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex justify-between text-sm lg:text-base text-muted-foreground pt-3 gap-4">
                    <p>{exp.role}</p>
                    <p className="whitespace-nowrap font-medium text-brand-amber-600 dark:text-brand-amber-400">
                      {exp.years}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EduExp;
