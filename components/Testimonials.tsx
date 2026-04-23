"use client"
import React from "react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Favourite Jome",
      role: "Customer Success Engineer",
      company: "Hashnode",
      feedback:
        "Abdullah was diligent and proactive in his work with me on a project. Learning a new technology wasn’t a problem for him, and he is a community driver.",
      // image: "/images/testimonial.jpg", // Replace with actual image path
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      company: "TechCorp",
      feedback:
        "Working with Abdullah was an incredible experience. His dedication to solving complex problems and proactive communication stood out.",
      // image: "/images/testimonial2.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center" style={{ opacity: 1, transform: 'none' }}>
        {/* Section Title */}
        <h4 className="bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600 mb-4 text-lg md:text-xl font-bold tracking-[4px] uppercase">
          Testimonials
        </h4>
        <p className="text-[28px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] tracking-[0.5px]">
          Word on the Street
        </p>

        {/* Carousel Section */}
        <div className="mt-12 relative">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                >
                  {/* Testimonial Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex justify-center"
                  >
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=400`}
                      alt={`Portrait of ${testimonial.name}`}
                      width={400}
                      height={400}
                      className="rounded-full border border-gray-300 shadow-lg"
                    />
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 text-left space-y-6"
                  >
                    {/* Quote Icon */}
                    <Image
                      alt="Quote Icon"
                      width={48}
                      height={48}
                      src="/fquote.svg"
                      className="h-8 w-8"
                    />
                    {/* Feedback */}
                    <p className="italic text-lg md:text-2xl font-bold text-gray-700 leading-relaxed">
                      {testimonial.feedback}
                    </p>
                    {/* Testimonial Author */}
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-base md:text-lg">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <div className="absolute bottom-4 right-1/4 transform translate-x-1/2 flex space-x-4">
              <CarouselPrevious>
                <button className="p-3 bg-black shadow-lg rounded-full hover:bg-gray-700 transition">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              </CarouselPrevious>
              <CarouselNext>
                <button className="p-3 bg-black shadow-lg rounded-full hover:bg-gray-700 transition">
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
