"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Favourite Jome",
      role: "Customer Success Engineer",
      company: "Hashnode",
      feedback:
        "Abdullah was diligent and proactive in his work with me on a project. Learning a new technology wasn't a problem for him, and he is a community driver.",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      company: "TechCorp",
      feedback:
        "Working with Abdullah was an incredible experience. His dedication to solving complex problems and proactive communication stood out.",
    },
  ];

  return (
    <section className="surface-page py-20 relative overflow-hidden">
      <div className="blob blob-cyan w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-5 text-center relative">
        <h4 className="eyebrow">Testimonials</h4>
        <p className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-[0.5px]">
          Word on the <span className="text-gradient">Street</span>
        </p>

        <div className="mt-16 relative">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-2xl scale-95" aria-hidden="true" />
                      <Image
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=400&background=06b6d4&color=fff`}
                        alt={`Portrait of ${testimonial.name}`}
                        width={320}
                        height={320}
                        className="relative rounded-full ring-glow"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 text-left space-y-6 glass rounded-2xl p-8"
                  >
                    <Quote className="h-10 w-10 text-brand-cyan-500" aria-hidden="true" />
                    <p className="italic text-lg md:text-xl font-medium leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.feedback}&rdquo;
                    </p>
                    <div>
                      <p className="text-xl md:text-2xl font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm md:text-base text-brand-cyan-600 dark:text-brand-cyan-400 font-medium">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-4 right-1/4 transform translate-x-1/2 flex space-x-4">
              <CarouselPrevious>
                <button
                  aria-label="Previous testimonial"
                  className="p-3 bg-gradient-brand rounded-full shadow-glow-cyan hover:shadow-glow-amber transition-shadow"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              </CarouselPrevious>
              <CarouselNext>
                <button
                  aria-label="Next testimonial"
                  className="p-3 bg-gradient-brand rounded-full shadow-glow-cyan hover:shadow-glow-amber transition-shadow"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
