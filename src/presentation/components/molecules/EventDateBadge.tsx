"use client";

import React from "react";
import { motion } from "framer-motion";
import { BotanicalDivider } from "../atoms/BotanicalDivider";

interface EventDateBadgeProps {
  day: string;
  month: string;
  year: string;
  className?: string;
}

export const EventDateBadge: React.FC<EventDateBadgeProps> = ({
  day,
  month,
  year,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className={`text-center ${className}`}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-5 text-sm sm:text-base font-serif-custom tracking-[0.25em] text-[#4A423A] uppercase">
        <span className="font-normal">{day}</span>
        <span className="w-[1px] h-3.5 bg-[#C5BAAF]" aria-hidden="true" />
        <span className="font-medium tracking-[0.3em]">{month}</span>
        <span className="w-[1px] h-3.5 bg-[#C5BAAF]" aria-hidden="true" />
        <span className="font-normal">{year}</span>
      </div>

      <BotanicalDivider className="mt-3 mb-1" />
    </motion.div>
  );
};
