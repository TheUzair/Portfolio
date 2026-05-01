"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon, ArrowUp } from "lucide-react";
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

  // ── Headroom (hide-on-scroll-down / show-on-scroll-up) ──────────────────
  const [isHidden, setIsHidden] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);

  // Measure header height so the spacer div always matches
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Hide when scrolling down past threshold; reveal on any upward scroll
  useEffect(() => {
    const HIDE_THRESHOLD = 80; // px — don't hide until past this point
    const DELTA = 6;           // px — minimum movement to trigger state change

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < HIDE_THRESHOLD) {
        setIsHidden(false);
      } else if (delta > DELTA) {
        setIsHidden(true);  // scrolling down
      } else if (delta < -DELTA) {
        setIsHidden(false); // scrolling up
      }

      setShowScrollTop(currentY > 300);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // ────────────────────────────────────────────────────────────────────────

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
      <motion.div
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-40 w-full border-b border-border/40 backdrop-blur-xl bg-[hsl(var(--background)/0.75)]"
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-5 pt-5 lg:px-20">
          <motion.nav
            className="flex items-center justify-between pb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="group inline-flex items-center gap-2 text-base font-bold tracking-tight sm:text-lg md:text-2xl"
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                } else {
                  startLoading("/");
                }
              }}
              aria-label="Mohd Uzair — home"
            >
              <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-gradient-brand text-white text-sm sm:text-base font-extrabold shadow-glow-cyan group-hover:shadow-glow-amber transition-shadow">
                MU
              </span>
              <span className="leading-none">
                Mohd <span className="text-gradient">Uzair</span>
              </span>
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
      </motion.div>
      {/* Spacer: reserves the header's height so page content isn't hidden underneath */}
      <div style={{ height: headerHeight }} aria-hidden="true" />

      {/* Scroll-to-top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        initial={false}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.7, pointerEvents: showScrollTop ? "auto" : "none" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand shadow-glow-cyan hover:shadow-glow-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan-500 transition-shadow"
      >
        <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.5} />
      </motion.button>
    </>
  );
};

export default Header;
