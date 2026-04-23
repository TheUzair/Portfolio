"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTheme } from "@/context/ThemeContext";
import { faqItems } from "@/lib/data";

const FAQ = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section
      className={`py-12 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } min-h-screen`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <motion.h3
            className={`text-5xl lg:text-4xl font-bold mb-2 tracking-wide ${isDarkMode ? "text-white" : "text-black"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h3>
          <motion.p
            className={`text-3xl lg:text-7xl font-semibold my-10 tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
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
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger
                    className={`text-xl sm:text-3xl pb-8 ${isDarkMode
                      ? "text-white hover:text-red-600"
                      : "text-black hover:text-blue-600"
                      }  hover:no-underline transition-colors`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className={`mt-2 text-lg sm:text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
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
