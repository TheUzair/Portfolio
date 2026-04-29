"use client";

import React, { useEffect, useState } from "react";
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
import { useTheme } from "@/context/ThemeContext";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading";
import { useNavigationLoader } from "@/hooks/useNavigationLoader";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
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

  const handleNavigation = (href: string) => {
    startLoading(href);
    router.push(href);
  };

  const handleScroll = (event: React.MouseEvent, href: string) => {
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
      window.history.replaceState(null, "", href);
      setActiveSection(href);
    } else if (pathname !== href.split("#")[0]) {
      handleNavigation(href);
    }
  };

  const handleDelayedNavigation = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    if (pathname !== href) {
      startLoading(href);
      setTimeout(() => {
        router.push(href);
      }, 100);
    }
  };

  interface NavItem { name: string; href: string; }

  const isActiveNavItem = (item: NavItem) => {
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
      <div className="surface-page sticky top-0 z-40 border-b border-border/40 backdrop-blur-xl bg-[hsl(var(--background)/0.75)]">
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
              <span className="text-gradient">Mode /&gt;</span>
            </Link>

            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-full hover:bg-brand-cyan-500/10 mr-2"
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-brand-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="h-6 w-6 text-brand-navy-700" aria-hidden="true" />
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
                  className="w-48 flex flex-col space-y-2 p-2 rounded-md shadow-glow-soft glass-strong"
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
                        className={`block w-full px-4 py-2 text-left rounded-md hover:bg-brand-cyan-500/10 transition-colors ${isActiveNavItem(item) ? "text-gradient font-semibold" : ""
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
                  className={`relative font-semibold my-5 transition-colors hover:text-brand-cyan-500 dark:hover:text-brand-cyan-300 ${isActiveNavItem(item)
                    ? "text-gradient after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-brand after:rounded-full"
                    : ""
                    }`}
                >
                  {item.name}
                </a>
              ))}

              <Button
                variant="ghost"
                onClick={toggleTheme}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                className="p-2 rounded-full hover:bg-brand-cyan-500/10"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex items-center justify-center">
                        {isDarkMode ? (
                          <Sun className="h-6 w-6 text-brand-amber-400" />
                        ) : (
                          <Moon className="h-6 w-6 text-brand-navy-700" />
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
