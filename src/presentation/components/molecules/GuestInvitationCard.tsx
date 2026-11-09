"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Guest } from "@/domain/models/Guest";

interface GuestInvitationCardProps {
  guest: Guest;
  weddingQuote?: string;
  className?: string;
}

export const GuestInvitationCard: React.FC<GuestInvitationCardProps> = ({
  guest,
  weddingQuote = "Um dia para celebrar o amor e a vida juntos.",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className={`text-center px-4 max-w-md mx-auto ${className}`}
    >
      {/* Wedding quote / sentiment (Image 1 style) */}
      <p className="font-serif-custom italic text-base sm:text-lg text-[#524941] leading-relaxed mb-6 font-normal">
        &ldquo;{weddingQuote}&rdquo;
      </p>

      {/* Guest Personalized Envelope Box */}
      <div className="relative p-5 rounded-lg bg-[#F7F2E9]/70 border border-[#E5DDD1] shadow-xs">
        <div className="flex items-center justify-center gap-1.5 text-[10px] tracking-[0.25em] text-[#8F7E6D] uppercase mb-1.5">
          <Heart className="w-3 h-3 text-[#B6986F] fill-[#B6986F]/30" />
          <span>
            {guest.isGeneric
              ? (guest.isPlural ? "Convite Especial Para Vocês" : "Convite Especial")
              : (guest.isPlural ? "Convite Especial Para Vocês" : "Convite Especial Para")}
          </span>
          <Heart className="w-3 h-3 text-[#B6986F] fill-[#B6986F]/30" />
        </div>

        {!guest.isGeneric && guest.name && (
          <h3 className="font-serif-custom text-xl sm:text-2xl text-[#332B25] tracking-wide font-medium">
            {guest.name}
          </h3>
        )}

        <p className={`text-xs font-sans-custom text-[#6B6158] leading-relaxed ${!guest.isGeneric && guest.name ? "mt-2" : "mt-3"}`}>
          {guest.invitationMessage}
        </p>
      </div>
    </motion.div>
  );
};
