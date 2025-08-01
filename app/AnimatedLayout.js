"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigationLoader } from "@/hooks/useNavigationLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import EduExp from "@/components/EduExp";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function AnimatedLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const { isLoading } = useNavigationLoader();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // Splash duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Initial Splash Animation */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex space-x-4">
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Loading Indicator */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Hero />
          <Services />
          <About />
          <EduExp />
          <FAQ />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
