"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const handleScroll = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const elementId = href.split("#")[1];
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(href);
    }
  };

  const handleDelayedNavigation = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    document.body.style.transition = "opacity 0.3s";
    document.body.style.opacity = "0";
    setTimeout(() => {
      router.push(href);
      document.body.style.opacity = "1";
    }, 300);
  };

  const navLinks = ["about", "services", "experience", "contact", "articles", "projects"];

  const socialLinks = [
    { label: "Leetcode", href: "https://leetcode.com/u/Mohd_Uzair", icon: Code2 },
    { label: "Github", href: "https://github.com/TheUzair", icon: Github },
    { label: "Linkedin", href: "https://linkedin.com/in/mohd-uzair-33b166204", icon: Linkedin },
  ];

  return (
    <footer className="surface-page relative overflow-hidden border-t border-border/40">
      <div className="blob blob-cyan w-[500px] h-[500px] -top-40 -left-20 opacity-15" />
      <div className="blob blob-amber w-[400px] h-[400px] bottom-0 right-0 opacity-15" style={{ animationDelay: "6s" }} />

      <div className="container mx-auto px-5 py-16 relative">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-12">
            <motion.h2
              className="text-3xl font-bold tracking-[0.5px] md:text-5xl xl:text-6xl"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Excited to Bring Ideas to Life?
            </motion.h2>
            <motion.h4
              className="relative inline-block text-gradient cursor-pointer text-3xl font-bold tracking-[0.5px] md:text-5xl xl:text-6xl mt-2 group"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bring Your Vision
              <span className="block h-1 w-0 transition-all duration-300 ease-in-out group-hover:w-full bg-gradient-brand rounded-full" />
            </motion.h4>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start gap-10 md:gap-0">
            <div className="flex flex-col items-start">
              <h2 className="font-medium italic text-lg sm:text-xl md:text-2xl lg:text-3xl lg:font-bold">
                &lt;Next<span className="text-gradient">Mode /&gt;</span>
              </h2>
              <p className="py-2 text-base lg:text-lg text-muted-foreground">
                Delhi - NCR, India
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const user = "mohujer90";
                  const domain = "gmail.com";
                  window.location.href = `mailto:${user}@${domain}`;
                }}
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-brand-cyan-500 dark:hover:text-brand-cyan-300 transition-colors"
                aria-label="Send email to Mohd Uzair"
              >
                <Mail className="h-5 w-5 text-brand-cyan-500" aria-hidden="true" />
                MOHUJER90&#64;GMAIL&#46;COM
              </a>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:shadow-glow-cyan hover:border-brand-cyan-400/50 transition-all"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 text-sm sm:text-base">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 3 }}
                >
                  <Link
                    target="_self"
                    className="text-muted-foreground hover:text-brand-cyan-500 dark:hover:text-brand-cyan-300 transition-colors font-medium"
                    href={`/${item === "contact" || item === "articles" || item === "projects"
                      ? item
                      : `#${item}`
                      }`}
                    onClick={(event) =>
                      item === "contact" || item === "articles" || item === "projects"
                        ? handleDelayedNavigation(event, `/${item}`)
                        : handleScroll(event, `#${item}`)
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="section-divider mt-12" />

          <div className="text-center mt-8 text-sm font-medium text-muted-foreground">
            <p>
              &copy; {currentYear}{" "}
              <span className="italic">
                &lt;Next<span className="text-gradient">Mode</span>/&gt;
              </span>{" "}
              All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Built with NextJS, Shadcn/UI, and Framer Motion.
            </p>
          </div>
        </motion.section>
      </div>
    </footer>
  );
};

export default Footer;
