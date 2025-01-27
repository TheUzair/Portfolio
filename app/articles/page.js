"use client";

import React, { useState, useContext } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ThemeContext } from "@/context/ThemeContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const upcomingTopics = [
    "React Best Practices",
    "Next.js 15 Features",
    "Tailwind CSS Tips and Tricks",
    "JavaScript Performance Optimization",
    "Web Accessibility Guidelines",
    "State Management with Redux Toolkit",
    "Building Scalable REST APIs with Node.js",
    "GraphQL vs REST: When to Use What",
    "The Rise of Serverless Computing",
    "Introduction to TypeScript for JavaScript Developers",
    "Micro-Frontend Architecture Explained",
    "Creating Stunning Animations with Framer Motion",
    "Top VS Code Extensions for Developers",
    "SEO Optimization for React and Next.js Apps",
    "Testing React Applications with Jest and React Testing Library",
    "Using Web Sockets for Real-Time Apps",
    "Understanding Authentication and Authorization in Web Development",
    "Diving into Progressive Web Apps (PWAs)",
    "The Power of AI in Web Development: Tools and Libraries",
    "Exploring Docker for Simplified Development Workflows",
  ];

  const filteredTopics = upcomingTopics.filter((topic) =>
    topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main
        className={`container mx-auto px-4 py-8 text-center min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
      >
        <div className="text-center mb-8">
          <motion.h1
            className={`text-5xl lg:text-4xl font-bold mb-6 tracking-wide ${isDarkMode ? "text-white" : "text-black"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Articles 📚
          </motion.h1>
          <motion.p
            className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover insights, tips, and tricks to enhance your development journey.
            Stay tuned for fresh articles! 🚀✨
          </motion.p>
        </div>

        <Card
          className={`p-6 rounded-lg shadow-md mb-10
          ${isDarkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-br from-blue-50 to-white"
            }`}
        >
          <CardHeader>
            <motion.h2
              className="text-3xl font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Coming Soon! 🛠️
            </motion.h2>
          </CardHeader>
          <CardContent>
            <motion.p
              className="mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I&apos;m working hard to bring you valuable content. New articles
              will be live shortly.
            </motion.p>
            <motion.p
              className="text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Meanwhile, connect with me on social media or subscribe to my
              newsletter for updates! 📱✨
            </motion.p>
          </CardContent>
        </Card>

        <div className="max-w-lg mx-auto mb-10">
          <motion.h3
            className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Topics
          </motion.h3>
          <Input
            type="text"
            placeholder="Search topics..."
            className={`w-full px-4 py-2 rounded-full border shadow-sm focus:outline-none focus:ring-2 transition duration-200 ${isDarkMode
              ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-400"
              : "border-gray-300 focus:ring-blue-500"
              }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search topics"
          />
        </div>

        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {filteredTopics.map((topic, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out ${selectedTopic === topic
                  ? isDarkMode
                    ? "bg-blue-900 scale-105 ring-2 ring-blue-400 text-white"
                    : "bg-blue-100 scale-105 ring-2 ring-blue-400"
                  : isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
                    : "bg-white hover:bg-gray-100 hover:scale-105"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => setSelectedTopic(topic)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedTopic(topic)}
              >
                {topic}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className={`text-gray-500 ${isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            No topics match your search. Try another keyword. 🧐
          </motion.p>
        )}

        {selectedTopic && (
          <motion.div
            className={`mt-8 p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-blue-50"
              }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-2">Selected Topic: {selectedTopic}</h4>
            <p>Stay tuned for this exciting article coming soon! ✍️</p>
          </motion.div>
        )}
      </main >

      <FAQ />
      <Footer />
    </>
  );
};

export default Articles;