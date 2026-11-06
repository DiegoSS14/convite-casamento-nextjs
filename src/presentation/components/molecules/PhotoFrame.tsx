"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PhotoFrameProps {
  photoUrl?: string;
  alt?: string;
  className?: string;
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  photoUrl,
  alt = "Foto dos noivos",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const hasValidPhoto = Boolean(photoUrl && !imageError && photoUrl.trim() !== "");

  if (!hasValidPhoto) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.45 }}
      className={`relative w-full max-w-[340px] sm:max-w-[380px] mx-auto overflow-hidden rounded-t-[120px] rounded-b-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E8E1D5] ${className}`}
    >
      {/* Decorative inner hairline border */}
      <div className="absolute inset-2 border border-[#EFE8DC]/80 rounded-t-[112px] rounded-b-lg pointer-events-none z-10" />

      <div className="relative w-full aspect-[3/4.2] overflow-hidden bg-[#F3ECE1]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoUrl}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98]"
        />
        {/* Bottom soft torn/feathered fade into card background */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};
