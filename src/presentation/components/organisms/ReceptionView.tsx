"use client";

import React from "react";
import { motion } from "framer-motion";
import { Couple } from "@/domain/models/Couple";
import { WeddingEvent } from "@/domain/models/WeddingEvent";
import { Guest } from "@/domain/models/Guest";
import { Monogram } from "../atoms/Monogram";
import { CeremonyCard } from "../molecules/CeremonyCard";
import { ReceptionCard } from "../molecules/ReceptionCard";
import { GratitudeCard } from "../molecules/GratitudeCard";
import { TimelineSchedule } from "../molecules/TimelineSchedule";
import { DressCodeSection } from "../molecules/DressCodeSection";
import { ActionButton } from "../atoms/ActionButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ReceptionViewProps {
  couple: Couple;
  event: WeddingEvent;
  guest?: Guest;
  onBackToHome: () => void;
  onOpenRsvp: () => void;
}

export const ReceptionView: React.FC<ReceptionViewProps> = ({
  couple,
  event,
  guest,
  onBackToHome,
  onOpenRsvp,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center py-6 sm:py-10 px-4 sm:px-8 space-y-8 max-w-lg mx-auto"
    >
      {/* 1. Same Monogram Component with Couple Initials */}
      <Monogram
        brideInitial={couple.brideInitial}
        groomInitial={couple.groomInitial}
        size="sm"
        className="mt-2"
      />

      {/* Subtitle / Header */}
      <div className="text-center">
        <p className="text-[11px] font-sans-custom uppercase tracking-[0.3em] text-[#8F7E6D]">
          {couple.brideName} & {couple.groomName}
        </p>
        <h2 className="font-serif-custom text-2xl sm:text-3xl tracking-[0.16em] text-[#332B25] uppercase mt-1">
          Locais & Celebração
        </h2>
      </div>

      {/* 2. Cerimônia Details (Image 2 style) */}
      <div className="w-full border-t border-b border-[#E8DFCFC0] py-4">
        <CeremonyCard ceremony={event.ceremony} />
      </div>

      {/* 3. Recepção Details (Requested explicitly by user) */}
      <div className="w-full border-b border-[#E8DFCFC0] pb-6">
        <ReceptionCard reception={event.reception} />
      </div>

      {/* 4. Agradecimento por Aceitar o Convite (Requested explicitly by user) */}
      <div className="w-full">
        <GratitudeCard message={event.gratitudeMessage} isPlural={guest?.isPlural} />
      </div>

      {/* 5. Cronograma (Timeline from Image 2) */}
      <div className="w-full border-b border-[#E8DFCFC0] pb-6">
        <TimelineSchedule items={event.timeline} />
      </div>

      {/* 6. Dress Code & Palette (From Image 2) */}
      <div className="w-full pb-4">
        <DressCodeSection
          type={event.dressCode.type}
          colors={event.dressCode.colors}
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 pb-14 w-full justify-center">
        <ActionButton
          label="Voltar ao Convite"
          onClick={onBackToHome}
          variant="outline"
          icon={<ArrowLeft className="w-3.5 h-3.5" />}
        />
        <ActionButton
          label="Confirmar Presença"
          onClick={onOpenRsvp}
          variant="secondary"
          icon={<CheckCircle2 className="w-3.5 h-3.5" />}
        />
      </div>
    </motion.div>
  );
};
