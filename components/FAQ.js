"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqItems = [
  { question: "What services do you offer as a fullstack developer?", answer: "I offer web development, mobile app development, and consulting services." },
  { question: "How do you ensure the quality of your code?", answer: "I implement best practices, automated testing, and code reviews." },
  { question: "What is your experience with cloud services?", answer: "I work with AWS, Azure, and Google Cloud for deploying applications and services." },
  { question: "How do you manage version control in your projects?", answer: "I use Git and GitHub for version control and collaboration." },
  { question: "What is your approach to testing and debugging?", answer: "I follow TDD practices and use tools like Jest, Cypress, and Chrome DevTools." },
  { question: "Do you offer post-launch support?", answer: "Yes, I offer maintenance and updates post-launch to ensure continued functionality." },
  { question: "How do you handle project timelines and deadlines?", answer: "I use agile methodologies and tools like Jira to manage timelines and ensure timely delivery." },
  { question: "Can you work with existing codebases?", answer: "Yes, I am experienced in analyzing and working with existing codebases to add features or make improvements." },
  { question: "What is your experience with database management?", answer: "I have experience with both SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB." },
  { question: "How do you stay updated with the latest technologies?", answer: "I regularly attend workshops, webinars, and follow industry blogs to stay updated with the latest trends and technologies." },
  { question: "What is your approach to security in web applications?", answer: "I follow best practices for security, including input validation, encryption, and regular security audits." },
  { question: "How do you handle client feedback and revisions?", answer: "I maintain open communication with clients and incorporate feedback through iterative development processes." },
  { question: "What is your approach to creating user-centered designs?", answer: "I prioritize user research and iterative design practices." },
  { question: "What technologies and tools do you use in your projects?", answer: "I use Next.js, TypeScript, Tailwind CSS, and Node.js." },
];

const FAQ = () => {
  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h3
            className="text-5xl lg:text-4xl font-bold text-black mb-2 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h3>
          <motion.p
            className="text-3xl lg:text-7xl font-semibold my-10 text-gray-800 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-b border-gray-300">
                  <AccordionTrigger className="text-xl sm:text-3xl pb-8 text-black hover:text-blue-600 hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="mt-2 text-gray-600 text-lg sm:text-xl"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;