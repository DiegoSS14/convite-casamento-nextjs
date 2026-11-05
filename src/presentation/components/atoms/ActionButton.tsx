"use client";

import React from "react";
import { motion } from "framer-motion";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  href,
  variant = "primary",
  className = "",
  icon,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-[2px]";

  const variants = {
    primary:
      "bg-[#EFE9DF] hover:bg-[#E5DCD0] text-[#3D352E] border border-[#DDD5C7] shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-[#3D352E] hover:bg-[#2A241F] text-[#FAF7F2] border border-[#3D352E] shadow-sm hover:shadow active:scale-[0.98]",
    outline:
      "bg-transparent hover:bg-[#F2ECE3] text-[#4A423A] border border-[#C5BAAF] active:scale-[0.98]",
  };

  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
};
