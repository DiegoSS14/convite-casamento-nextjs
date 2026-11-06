"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { BotanicalDivider } from "../atoms/BotanicalDivider";

interface GratitudeCardProps {
  message: string;
  isPlural?: boolean;
  className?: string;
}

export const GratitudeCard: React.FC<GratitudeCardProps> = ({
  message,
  isPlural = false,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center p-6 rounded-xl bg-gradient-to-b from-[#F9F5EE] to-[#F3ECE0] border border-[#E8DFCFC0] shadow-xs ${className}`}
    >
      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#FAF7F2] border border-[#DDD4C6] flex items-center justify-center text-[#A69480]">
        <HeartHandshake className="w-5 h-5 stroke-[1.4]" />
      </div>

      <h4 className="font-serif-custom text-lg sm:text-xl tracking-[0.18em] text-[#3D352E] uppercase font-normal">
        {isPlural ? "Obrigado por Fazerem Parte" : "Obrigado por Fazer Parte"}
      </h4>

      <p className="mt-3 text-xs sm:text-sm font-serif-custom italic text-[#63574B] leading-relaxed max-w-sm mx-auto">
        &ldquo;{message}&rdquo;
      </p>

      <BotanicalDivider className="mt-4 mb-0" />
    </motion.div>
  );
};
