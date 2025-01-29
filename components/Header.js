"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    if (pathname === "/") {
      router.replace("/#home");
    }
  }, [pathname, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveSection(window.location.hash || "#home");
    }
  }, []);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
    { name: "Reserve a Spot", href: "/contact" },
  ];

  const handleScroll = (event, href) => {
    event.preventDefault();
    const elementId = href.split("#")[1];
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    } else {
      router.push(href);
    }
  };

  const handleDelayedNavigation = (event, href) => {
    event.preventDefault();
    document.body.style.transition = "opacity 0.3s";
    document.body.style.opacity = "0";

    setTimeout(() => {
      router.push(href);
      document.body.style.opacity = "1";
    }, 300);
  };

  return (
    <div
      className={`container mx-auto px-5 pt-5 lg:px-20 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <motion.nav
        className="flex items-center justify-between pb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          className="text-xs font-medium italic sm:text-base md:text-2xl lg:font-bold"
          href="/#home"
        >
          &lt;Next
          <span
            className={`bg-clip-text text-transparent ${isDarkMode
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                : "bg-gradient-to-r from-blue-400 via-green-500 to-blue-600"
              }`}
          >
            Mode /&gt;
          </span>
        </Link>

        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-2"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className={`w-48 flex flex-col space-y-2 p-2 rounded-md shadow-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
            >
              {navItems.map((item) => (
                <DropdownMenuItem asChild key={item.name} className="w-full">
                  <a
                    href={item.href}
                    onClick={(event) =>
                      item.href.startsWith("/#")
                        ? handleScroll(event, item.href)
                        : handleDelayedNavigation(event, item.href)
                    }
                    className={`block w-full px-4 py-2 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${activeSection === item.href ? "text-blue-500 underline" : ""
                      }`}
                  >
                    {item.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden gap-6 font-medium lg:flex xl:gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(event) =>
                item.href.startsWith("/#")
                  ? handleScroll(event, item.href)
                  : handleDelayedNavigation(event, item.href)
              }
              className={`font-bold my-5 transition-opacity duration-75 hover:opacity-50 ${activeSection === item.href ? "text-blue-500 underline" : ""
                }`}
            >
              {item.name}
            </a>
          ))}

          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </Button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;