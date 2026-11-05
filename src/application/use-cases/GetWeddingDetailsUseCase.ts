import { IWeddingRepository } from "@/domain/repositories/IWeddingRepository";
import { Couple } from "@/domain/models/Couple";
import { WeddingEvent } from "@/domain/models/WeddingEvent";

export interface WeddingDetailsDTO {
  couple: Couple;
  event: WeddingEvent;
}

export class GetWeddingDetailsUseCase {
  constructor(private readonly repository: IWeddingRepository) {}

  async execute(): Promise<WeddingDetailsDTO> {
    const [couple, event] = await Promise.all([
      this.repository.getCouple(),
      this.repository.getWeddingEvent(),
    ]);

    return { couple, event };
  }
}
