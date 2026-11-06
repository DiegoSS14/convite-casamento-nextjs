"use client";

import React from "react";
import { DressCodePaletteColor } from "@/domain/models/WeddingEvent";
import { SectionTitle } from "../atoms/SectionTitle";

interface DressCodeSectionProps {
  type: string;
  colors?: DressCodePaletteColor[];
  className?: string;
}

export const DressCodeSection: React.FC<DressCodeSectionProps> = ({
  type = "FORMAL",
  className = "",
}) => {
  return (
    <div className={`py-4 text-center ${className}`}>
      <SectionTitle title="Dress Code" className="mb-2" />

      <p className="text-xs font-sans-custom uppercase tracking-[0.2em] text-[#7A6B5C] font-medium">
        {type}
      </p>
    </div>
  );
};
