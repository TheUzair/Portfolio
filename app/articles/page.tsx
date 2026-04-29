"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, Sparkles, Linkedin, Mail } from "lucide-react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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
    <div className="surface-page relative overflow-hidden min-h-screen">
      <div className="blob blob-cyan w-[420px] h-[420px] -top-10 left-1/3 opacity-20" />
      <div className="blob blob-amber w-[360px] h-[360px] top-1/2 -right-20 opacity-15" style={{ animationDelay: "5s" }} />

      <Header />
      <main className="container mx-auto px-4 py-12 text-center relative">
        <div className="text-center mb-12">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Library
          </motion.span>
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mt-3 mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Articles <span className="text-gradient">📚</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover insights, tips, and tricks to enhance your development journey.
            Stay tuned for fresh articles! 🚀
          </motion.p>
        </div>

        <motion.div
          className="glass rounded-2xl p-8 mb-12 max-w-3xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-amber-500/15 text-brand-amber-500">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
          </div>
          <p className="mb-2 text-muted-foreground">
            I&apos;m working hard to bring you valuable content. New articles will be live shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Meanwhile, connect with me on social media or subscribe to my newsletter for updates!
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Upcoming <span className="text-gradient">Topics</span>
          </h3>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search topics..."
              className="w-full pl-11 pr-4 py-2 rounded-full bg-background/60 border-border/60 backdrop-blur focus-visible:ring-brand-cyan-500/40 focus-visible:border-brand-cyan-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search topics"
            />
          </div>
        </div>

        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {filteredTopics.map((topic, index) => (
              <motion.div
                key={index}
                className={`glass p-4 rounded-xl cursor-pointer transition-all duration-300 ${selectedTopic === topic
                    ? "border-brand-cyan-400/60 shadow-glow-cyan scale-[1.02]"
                    : "hover:border-brand-cyan-400/40 hover:shadow-glow-cyan hover:scale-[1.01]"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedTopic(topic)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedTopic(topic)}
              >
                <span className="text-sm md:text-base font-medium">{topic}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            No topics match your search. Try another keyword. 🧐
          </motion.p>
        )}

        {selectedTopic && (
          <motion.div
            className="mt-10 glass rounded-2xl p-6 max-w-2xl mx-auto text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-2">
              Selected Topic: <span className="text-gradient">{selectedTopic}</span>
            </h4>
            <p className="text-muted-foreground">Stay tuned for this exciting article coming soon! ✍️</p>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link href="/newsletter">
            <Button
              className="bg-gradient-brand text-white px-6 py-6 rounded-full shadow-glow-cyan hover:shadow-glow-amber transition-all gap-2"
              aria-label="Subscribe to my newsletter"
            >
              <Mail className="h-4 w-4" />
              Subscribe to Newsletter
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/mohd-uzair-33b166204" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-6 py-6 rounded-full border-2 border-brand-cyan-500/40 hover:bg-brand-cyan-500/10 hover:border-brand-cyan-500 transition-colors gap-2"
              aria-label="Connect with me on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </Link>
        </div>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Articles;
