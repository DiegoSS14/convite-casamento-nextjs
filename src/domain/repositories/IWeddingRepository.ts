import { Couple } from "../models/Couple";
import { WeddingEvent } from "../models/WeddingEvent";

export interface IWeddingRepository {
  getCouple(): Promise<Couple>;
  getWeddingEvent(): Promise<WeddingEvent>;
}
