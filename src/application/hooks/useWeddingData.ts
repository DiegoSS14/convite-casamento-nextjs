"use client";

import { useMemo } from "react";
import { MockWeddingRepository } from "@/infrastructure/repositories/MockWeddingRepository";
import { WeddingDetailsDTO } from "../use-cases/GetWeddingDetailsUseCase";

  export function useWeddingData(isPlural: boolean = false): { data: WeddingDetailsDTO; loading: boolean } {
    const repo = useMemo(() => new MockWeddingRepository(), []);
    const data: WeddingDetailsDTO = useMemo(
      () => ({
        couple: repo.getCoupleSync(),
        event: repo.getWeddingEventSync(isPlural),
      }),
      [repo, isPlural]
    );

    return { data, loading: false };
  }
