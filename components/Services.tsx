"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import ProjectsSection from "./ProjectsSection";

interface ServiceCard {
  icon: string; // base name (s1/s2/s3)
  title: string;
  intro: string;
  items: { label: string; description: string }[];
  accent: "cyan" | "amber" | "navy";
}

const cards: ServiceCard[] = [
  {
    icon: "s1",
    title: "How I Can Help You Succeed",
    accent: "cyan",
    intro:
      "I deliver tailored, high-quality solutions for your business, ensuring fast delivery, exceptional performance, and a seamless user experience.",
    items: [
      { label: "Web & Mobile App Design", description: "Intuitive, visually appealing interfaces across platforms." },
      { label: "Fullstack Development", description: "End-to-end builds with seamless front/back integration." },
      { label: "API Development & Integration", description: "Secure APIs that connect systems and unlock features." },
      { label: "Performance Optimization", description: "Fast load times, smooth interactions, lean bundles." },
      { label: "Deployment & Maintenance", description: "Cloud setup, deployment, and ongoing reliability." },
    ],
  },
  {
    icon: "s2",
    title: "Technology Toolkit",
    accent: "amber",
    intro:
      "Equipped with industry-standard tools, I streamline workflows and enhance creativity to deliver exceptional designs and seamless development.",
    items: [
      { label: "Figma", description: "Collaborative UI/UX wireframes and high-fidelity designs." },
      { label: "GitHub", description: "Version control and collaboration for codebases & teams." },
      { label: "Postman", description: "API design and testing across the stack." },
      { label: "Canva", description: "Quick marketing and social-media assets." },
      { label: "Photoshop", description: "Image editing, retouching, and graphics." },
    ],
  },
  {
    icon: "s3",
    title: "What You Can Expect",
    accent: "navy",
    intro:
      "I craft solutions that go beyond visual appeal—they’re built for usability, scalability, and delivering real value.",
    items: [
      { label: "Clean & Functional", description: "Aesthetically pleasing yet purpose-driven interfaces." },
      { label: "Responsive & Device-Friendly", description: "Optimized for every screen, no compromises." },
      { label: "Efficient & Scalable", description: "Architectures designed for maintainability and growth." },
      { label: "User-Centered Approach", description: "Built around real user behavior and needs." },
      { label: "Accessible & Inclusive", description: "Adheres to a11y standards for everyone." },
    ],
  },
];

const accentRing: Record<ServiceCard["accent"], string> = {
  cyan: "hover:shadow-glow-cyan hover:border-brand-cyan-400/50",
  amber: "hover:shadow-glow-amber hover:border-brand-amber-400/50",
  navy: "hover:shadow-glow-soft hover:border-brand-navy-400/50",
};

const Services = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="surface-page relative">
      <motion.div
        id="services"
        className="container mx-auto px-5 pt-5 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="mb-20 min-h-screen pt-12">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h6 className="eyebrow">Services</h6>
            <h2 className="mx-auto mt-3 mb-6 max-w-[800px] text-4xl font-bold leading-[120%] tracking-[0.5px] lg:text-6xl">
              Empowering ideas through{" "}
              <span className="text-gradient">innovative development.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass rounded-2xl p-8 transition-all duration-300 ${accentRing[card.accent]}`}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand-soft p-3 shadow-glow-cyan">
                  <Image
                    alt={`${card.title} icon`}
                    width={48}
                    height={48}
                    src={isDarkMode ? `/${card.icon}-dark-quote.svg` : `/${card.icon}-light-quote.svg`}
                  />
                </div>
                <h6 className="mb-4 text-xl font-bold leading-tight">
                  {card.title}
                </h6>
                <p className="mb-5 leading-6 text-muted-foreground">
                  {card.intro}
                </p>
                <ul className="flex flex-col gap-3">
                  {card.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-brand" />
                      <span>
                        <span className="font-semibold">{item.label}:</span>{" "}
                        <span className="text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <ProjectsSection />
      </motion.div>
    </div>
  );
};

export default Services;
