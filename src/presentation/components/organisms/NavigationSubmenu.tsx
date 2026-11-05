"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, CheckCircle2 } from "lucide-react";

export type ActiveTab = "home" | "reception";

interface NavigationSubmenuProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenRsvp: () => void;
  className?: string;
}

export const NavigationSubmenu: React.FC<NavigationSubmenuProps> = ({
  activeTab,
  onTabChange,
  onOpenRsvp,
  className = "",
}) => {
  return (
    <nav
      className={`fixed bottom-5 sm:bottom-7 inset-x-0 z-40 flex justify-center px-4 pointer-events-none ${className}`}
      aria-label="Navegação do Convite"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-[#332B25]/90 backdrop-blur-md shadow-xl border border-white/10 text-white">
        {/* Tab 1: Convite (Home) */}
        <button
          onClick={() => onTabChange("home")}
          className={`relative px-4 py-2 rounded-full text-xs font-sans-custom uppercase tracking-[0.16em] transition-colors flex items-center gap-1.5 ${
            activeTab === "home" ? "text-[#332B25] font-medium" : "text-[#DFD7CE] hover:text-white"
          }`}
        >
          {activeTab === "home" && (
            <motion.div
              layoutId="activeSubmenuIndicator"
              className="absolute inset-0 bg-[#FAF7F2] rounded-full shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <Heart className="w-3.5 h-3.5 relative z-10" />
          <span className="relative z-10">Convite</span>
        </button>

        {/* Tab 2: Recepção / Cerimônia (Submenu) */}
        <button
          onClick={() => onTabChange("reception")}
          className={`relative px-4 py-2 rounded-full text-xs font-sans-custom uppercase tracking-[0.16em] transition-colors flex items-center gap-1.5 ${
            activeTab === "reception" ? "text-[#332B25] font-medium" : "text-[#DFD7CE] hover:text-white"
          }`}
        >
          {activeTab === "reception" && (
            <motion.div
              layoutId="activeSubmenuIndicator"
              className="absolute inset-0 bg-[#FAF7F2] rounded-full shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <MapPin className="w-3.5 h-3.5 relative z-10" />
          <span className="relative z-10">Recepção & Detalhes</span>
        </button>

        {/* Action: RSVP */}
        <button
          onClick={onOpenRsvp}
          className="ml-1 px-3.5 py-2 rounded-full text-xs font-sans-custom uppercase tracking-[0.14em] bg-[#B6986F] hover:bg-[#A6885F] text-white flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
          title="Confirmar Presença"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RSVP</span>
        </button>
      </div>
    </nav>
  );
};
