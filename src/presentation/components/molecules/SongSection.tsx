"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

interface SongSectionProps {
  title?: string;
  artist?: string;
  className?: string;
}

export const SongSection: React.FC<SongSectionProps> = ({
  title = "All of Me",
  artist = "John Legend",
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.85 }}
      className={`text-center select-none ${className}`}
    >
      <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-sans-custom uppercase tracking-[0.3em] text-[#8F7E6D] mb-1">
        <Music className="w-3 h-3 text-[#A89885]" />
        <span>Nossa Canção</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <p className="font-serif-custom text-base sm:text-lg text-[#3D352E] tracking-wide">
          {title} <span className="text-[#8F7E6D] font-light">&ndash;</span> {artist}
        </p>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Silenciar melodia" : "Ouvir melodia"}
          aria-label={isPlaying ? "Silenciar melodia" : "Ouvir melodia"}
          className="p-1.5 rounded-full hover:bg-[#EFE9DF] text-[#7A6E62] transition-colors"
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#B6986F] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#A89885]" />
          )}
        </button>
      </div>

      {isPlaying && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[10px] text-[#A69480] italic"
        >
          ♪ Melodia ambiente ativa ♪
        </motion.p>
      )}
    </motion.div>
  );
};
