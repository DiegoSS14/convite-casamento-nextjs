"use client";

import React from "react";
import { motion } from "framer-motion";

interface CoupleHeaderProps {
  brideName: string;
  groomName: string;
  subtitle?: string;
  className?: string;
}

export const CoupleHeader: React.FC<CoupleHeaderProps> = ({
  brideName,
  groomName,
  subtitle = "Casamento",
  className = "",
}) => {
  return (
    <div className={`text-center select-none ${className}`}>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[11px] md:text-xs font-sans-custom uppercase tracking-[0.35em] text-[#8F7E6D] mb-3"
      >
        {subtitle}
      </motion.p>

      {/* Bride Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-serif-custom text-3xl sm:text-4xl md:text-5xl tracking-[0.18em] text-[#332B25] uppercase leading-none font-normal"
      >
        {brideName}
      </motion.h1>

      {/* Ampersand / 'y' in script */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="my-1 sm:my-2"
      >
        <span className="font-script-custom text-3xl sm:text-4xl text-[#A69480] italic leading-none block -rotate-6">
          &
        </span>
      </motion.div>

      {/* Groom Name */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-serif-custom text-3xl sm:text-4xl md:text-5xl tracking-[0.18em] text-[#332B25] uppercase leading-none font-normal"
      >
        {groomName}
      </motion.h2>
    </div>
  );
};
