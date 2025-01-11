"use client";

import React, { useContext } from "react";
import { motion } from "motion/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ThemeContext } from "@/context/ThemeContext";

const faqItems = [
  { question: "What services do you offer as a full-stack developer?", answer: "I offer web development, API development, and consulting services." },
  { question: "What technologies are you proficient in?", answer: "I work with JavaScript, React, Next.js, Node.js, MongoDB, and more." },
  { question: "What is your experience with cloud services?", answer: "I work with AWS, Google Cloud, and platforms like Vercel for hosting and serverless functions." },
  { question: "How do you handle project deployment?", answer: "I use platforms like Vercel, Netlify, AWS, or Docker for efficient and scalable deployments." },
  { question: "What is your approach to user authentication?", answer: "I implement secure authentication using JWT, OAuth2, and services like Auth0 or Firebase Authentication." },
  { question: "How do you ensure the quality of your code?", answer: "I follow clean code principles, use automated testing, and conduct regular code reviews." },
  { question: "What is your experience with databases?", answer: "I have experience with both relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases." },
  { question: "How do you manage API integration in your projects?", answer: "I use RESTful APIs, GraphQL endpoints, and libraries like Axios or Fetch to handle integration efficiently." },
  { question: "How do you handle real-time functionality?", answer: "I use WebSockets, Socket.IO, and serverless solutions for real-time updates." },
  { question: "How do you ensure your applications are secure?", answer: "I implement encryption, validate inputs, sanitize data, and follow OWASP guidelines." },
  { question: "What tools do you use for UI development?", answer: "I use Tailwind CSS, Material-UI, and Figma for creating responsive and user-friendly interfaces." },
  { question: "What is your approach to debugging?", answer: "I use tools like Chrome DevTools, Postman, and logging libraries like Winston to debug efficiently." },
  { question: "How do you ensure application performance?", answer: "I optimize code, use caching strategies, and implement CDNs and lazy loading techniques." },
  { question: "How do you ensure scalability in your applications?", answer: "I write modular code, use database indexing, caching, and leverage cloud services for scalability." }
];

const FAQ = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  return (
    <section className={`py-12 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h3
            className={`text-5xl lg:text-4xl font-bold mb-2 tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h3>
          <motion.p
            className={`text-3xl lg:text-7xl font-semibold my-10 tracking-wide ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
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
                  <AccordionTrigger className={`text-xl sm:text-3xl pb-8 ${isDarkMode ? 'text-white hover:text-red-600' : 'text-black hover:text-blue-600'}  hover:no-underline transition-colors`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className={`mt-2 text-lg sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
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