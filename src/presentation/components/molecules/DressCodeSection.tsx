"use client";

import React from "react";
import { motion } from "framer-motion";
import { DressCodePaletteColor } from "@/domain/models/WeddingEvent";
import { SectionTitle } from "../atoms/SectionTitle";

interface DressCodeSectionProps {
  type: string;
  colors: DressCodePaletteColor[];
  className?: string;
}

export const DressCodeSection: React.FC<DressCodeSectionProps> = ({
  type = "FORMAL",
  colors = [],
  className = "",
}) => {
  return (
    <div className={`py-4 text-center ${className}`}>
      <SectionTitle title="Dress Code" className="mb-2" />

      <p className="text-xs font-sans-custom uppercase tracking-[0.2em] text-[#7A6B5C] font-medium mb-5">
        {type}
      </p>

      {/* Color Palette Swatches (Inspired by Image 2) */}
      <div className="flex items-center justify-center gap-3">
        {colors.map((color, index) => (
          <motion.div
            key={color.hex + index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
            className="flex flex-col items-center group relative cursor-pointer"
          >
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs border border-black/10 transition-transform group-hover:scale-110"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
            {/* Tooltip on hover */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 text-[9px] font-sans-custom whitespace-nowrap text-[#5C5044] pointer-events-none">
              {color.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
