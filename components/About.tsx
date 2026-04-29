"use client";

import React from "react";
import { motion } from "motion/react";
import { skills } from "@/lib/data";

const About = () => {
  return (
    <div className="surface-page relative">
      <div className="container mx-auto px-5 py-20 lg:px-20">
        <section id="about">
          <motion.div
            className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row"
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
              <h5 className="eyebrow">Fullstack Developer</h5>
              <h2 className="mb-6 mt-3 text-[40px] font-bold leading-[1.2] tracking-[0.5px] md:text-[54px]">
                That&rsquo;s <span className="text-gradient">Me!</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-lg leading-[1.8] text-muted-foreground md:text-xl lg:max-w-[50%]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&rsquo;m a full-stack Software Engineer skilled in{" "}
              <span className="text-foreground font-semibold">Next.js</span>,{" "}
              <span className="text-foreground font-semibold">React.js</span>,{" "}
              <span className="text-foreground font-semibold">Node.js</span>,
              and <span className="text-foreground font-semibold">PostgreSQL</span>,
              passionate about creating scalable, secure applications that
              enhance user experiences and drive innovation.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group glass rounded-xl py-5 px-6 text-center cursor-default
                           hover:border-brand-cyan-400/50 hover:shadow-glow-cyan transition-all"
              >
                <span className="text-base font-semibold group-hover:text-gradient transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
