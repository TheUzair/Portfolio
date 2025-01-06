"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="container mx-auto px-5 py-20 lg:px-20">
      <section id="about">
        <motion.div
          className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600 text-[22px] font-bold tracking-[4px] uppercase">
              Fullstack Developer
            </h5>
            <h2 className="mb-6 mt-2 text-[40px] font-bold leading-[1.3] tracking-[0.5px] md:text-[54px]">
              That’s Me!
            </h2>
          </motion.div>

          <motion.p
            className="text-xl leading-[1.8] text-gray-600 md:text-2xl lg:max-w-[50%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          I’m a full-stack Software Engineer skilled in <span className="font-medium text-black">React.js</span>, <span className="font-medium text-black">Next.js</span>, <span className="font-medium text-black">Node.js</span>, and <span className="font-medium text-black">MySQL</span> passionate about creating scalable, secure applications that enhance user experiences and drive innovation.
          </motion.p>
        </motion.div>

        {/* <div
          className="grid gap-6 lg:gap-8"
          style={{ opacity: 1 }}
        >
          <Image
            alt="Main Image"
            loading="lazy"
            width="1020"
            height="1020"
            decoding="async"
            className="col-span-2 w-full rounded-lg shadow-lg xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:aspect-[9/16] xl:h-full xl:object-cover"
            src={null}
          />
          <Image
            alt="Secondary Image"
            loading="lazy"
            width="1020"
            height="1020"
            decoding="async"
            className="col-span-2 w-full rounded-lg shadow-lg xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-3 xl:h-full xl:w-auto xl:object-cover"
            src={null}
          />
          <Image
            alt="Additional Image 1"
            loading="lazy"
            width="1280"
            height="960"
            decoding="async"
            className="col-span-1 w-full rounded-lg shadow-lg xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-end-2 xl:h-full xl:w-auto xl:object-cover"
            src={null}
          />
          <Image
            alt="Additional Image 2"
            loading="lazy"
            width="1280"
            height="960"
            decoding="async"
            className="col-span-1 w-full rounded-lg shadow-lg xl:col-span-1 xl:col-start-4 xl:row-start-2 xl:row-end-3 xl:h-full xl:w-auto xl:object-cover"
            src={null}
          />
        </div> */}
      </section>
    </div>

  );
};

export default About;