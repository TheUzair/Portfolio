"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Articles = () => {
  const articles = [
    {
      date: "2024-06-07",
      readTime: "2 mins",
      title: "Introduction to React Hooks",
      link: "/articles/react-hooks",
    },
    {
      date: "2024-06-07",
      readTime: "1 min",
      title: "The Basics of JavaScript Closures",
      link: "/articles/javascript-closures",
    },
    {
      date: "2024-06-07",
      readTime: "1 min",
      title: "Understanding Asynchronous JavaScript: Promises and Async/Await",
      link: "/articles/async-await",
    },
    {
      date: "2024-06-05",
      readTime: "1 min",
      title: "Getting Started with Node.js",
      link: "/articles/nodejs",
    },
  ];

  return (
    <section className="surface-page relative overflow-hidden">
      <div className="blob blob-amber w-[420px] h-[420px] top-1/4 -left-20 opacity-20" />
      <div className="blob blob-cyan w-[360px] h-[360px] bottom-10 right-0 opacity-25" style={{ animationDelay: "5s" }} />

      <div className="min-h-screen container mx-auto flex flex-col lg:flex-row justify-between px-5 py-20 lg:px-20 relative">
        <div
          id="left-content"
          className="flex-shrink-0 max-w-lg lg:sticky lg:top-24 self-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="eyebrow">Articles</h5>
            <h2 className="mt-4 mb-12 text-5xl font-bold leading-[120%] lg:text-7xl">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <Link href="/articles">
              <Button
                variant="outline"
                className="group flex items-center gap-2 text-lg
                           border-2 border-brand-cyan-500/40 hover:bg-brand-cyan-500/10
                           hover:border-brand-cyan-500 hover:text-brand-cyan-600
                           dark:hover:text-brand-cyan-300 transition-colors px-6 py-5"
              >
                View All
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </motion.svg>
              </Button>
            </Link>
          </motion.div>
        </div>

        <div
          id="right-content"
          className="flex-grow lg:max-w-[55%] mt-16 lg:mt-0 lg:pl-12"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group mb-10 cursor-pointer border-b border-border/50 pb-8 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium leading-[130%] text-muted-foreground">
                {article.date} • {article.readTime}
              </p>
              <h3 className="mt-4 mb-5 text-2xl lg:text-3xl font-bold leading-tight group-hover:text-gradient transition-colors">
                {article.title}
              </h3>
              <Link href={article.link}>
                <div className="group/link flex items-center gap-2 text-base font-medium text-brand-cyan-600 dark:text-brand-cyan-400 hover:text-brand-amber-500 dark:hover:text-brand-amber-400 transition-colors lg:text-lg">
                  <span>Read the article</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="transition-transform duration-500 group-hover/link:translate-x-2"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </motion.svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
