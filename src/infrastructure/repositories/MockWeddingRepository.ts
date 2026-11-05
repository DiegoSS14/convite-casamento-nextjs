import { IWeddingRepository } from "@/domain/repositories/IWeddingRepository";
import { Couple } from "@/domain/models/Couple";
import { WeddingEvent } from "@/domain/models/WeddingEvent";

export class MockWeddingRepository implements IWeddingRepository {
  async getCouple(): Promise<Couple> {
    return {
      brideName: "Kellen",
      groomName: "Diego",
      brideInitial: "K",
      groomInitial: "D",
      weddingQuote: "Um dia para celebrar o amor, a alegria e a vida juntos ao lado de quem amamos.",
      songTitle: "All of Me",
      songArtist: "John Legend",
      photoUrl: "", // Empty to display clean placeholder by default or custom image
    };
  }

  async getWeddingEvent(): Promise<WeddingEvent> {
    return {
      day: "11",
      month: "Novembro",
      year: "2025",
      fullDateDisplay: "11 de Novembro de 2026",
      ceremony: {
        title: "CERIMÔNIA",
        venueName: "Hacienda San Gabriel",
        address: "Valle de Bravo, Estado de México",
        time: "8:30",
        dateFormatted: "11 de Novembro de 2026",
        mapUrl: "https://maps.google.com/?q=Hacienda+San+Gabriel+Valle+de+Bravo",
      },
      reception: {
        title: "RECEPÇÃO",
        venueName: "Algum restaurante",
        address: "Vamos definir ainda",
        time: "20:00",
        dateFormatted: "11 de Novembro de 2026",
        mapUrl: "https://maps.google.com/?q=Jardin+La+Isla+Valle+de+Bravo",
      },
      gratitudeMessage:
        "Sua presença torna o nosso grande dia ainda mais especial e inesquecível. Muito obrigado por celebrar e compartilhar esse momento de amor conosco!",
      timeline: [
        { id: "1", time: "17:00", title: "CERIMÔNIA", iconType: "church" },
        { id: "2", time: "18:00", title: "COQUETEL DE BOAS-VINDAS", iconType: "cocktail" },
        { id: "3", time: "19:00", title: "JANTAR", iconType: "dinner" },
        { id: "4", time: "20:30", title: "PRIMEIRA DANÇA & FESTA", iconType: "music" },
        { id: "5", time: "00:00", title: "FIM DA NOITE", iconType: "cake" },
      ],
      dressCode: {
        type: "Venha como quiser, o importante é a sua presença",
        colors: [
          { name: "Bege Nude", hex: "#E5DDD1" },
          { name: "Champagne / Ouro Velho", hex: "#C7B39B" },
          { name: "Taupe Terroso", hex: "#8A7969" },
          { name: "Café / Grafite", hex: "#352F2B" },
        ],
      },
    };
  }
}

export const weddingRepository = new MockWeddingRepository();
