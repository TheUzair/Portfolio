"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading";
import { useNavigationLoader } from "@/hooks/useNavigationLoader";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("/");
  const [isClient, setIsClient] = useState(false);
  const { isLoading, startLoading } = useNavigationLoader();

  useEffect(() => {
    const updateActiveSection = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;

        if (pathname === "/") {
          if (hash) {
            setActiveSection(`/${hash}`);
          } else {
            setActiveSection("/");
          }
        } else {
          setActiveSection(pathname);
        }
      }
    };

    window.addEventListener("hashchange", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (href) => {
    startLoading(href);
    router.push(href);
  };

  const handleScroll = (event, href) => {
    event.preventDefault();
    if (href === "/") {
      if (pathname !== "/") {
        handleNavigation("/");
      }
      setActiveSection("/");
      return;
    }

    const elementId = href.split("#")[1];
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, null, href);
      setActiveSection(href);
    } else if (pathname !== href.split("#")[0]) {
      handleNavigation(href);
    }
  };

  const handleDelayedNavigation = (event, href) => {
    event.preventDefault();
    if (pathname !== href) {
      startLoading(href);
      setTimeout(() => {
        router.push(href);
      }, 100);
    }
  };

  const isActiveNavItem = (item) => {
    if (!isClient) return false;

    if (item.href === "/") {
      return pathname === "/" && !window.location.hash;
    }
    return activeSection === item.href;
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
    { name: "Reserve a Spot", href: "/contact" },
  ];

  return (
    <>
      {isLoading && <Loading />}
      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
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
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                } else {
                  startLoading("/");
                }
              }}
            >
              &lt;Next
              <span
                className={`bg-clip-text text-transparent ${
                  isDarkMode
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
                  className={`w-48 flex flex-col space-y-2 p-2 rounded-md shadow-lg ${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {navItems.map((item) => (
                    <DropdownMenuItem
                      asChild
                      key={item.name}
                      className="w-full"
                    >
                      <a
                        href={item.href}
                        onClick={(event) => {
                          if (
                            pathname === item.href ||
                            (item.href === "/" && pathname === "/") ||
                            (item.href.startsWith("/#") && pathname === "/")
                          ) {
                            event.preventDefault();
                            if (item.href.startsWith("/#")) {
                              handleScroll(event, item.href);
                            }
                            return;
                          }
                          item.href === "/" || item.href.startsWith("/#")
                            ? handleScroll(event, item.href)
                            : handleDelayedNavigation(event, item.href);
                        }}
                        className={`block w-full px-4 py-2 text-left rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          isActiveNavItem(item) ? "text-blue-600 underline" : ""
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
                  onClick={(event) => {
                    if (
                      pathname === item.href ||
                      (item.href === "/" && pathname === "/") ||
                      (item.href.startsWith("/#") && pathname === "/")
                    ) {
                      event.preventDefault();
                      if (item.href.startsWith("/#")) {
                        handleScroll(event, item.href);
                      }
                      return;
                    }
                    item.href === "/" || item.href.startsWith("/#")
                      ? handleScroll(event, item.href)
                      : handleDelayedNavigation(event, item.href);
                  }}
                  className={`font-bold my-5 transition-opacity duration-75 hover:opacity-50 ${
                    isActiveNavItem(item) ? "text-blue-600 underline" : ""
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex items-center justify-center">
                        {isDarkMode ? (
                          <Sun className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <Moon className="h-6 w-6 text-gray-700" />
                        )}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isDarkMode ? "Brighten Up" : "Embrace the Dark"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Button>
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
};

export default Header;
