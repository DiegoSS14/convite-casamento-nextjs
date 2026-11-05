import React, { Suspense } from "react";
import { InvitationCardContainer } from "@/presentation/components/organisms/InvitationCardContainer";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#B6986F] border-t-transparent animate-spin" />
            <p className="text-xs font-serif-custom tracking-[0.2em] text-[#8F7E6D] uppercase">
              Carregando convite...
            </p>
          </div>
        </div>
      }
    >
      <InvitationCardContainer />
    </Suspense>
  );
}
