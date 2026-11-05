"use client";

import React from "react";
import { motion } from "framer-motion";
import { LocationDetails } from "@/domain/models/WeddingEvent";
import { ActionButton } from "../atoms/ActionButton";
import { MapPin, Clock } from "lucide-react";

interface CeremonyCardProps {
  ceremony: LocationDetails;
  className?: string;
}

export const CeremonyCard: React.FC<CeremonyCardProps> = ({
  ceremony,
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
      {/* Church Line-art Icon (Inspired by Image 2) */}
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
          {/* Cross */}
          <line x1="32" y1="6" x2="32" y2="14" />
          <line x1="28" y1="9" x2="36" y2="9" />
          {/* Steeple roof */}
          <polygon points="32,14 24,26 40,26" />
          {/* Main roof */}
          <polygon points="32,22 14,34 50,34" />
          {/* Church facade */}
          <rect x="20" y="34" width="24" height="22" />
          {/* Side wings */}
          <path d="M 14 34 L 14 56 L 20 56" />
          <path d="M 50 34 L 50 56 L 44 56" />
          {/* Arch door */}
          <path d="M 28 56 L 28 44 C 28 41 36 41 36 44 L 36 56" />
          {/* Little rose window */}
          <circle cx="32" cy="30" r="2" />
          {/* Decorative side leaves */}
          <path d="M 8 46 C 10 42 12 44 14 43" />
          <path d="M 56 46 C 54 42 52 44 50 43" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="font-serif-custom text-xl sm:text-2xl tracking-[0.25em] text-[#332B25] uppercase font-normal">
        {ceremony.title}
      </h3>

      {/* Time & Date */}
      <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm font-medium tracking-[0.15em] text-[#7A6B5C] uppercase">
        <Clock className="w-3.5 h-3.5" />
        <span>{ceremony.time}</span>
        <span className="text-[#C5BAAF]">&bull;</span>
        <span>{ceremony.dateFormatted}</span>
      </div>

      {/* Venue Name */}
      <h4 className="mt-3 font-serif-custom text-base sm:text-lg tracking-[0.15em] text-[#3D352E] uppercase font-semibold">
        {ceremony.venueName}
      </h4>

      {/* Address */}
      <p className="mt-1 text-xs font-sans-custom text-[#7A7067] tracking-wider max-w-xs mx-auto">
        {ceremony.address}
      </p>

      {/* Action button */}
      <div className="mt-4">
        <ActionButton
          label="Ver Localização"
          href={ceremony.mapUrl}
          variant="primary"
          icon={<MapPin className="w-3.5 h-3.5" />}
        />
      </div>
    </motion.div>
  );
};
