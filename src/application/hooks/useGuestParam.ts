"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { GetGuestInvitationUseCase } from "../use-cases/GetGuestInvitationUseCase";
import { Guest } from "@/domain/models/Guest";

export function useGuestParam(): Guest {
  const searchParams = useSearchParams();
  const guestUseCase = useMemo(() => new GetGuestInvitationUseCase(), []);

  return useMemo(() => {
    // Looks for ?convidado=... or ?para=... or ?nome=... or ?guest=...
    const guestQuery =
      searchParams.get("convidado") ||
      searchParams.get("para") ||
      searchParams.get("nome") ||
      searchParams.get("guest");

    // Checks for plural flag: ?plural=true, ?plural=1, ?plural=sim, ?plural (key with no value), ?plurais, ?casal, ?familia, ?pl, etc.
    const checkBooleanFlag = (key: string): boolean => {
      if (!searchParams.has(key)) return false;
      const val = searchParams.get(key)?.toLowerCase().trim();
      if (val === "" || val === null || val === undefined) return true;
      if (val === "false" || val === "0" || val === "nao" || val === "não") return false;
      return val === "true" || val === "1" || val === "sim" || val === "s" || val === "yes";
    };

    const tipo = searchParams.get("tipo")?.toLowerCase().trim();
    const isPluralType = tipo === "plural" || tipo === "casal" || tipo === "familia";

    const isPlural =
      isPluralType ||
      checkBooleanFlag("plural") ||
      checkBooleanFlag("plurais") ||
      checkBooleanFlag("casal") ||
      checkBooleanFlag("familia") ||
      checkBooleanFlag("pl") ||
      (searchParams.get("p") === "1" || searchParams.get("p")?.toLowerCase() === "true");

    return guestUseCase.execute(guestQuery, isPlural);
  }, [searchParams, guestUseCase]);
}
