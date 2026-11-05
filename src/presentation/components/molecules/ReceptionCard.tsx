"use client";

import React from "react";
import { motion } from "framer-motion";
import { LocationDetails } from "@/domain/models/WeddingEvent";
import { ActionButton } from "../atoms/ActionButton";
import { MapPin, Clock } from "lucide-react";

interface ReceptionCardProps {
  reception: LocationDetails;
  className?: string;
}

export const ReceptionCard: React.FC<ReceptionCardProps> = ({
  reception,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`text-center py-4 ${className}`}
    >
      {/* Toasting Glasses Line-art Icon (Inspired by Image 2) */}
      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center text-[#9E8E7E]">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-14 h-14"
        >
          {/* Left Glass */}
          <g transform="translate(14, 12) rotate(-15 12 18)">
            <path d="M 6 0 L 18 0 L 15 16 C 14 20 10 20 9 16 Z" />
            <line x1="12" y1="18" x2="12" y2="30" />
            <path d="M 7 30 L 17 30" />
            {/* Liquid wave */}
            <path d="M 7 8 Q 12 10 17 8" strokeWidth="0.8" />
          </g>

          {/* Right Glass */}
          <g transform="translate(26, 12) rotate(15 12 18)">
            <path d="M 6 0 L 18 0 L 15 16 C 14 20 10 20 9 16 Z" />
            <line x1="12" y1="18" x2="12" y2="30" />
            <path d="M 7 30 L 17 30" />
            {/* Liquid wave */}
            <path d="M 7 8 Q 12 10 17 8" strokeWidth="0.8" />
          </g>

          {/* Clinking spark dots */}
          <circle cx="32" cy="18" r="1" fill="currentColor" />
          <circle cx="36" cy="14" r="0.8" fill="currentColor" />
          <circle cx="28" cy="14" r="0.8" fill="currentColor" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="font-serif-custom text-xl sm:text-2xl tracking-[0.25em] text-[#332B25] uppercase font-normal">
        {reception.title}
      </h3>

      {/* Time & Date */}
      <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm font-medium tracking-[0.15em] text-[#7A6B5C] uppercase">
        <Clock className="w-3.5 h-3.5" />
        <span>{reception.time}</span>
        <span className="text-[#C5BAAF]">&bull;</span>
        <span>{reception.dateFormatted}</span>
      </div>

      {/* Venue Name */}
      <h4 className="mt-3 font-serif-custom text-base sm:text-lg tracking-[0.15em] text-[#3D352E] uppercase font-semibold">
        {reception.venueName}
      </h4>

      {/* Address */}
      <p className="mt-1 text-xs font-sans-custom text-[#7A7067] tracking-wider max-w-xs mx-auto">
        {reception.address}
      </p>

      {/* Action button */}
      <div className="mt-4">
        <ActionButton
          label="Ver Localização"
          href={reception.mapUrl}
          variant="primary"
          icon={<MapPin className="w-3.5 h-3.5" />}
        />
      </div>
    </motion.div>
  );
};
