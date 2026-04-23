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
    ]
    
  return (
    <section className="bg-black text-white">
        <div className="min-h-screen container mx-auto flex flex-col lg:flex-row justify-between px-5 py-20 lg:px-20">
          <div
            id="left-content"
            className="flex-shrink-0 max-w-lg sticky top-20 self-start"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="bg-gradient-to-r from-purple-400 via-red-500 to-orange-600 bg-clip-text text-transparent text-2xl font-bold tracking-widest">
                ARTICLES
              </h5>
              <h2 className="mt-6 mb-12 text-5xl font-bold leading-[120%] lg:text-7xl">
                Latest Articles
              </h2>
              <Link href="/articles">
                <Button
                  variant="outline"
                  className="group flex items-center gap-2 border-white hover:bg-white text-black text-lg"
                >
                  View All
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    ></path>
                  </motion.svg>
                </Button>
              </Link>
            </motion.div>
          </div>

          <div
            id="right-content"
            className="flex-grow max-w-[50%] mt-16 lg:mt-0"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                className="group mb-16 cursor-pointer border-b border-gray-700 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2, 
                }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-medium leading-[130%] text-gray-400">
                  {article.date} • {article.readTime}
                </p>
                <h3 className="mt-6 mb-6 truncate text-3xl font-bold leading-tight group-hover:text-purple-400 lg:text-4xl">
                  {article.title}
                </h3>
                <Link href={article.link}>
                  <div className="group flex items-center gap-2 text-base text-white lg:text-lg">
                    <span>Read the article</span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      ></path>
                    </motion.svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Articles
