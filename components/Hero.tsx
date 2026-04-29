"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Uzair_CV.pdf";
    link.download = "Uzair_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="surface-page aurora relative">
      {/* Decorative blobs */}
      <div className="blob blob-cyan w-[420px] h-[420px] -top-20 -left-20" />
      <div className="blob blob-amber w-[360px] h-[360px] top-1/3 -right-24" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-5 pt-5 lg:px-20 min-h-[90vh] flex items-center relative">
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex-1 md:w-1/2"
          >
            <span className="eyebrow mb-4">Full-Stack Engineer · Delhi-NCR</span>
            <h1 className="mt-3 mb-4 text-4xl font-bold leading-[110%] md:text-5xl lg:text-6xl">
              {["Creating", "Fullstack", "Systems that Inspire and Deliver."].map((text, index) => (
                <span key={index} className="text-gradient">
                  {text}
                  <br />
                </span>
              ))}
            </h1>

            <p className="mb-8 text-lg lg:text-xl text-muted-foreground max-w-xl">
              Hi, I&apos;m Uzair! Based in Delhi-NCR, India, I craft fast,
              elegant solutions with sleek interfaces and powerful backend
              systems.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              {/* Primary CTA */}
              <a href="/contact" className="btn-offset rounded-md">
                <div className="h-[60px] w-[170px]" />
                <span className="btn-offset-inner h-[64px] w-[174px] text-lg rounded-md">
                  Reserve a Spot
                </span>
              </a>

              {/* CV Button */}
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  variant="outline"
                  onClick={downloadCV}
                  className="group text-base font-semibold px-6 py-6 flex items-center gap-2 justify-center
                             border-2 border-brand-cyan-500/40 text-foreground bg-background/40 backdrop-blur
                             hover:bg-brand-cyan-500/10 hover:border-brand-cyan-500 hover:text-brand-cyan-600
                             dark:hover:text-brand-cyan-300 transition-colors"
                >
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="transition-transform duration-500 group-hover:translate-x-2"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            className="flex-1 md:w-1/2 flex justify-center"
          >
            <div className="hidden md:block w-[400px] h-[400px] md:w-[530px] md:h-[530px] relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-2xl scale-95" aria-hidden="true" />
              <Image
                alt="Mohd Uzair — Full-Stack Developer"
                fetchPriority="high"
                fill
                sizes="(max-width: 768px) 0px, (max-width: 1200px) 530px, 530px"
                priority
                className="rounded-full object-cover ring-glow relative"
                src="/user.jpg?v=3"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
