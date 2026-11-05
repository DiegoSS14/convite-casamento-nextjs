"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Sparkles } from "lucide-react";

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
  const hasValidPhoto = photoUrl && !imageError && photoUrl.trim() !== "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.45 }}
      className={`relative w-full max-w-[340px] sm:max-w-[380px] mx-auto overflow-hidden rounded-t-[120px] rounded-b-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#E8E1D5] ${className}`}
    >
      {/* Decorative inner hairline border */}
      <div className="absolute inset-2 border border-[#EFE8DC]/80 rounded-t-[112px] rounded-b-lg pointer-events-none z-10" />

      {hasValidPhoto ? (
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
      ) : (
        /* Refined Placeholder Area */
        <div className="relative w-full aspect-[3/4.2] flex flex-col items-center justify-center bg-gradient-to-b from-[#F7F2E9] via-[#EFE9DF] to-[#FAF7F2] p-6 text-center select-none">
          {/* Subtle floral watermark */}
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2]/80 border border-[#DDD5C7] flex items-center justify-center text-[#A69480] mb-4 shadow-sm">
            <ImageIcon className="w-7 h-7 stroke-[1.2]" />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-serif-custom tracking-[0.2em] text-[#6E6359] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B6986F]" />
            <span>Espaço para Foto</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B6986F]" />
          </div>

          <p className="text-[11px] font-sans-custom text-[#8C8074] max-w-[200px] leading-relaxed">
            Adicione aqui a foto especial dos noivos
          </p>

          <span className="mt-4 px-3 py-1 rounded-full bg-[#FAF7F2]/90 border border-[#E2D8CA] text-[10px] tracking-widest text-[#7C7065] uppercase">
            3 : 4 Proporção recomendada
          </span>

          {/* Bottom soft fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none bg-gradient-to-t from-[#FAF7F2] to-transparent"
            aria-hidden="true"
          />
        </div>
      )}
    </motion.div>
  );
};
