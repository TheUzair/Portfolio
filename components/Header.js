"use client";

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
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container mx-auto px-5 pt-5 lg:px-20">
      <motion.nav
        className="flex items-center justify-between pb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          className="text-xs font-medium italic sm:text-base md:text-2xl lg:font-bold"
          href="/"
        >
          &lt;Next
          <span className="bg-gradient-to-r from-blue-400 via-green-500 bg-clip-text text-transparent to-blue-600">
            Mode /&gt;
          </span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/#about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/#services">Services</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/articles">Articles</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact">Reserve a Spot</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden gap-6 font-medium lg:flex xl:gap-8 items-center">
          <Link
            className="font-bold my-5 transition-opacity duration-75 hover:opacity-50"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="font-bold my-5 transition-opacity duration-75 hover:opacity-50"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="font-bold my-5 transition-opacity duration-75 hover:opacity-50"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="font-bold my-5 transition-opacity duration-75 hover:opacity-50"
            href="/articles"
          >
            Articles
          </Link>
          <Link
            className="font-bold my-5 flex items-center gap-3 transition-opacity duration-75 hover:opacity-50"
            href="/contact"
          >
            <span>Reserve a Spot</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
          </Link>

          <Button variant="ghost" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;