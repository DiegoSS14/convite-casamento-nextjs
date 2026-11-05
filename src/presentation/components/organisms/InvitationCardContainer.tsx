"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useWeddingData } from "@/application/hooks/useWeddingData";
import { useGuestParam } from "@/application/hooks/useGuestParam";
import { NavigationSubmenu, ActiveTab } from "./NavigationSubmenu";
import { HomeInvitationView } from "./HomeInvitationView";
import { ReceptionView } from "./ReceptionView";
import { RsvpModal } from "./RsvpModal";

export const InvitationCardContainer: React.FC = () => {
  const { data, loading } = useWeddingData();
  const guest = useGuestParam();
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#B6986F] border-t-transparent animate-spin" />
          <p className="text-xs font-serif-custom tracking-[0.2em] text-[#8F7E6D] uppercase">
            Carregando convite...
          </p>
        </div>
      </div>
    );
  }

  const { couple, event } = data;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <div className="min-h-screen w-full bg-[#F4EFEA] py-0 sm:py-8 md:py-12 px-0 sm:px-4 flex justify-center items-start">
      {/* Background ambient lighting for desktop */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#C5BAAF_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Main Luxury Stationary Card Container */}
      <main className="relative w-full max-w-[480px] bg-[#FAF7F2] sm:rounded-[28px] sm:shadow-[0_20px_60px_-15px_rgba(51,43,37,0.15)] sm:border sm:border-[#EDE5D8] overflow-hidden transition-all duration-500 paper-texture">
        {/* Subtle decorative inner frame */}
        <div className="hidden sm:block absolute inset-3 border border-[#EBE3D5] rounded-[22px] pointer-events-none z-10" />

        {/* View Switching with Framer Motion */}
        <AnimatePresence mode="wait">
          {activeTab === "home" ? (
            <HomeInvitationView
              key="home-view"
              couple={couple}
              event={event}
              guest={guest}
              onNavigateToReception={() => handleTabChange("reception")}
              onOpenRsvp={() => setIsRsvpOpen(true)}
            />
          ) : (
            <ReceptionView
              key="reception-view"
              couple={couple}
              event={event}
              onBackToHome={() => handleTabChange("home")}
              onOpenRsvp={() => setIsRsvpOpen(true)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Floating Navigation Submenu (Home / Recepção / RSVP) */}
      <NavigationSubmenu
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenRsvp={() => setIsRsvpOpen(true)}
      />

      {/* RSVP Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        guest={guest}
        coupleNames={`${couple.brideName} & ${couple.groomName}`}
      />
    </div>
  );
};
