"use client";

import React from "react";
import { motion } from "framer-motion";
import { TimelineScheduleItem } from "@/domain/models/WeddingEvent";
import { Church, Wine, Utensils, Music, Cake } from "lucide-react";
import { SectionTitle } from "../atoms/SectionTitle";

interface TimelineScheduleProps {
  items: TimelineScheduleItem[];
  className?: string;
}

export const TimelineSchedule: React.FC<TimelineScheduleProps> = ({
  items,
  className = "",
}) => {
  const getIcon = (type: TimelineScheduleItem["iconType"]) => {
    const iconProps = { className: "w-5 h-5 text-[#8F7E6D] stroke-[1.3]" };
    switch (type) {
      case "church":
        return <Church {...iconProps} />;
      case "cocktail":
        return <Wine {...iconProps} />;
      case "dinner":
        return <Utensils {...iconProps} />;
      case "music":
        return <Music {...iconProps} />;
      case "cake":
        return <Cake {...iconProps} />;
      default:
        return <Wine {...iconProps} />;
    }
  };

  return (
    <div className={`py-4 ${className}`}>
      <SectionTitle title="Cronograma" className="mb-6" />

      <div className="max-w-xs mx-auto space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4 group"
          >
            {/* Icon column */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E0D7CB] shadow-2xs group-hover:border-[#B6986F] transition-colors flex-shrink-0">
              {getIcon(item.iconType)}
            </div>

            {/* Vertical hairline divider */}
            <div className="w-[1px] h-9 bg-[#DDD4C7]" />

            {/* Time & Activity Description */}
            <div className="text-left">
              <span className="block text-[11px] font-sans-custom tracking-[0.18em] text-[#8F7E6D] font-medium uppercase">
                {item.time}
              </span>
              <span className="block text-xs font-serif-custom tracking-[0.12em] text-[#332B25] uppercase font-semibold">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
