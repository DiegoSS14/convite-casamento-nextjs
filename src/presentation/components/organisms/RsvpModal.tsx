"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Check, X, Send } from "lucide-react";
import { Guest } from "@/domain/models/Guest";

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
  guest: Guest;
  coupleNames: string;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  onClose,
  guest,
  coupleNames,
}) => {
  const [guestName, setGuestName] = useState(guest.isGeneric ? "" : guest.name);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [companions, setCompanions] = useState("0");
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);

    if (attending === "yes") {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#B6986F", "#E5DDD1", "#8A7969", "#FAF7F2"],
      });
    }

    // Optional: Could open WhatsApp with prefilled message
    setTimeout(() => {
      const message = attending === "yes"
        ? `Olá! Confirmo com muita alegria minha presença no casamento de ${coupleNames}! Convidado: ${guestName || "Convidado"}, Acompanhantes: ${companions}.`
        : `Olá! Infelizmente não poderei comparecer ao casamento de ${coupleNames}, mas agradeço imensamente pelo carinho do convite! Com carinho, ${guestName || "Convidado"}.`;

      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            className="relative w-full max-w-md bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E5DDD1] z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8F7E6D] hover:text-[#332B25] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {!confirmed ? (
              <form onSubmit={handleConfirm} className="space-y-5">
                <div className="text-center">
                  <span className="text-[10px] tracking-[0.25em] text-[#8F7E6D] uppercase font-sans-custom block mb-1">
                    RSVP
                  </span>
                  <h3 className="font-serif-custom text-2xl text-[#332B25] tracking-wide uppercase">
                    Confirmar Presença
                  </h3>
                  <p className="mt-1 text-xs text-[#7A6B5C]">
                    Por favor, confirme se você estará presente em nossa celebração.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-sans-custom uppercase tracking-wider text-[#5A4F44] mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-md text-sm text-[#332B25] focus:outline-none focus:border-[#B6986F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans-custom uppercase tracking-wider text-[#5A4F44] mb-1.5">
                    Você comparecerá?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending("yes")}
                      className={`py-2 px-3 rounded-md text-xs font-medium tracking-wider uppercase border transition-all ${
                        attending === "yes"
                          ? "bg-[#3D352E] text-[#FAF7F2] border-[#3D352E]"
                          : "bg-white text-[#5A4F44] border-[#DDD4C7] hover:bg-[#F2ECE3]"
                      }`}
                    >
                      Sim, com certeza!
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending("no")}
                      className={`py-2 px-3 rounded-md text-xs font-medium tracking-wider uppercase border transition-all ${
                        attending === "no"
                          ? "bg-[#3D352E] text-[#FAF7F2] border-[#3D352E]"
                          : "bg-white text-[#5A4F44] border-[#DDD4C7] hover:bg-[#F2ECE3]"
                      }`}
                    >
                      Não poderei ir
                    </button>
                  </div>
                </div>

                {attending === "yes" && (
                  <div>
                    <label className="block text-xs font-sans-custom uppercase tracking-wider text-[#5A4F44] mb-1.5">
                      Número de acompanhantes
                    </label>
                    <select
                      value={companions}
                      onChange={(e) => setCompanions(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-md text-sm text-[#332B25] focus:outline-none focus:border-[#B6986F] transition-colors"
                    >
                      <option value="0">Apenas eu (0 acompanhantes)</option>
                      <option value="1">1 acompanhante</option>
                      <option value="2">2 acompanhantes</option>
                      <option value="3">3 acompanhantes</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#B6986F] hover:bg-[#A3865F] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Confirmação</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#E5DDD1] flex items-center justify-center text-[#5C4F42]">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif-custom text-2xl text-[#332B25]">
                  Confirmação Registrada!
                </h3>
                <p className="text-xs text-[#7A6B5C] max-w-xs mx-auto">
                  Redirecionando para envio pelo WhatsApp... Muito obrigado pela sua resposta!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
