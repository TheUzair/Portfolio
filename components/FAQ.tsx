"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";

const FAQ = () => {
  return (
    <section className="surface-page py-20 min-h-screen relative overflow-hidden">
      <div className="blob blob-navy w-[500px] h-[500px] bottom-0 right-0 opacity-15" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h3
            className="eyebrow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h3>
          <motion.p
            className="text-3xl lg:text-6xl font-bold mt-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 lg:p-10 max-w-6xl mx-auto">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl px-6 py-2 transition-all hover:border-brand-cyan-400/40 hover:shadow-glow-cyan"
            >
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0"
                >
                  <AccordionTrigger className="text-lg sm:text-xl font-semibold text-left hover:no-underline hover:text-gradient transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-base text-muted-foreground leading-relaxed pb-4"
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
