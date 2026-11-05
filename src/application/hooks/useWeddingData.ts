"use client";

import { useEffect, useState } from "react";
import { WeddingDetailsDTO, GetWeddingDetailsUseCase } from "../use-cases/GetWeddingDetailsUseCase";
import { weddingRepository } from "@/infrastructure/repositories/MockWeddingRepository";

export function useWeddingData() {
  const [data, setData] = useState<WeddingDetailsDTO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const useCase = new GetWeddingDetailsUseCase(weddingRepository);
    useCase.execute().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
