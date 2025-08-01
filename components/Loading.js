"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex space-x-4">
        {/* Red Ball */}
        <motion.div
          className="w-6 h-6 bg-red-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0,
          }}
        />

        {/* Green Ball */}
        <motion.div
          className="w-6 h-6 bg-green-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        {/* Blue Ball */}
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
}
