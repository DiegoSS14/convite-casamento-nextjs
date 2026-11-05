"use client";

import React from "react";
import { motion } from "framer-motion";

interface MonogramProps {
  brideInitial?: string;
  groomInitial?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({
  brideInitial = "A",
  groomInitial = "M",
  size = "md",
  className = "",
}) => {
  const sizeMap = {
    sm: "w-16 h-24",
    md: "w-20 h-28",
    lg: "w-24 h-36",
  };

  const fontSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      aria-label={`Iniciais dos noivos: ${brideInitial} e ${groomInitial}`}
    >
      {/* Botanical Oval Frame */}
      <svg
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#A89885] stroke-current"
      >
        {/* Main Oval Ring */}
        <ellipse
          cx="50"
          cy="70"
          rx="38"
          ry="58"
          strokeWidth="1"
          strokeDasharray="280"
          strokeDashoffset="0"
          className="opacity-60"
        />

        {/* Top-Right Delicate Foliage */}
        <path
          d="M 62 20 C 65 14, 75 12, 78 8 C 76 13, 71 18, 67 22"
          fill="#A89885"
          className="opacity-70"
        />
        <path
          d="M 72 24 C 77 21, 84 22, 86 18 C 84 24, 78 27, 73 28"
          fill="#A89885"
          className="opacity-70"
        />
        <path
          d="M 68 33 C 74 32, 80 34, 83 31 C 80 36, 73 37, 69 36"
          fill="#A89885"
          className="opacity-70"
        />
        {/* Branch stem upper right */}
        <path
          d="M 52 14 Q 68 18 78 35"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="opacity-70"
        />

        {/* Bottom-Left Delicate Foliage */}
        <path
          d="M 38 120 C 35 126, 25 128, 22 132 C 24 127, 29 122, 33 118"
          fill="#A89885"
          className="opacity-70"
        />
        <path
          d="M 28 116 C 23 119, 16 118, 14 122 C 16 116, 22 113, 27 112"
          fill="#A89885"
          className="opacity-70"
        />
        <path
          d="M 32 107 C 26 108, 20 106, 17 109 C 20 104, 27 103, 31 104"
          fill="#A89885"
          className="opacity-70"
        />
        {/* Branch stem lower left */}
        <path
          d="M 48 126 Q 32 122 22 105"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="opacity-70"
        />
      </svg>

      {/* Couple Initials */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-serif-custom tracking-wider text-[#4A423A] leading-tight">
        <span className={`${fontSizes[size]} font-normal -mb-1`}>{brideInitial}</span>
        <span className={`${fontSizes[size]} font-normal`}>{groomInitial}</span>
      </div>
    </motion.div>
  );
};
