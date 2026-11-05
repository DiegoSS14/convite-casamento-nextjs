"use client";

import React from "react";
import { motion } from "framer-motion";
import { Couple } from "@/domain/models/Couple";
import { WeddingEvent } from "@/domain/models/WeddingEvent";
import { Guest } from "@/domain/models/Guest";
import { Monogram } from "../atoms/Monogram";
import { CoupleHeader } from "../molecules/CoupleHeader";
import { EventDateBadge } from "../molecules/EventDateBadge";
import { PhotoFrame } from "../molecules/PhotoFrame";
import { GuestInvitationCard } from "../molecules/GuestInvitationCard";
import { SongSection } from "../molecules/SongSection";
import { ActionButton } from "../atoms/ActionButton";
import { MapPin, CalendarHeart } from "lucide-react";

interface HomeInvitationViewProps {
  couple: Couple;
  event: WeddingEvent;
  guest: Guest;
  onNavigateToReception: () => void;
  onOpenRsvp: () => void;
}

export const HomeInvitationView: React.FC<HomeInvitationViewProps> = ({
  couple,
  event,
  guest,
  onNavigateToReception,
  onOpenRsvp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center py-6 sm:py-10 px-4 sm:px-8 space-y-7 max-w-lg mx-auto"
    >
      {/* 1. Clean Monogram with Bride & Groom Initials */}
      <Monogram
        brideInitial={couple.brideInitial}
        groomInitial={couple.groomInitial}
        size="md"
        className="mt-2"
      />

      {/* 2. Names of Bride and Groom in highlight */}
      <CoupleHeader
        brideName={couple.brideName}
        groomName={couple.groomName}
        subtitle="Casamento"
      />

      {/* 3. Event Date */}
      <EventDateBadge
        day={event.day}
        month={event.month}
        year={event.year}
      />

      {/* 4. Photo Frame with subtle feather fade */}
      <PhotoFrame
        photoUrl={couple.photoUrl}
        alt={`Foto de ${couple.brideName} e ${couple.groomName}`}
      />

      {/* 5. Personalized Guest Invitation Text */}
      <GuestInvitationCard
        guest={guest}
        weddingQuote={couple.weddingQuote}
      />

      {/* 6. Special Song Section */}
      <SongSection
        title={couple.songTitle}
        artist={couple.songArtist}
        className="pt-2"
      />

      {/* Interactive Quick Links */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 pb-12 w-full justify-center">
        <ActionButton
          label="Detalhes da Cerimônia"
          onClick={onNavigateToReception}
          variant="outline"
          icon={<MapPin className="w-3.5 h-3.5" />}
        />
        <ActionButton
          label="Confirmar Presença"
          onClick={onOpenRsvp}
          variant="secondary"
          icon={<CalendarHeart className="w-3.5 h-3.5" />}
        />
      </div>
    </motion.div>
  );
};
