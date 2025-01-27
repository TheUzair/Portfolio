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
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Articles 📚
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover insights, tips, and tricks to enhance your development
          journey. Stay tuned for fresh articles! 🚀✨
        </motion.p>

        <Card
          className={`p-6 rounded-lg shadow-md mb-10 ${isDarkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-br from-blue-50 to-white"
            }`}
        >
          <CardHeader
            className="text-3xl font-semibold mb-4"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Coming Soon! 🛠️
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

        <section className="mb-10">
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Topics
          </motion.h3>
          <div className="max-w-lg mx-auto mb-6">
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
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {filteredTopics.map((topic, index) => (
                <motion.li
                  key={index}
                  className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-in-out ${selectedTopic === topic
                      ? isDarkMode
                        ? "bg-blue-900 scale-105 ring-2 ring-blue-400 text-white"
                        : "bg-blue-100 scale-105 ring-2 ring-blue-400"
                      : isDarkMode
                        ? "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105"
                        : "bg-white hover:bg-gray-100 hover:scale-105"
                    }`}
                  onClick={() => setSelectedTopic(topic)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedTopic(topic)
                  }
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {topic}
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.p
              className="text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No topics match your search. Try another keyword. 🧐
            </motion.p>
          )}
        </section>

        {selectedTopic && (
          <motion.div
            className={`mb-8 p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-blue-50"
              }`}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardHeader className="text-xl font-semibold mb-2">
              Selected Topic: {selectedTopic}
            </CardHeader>
            <CardContent>
              <p>Stay tuned for this exciting article coming soon! ✍️</p>
            </CardContent>
          </motion.div>
        )}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/newsletter" passHref>
            <Button
              as="a"
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              aria-label="Subscribe to my newsletter"
            >
              Subscribe to My Newsletter 📧
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/mohd-uzair-33b166204" passHref>
            <Button
              as="a"
              className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-700 transition-all duration-200"
              aria-label="Connect with me on LinkedIn"
            >
              Connect with Me on LinkedIn 🔗
            </Button>
          </Link>
        </div>
      </main>
      <FAQ />
      <Footer />
    </>
  );
};

export default Articles;