"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"
import Image from "next/image";
import { Card } from "@/components/ui/card"
import ProjectsSection from "./ProjectsSection";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="container mx-auto px-5 pt-5 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="mb-20 min-h-screen">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h6 className="bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600 mb-4 text-center text-xl font-bold">
            SERVICES
          </h6>
          <h2 className="mx-auto mb-10 max-w-[800px] text-center text-4xl font-bold leading-[120%] tracking-[0.5px] lg:text-6xl">
            Empowering ideas through innovative development.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              alt="services icon 1"
              width={70}
              height={70}
              src="/s1-light-quote.svg"
              className="mb-4"
            />
            <Card className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <motion.h6
                className="mb-6 text-xl font-bold leading-[110%] text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                How I Can Help You Succeed
              </motion.h6>
              <motion.p
                className="mb-4 text-gray-600 leading-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I deliver tailored, high-quality solutions for your business, ensuring fast delivery, exceptional performance, and a seamless user experience. Here&apos;s how I add value:
              </motion.p>
              <motion.ul
                className="inline-flex flex-col gap-3 pl-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  { title: "Web and Mobile App Design", description: "Creating intuitive and visually appealing interfaces for both web and mobile platforms." },
                  { title: "Fullstack Development", description: "Providing end-to-end development, ensuring seamless integration between the front-end and back-end with latest technologies." },
                  { title: "API Development & Integration", description: "Designing and integrating secure APIs to connect various systems and enhance functionality." },
                  { title: "Performance Optimization", description: "Ensuring your application runs smoothly with optimal load times and responsiveness." },
                  { title: "Deployment & Maintenance", description: "Setting up cloud infrastructure, deploying applications, and providing ongoing support for reliability." },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    className="list-disc font-bold text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-gray-800">{service.title}:</span> <span className="font-normal text-gray-600">{service.description}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              alt="services icon 2"
              width={70}
              height={70}
              src="/s2-light-quote.svg"
              className="mb-4"
            />
            <Card className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <motion.h6
                className="mb-6 text-xl font-bold leading-[110%] text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Technology Toolkit
              </motion.h6>
              <motion.p
                className="mb-4 text-gray-600 leading-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Equipped with industry-standard tools, I streamline workflows and enhance creativity to deliver exceptional designs and seamless development.
              </motion.p>
              <motion.ul
                className="inline-flex flex-col gap-3 pl-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  { app: "Figma", description: "Collaborative design tool for UI/UX wireframes, prototypes, and high-fidelity designs." },
                  { app: "Sketch", description: "Vector-based design tool for creating clean, responsive layouts." },
                  { app: "Webflow", description: "Web design and development platform for building responsive websites visually." },
                  { app: "Canva", description: "Quick and versatile tool for creating marketing and social media assets." },
                  { app: "Photoshop", description: "Advanced tool for image editing, retouching, and creating graphics." },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="list-disc font-bold text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-gray-800">{item.app}:</span>{" "}
                    <span className="font-normal text-gray-600">{item.description}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              alt="services icon 3"
              width={70}
              height={70}
              src="/s3-light-quote.svg"
              className="mb-4"
            />
            <Card className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <motion.h6
                className="mb-6 text-xl font-bold leading-[110%] text-gray-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What You Can Expect
              </motion.h6>
              <motion.p
                className="mb-4 text-gray-600 leading-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                I craft solutions that go beyond visual appeal—they’re built for usability, scalability, and delivering real value. Here’s what you can expect:
              </motion.p>
              <motion.ul
                className="inline-flex flex-col gap-3 pl-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  { expectation: "Clean and Functional", description: "Designs that are aesthetically pleasing, yet purpose-driven, ensuring seamless user interaction." },
                  { expectation: "Responsive and Device-Friendly", description: "Experiences optimized for every device, from mobile to desktop, without compromising performance." },
                  { expectation: "Efficient and Scalable", description: "Code and architectures that are carefully designed for maintainability and future growth." },
                  { expectation: "User-Centered Approach", description: "Every feature is designed with a extensive understanding of user behavior and needs." },
                  { expectation: "Accessible and Inclusive", description: "Designs and interfaces that adhere to accessibility standards, ensuring usability for all." },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="list-disc font-bold text-gray-700"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-gray-800">{item.expectation}:</span>{" "}
                    <span className="font-normal text-gray-600">{item.description}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>
          </motion.div>

        </div>
      </section>

      <ProjectsSection />

    </motion.div>

  );
};

export default Services;