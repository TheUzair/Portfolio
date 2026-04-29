"use client";

import { motion } from "framer-motion";

/**
 * Branded loader — three pulsing dots in cyan → cyan-amber → amber over a
 * navy backdrop blur, matching the rest of the brand palette.
 */
export default function Loading() {
  const dots = [
    { color: "#06b6d4", delay: 0 },     // brand-cyan-500
    { color: "#22d3ee", delay: 0.2 },   // brand-cyan-400
    { color: "#f59e0b", delay: 0.4 },   // brand-amber-500
  ];

  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy-950/60 backdrop-blur-md"
    >
      <div className="flex space-x-3">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="w-3.5 h-3.5 rounded-full shadow-glow-cyan"
            style={{ backgroundColor: dot.color }}
            animate={{ y: [0, -16, 0], scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
