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

    return guestUseCase.execute(guestQuery);
  }, [searchParams, guestUseCase]);
}
