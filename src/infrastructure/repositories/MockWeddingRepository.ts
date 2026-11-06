import { IWeddingRepository } from "@/domain/repositories/IWeddingRepository";
import { Couple } from "@/domain/models/Couple";
import { WeddingEvent } from "@/domain/models/WeddingEvent";

export class MockWeddingRepository implements IWeddingRepository {
  getCoupleSync(): Couple {
    return {
      brideName: "Kellen",
      groomName: "Diego",
      brideInitial: "K",
      groomInitial: "D",
      groomPhone: "5561994569910",
      bridePhone: "5561993679599",
      weddingQuote: "Um dia para celebrar o amor, a alegria e a vida juntos ao lado de quem amamos.",
      songTitle: "All of Me",
      songArtist: "John Legend",
      photoUrl: "",
    };
  }

  getWeddingEventSync(isPlural: boolean = false): WeddingEvent {
    return {
      day: "11",
      month: "Novembro",
      year: "2026",
      fullDateDisplay: "11 de Novembro de 2026",
      ceremony: {
        title: "CERIMÔNIA",
        venueName: "Cartório do 9º Ofício",
        address: "Setor Comercial Central, Quadra 2, C/D - Planaltina - DF",
        time: "9:20",
        dateFormatted: "11 de Novembro de 2026",
        mapUrl: "https://maps.app.goo.gl/7cpGjjtJwbdr6Edu8",
      },
      reception: {
        title: "RECEPÇÃO",
        venueName: "Pizzaria e Restaurante da Corte",
        address: "Setor Tradicional, Quadra 53 - Planaltina, Brasília - DF, 73330-530",
        time: "20:00",
        dateFormatted: "11 de Novembro de 2026",
        mapUrl: "https://maps.app.goo.gl/VbYH2DhyzFGnd25Z8",
      },
      gratitudeMessage: isPlural
        ? "A presença de vocês torna o nosso grande dia ainda mais especial e inesquecível. Muito obrigado por celebrarem e compartilharem esse momento de amor conosco!"
        : "Sua presença torna o nosso grande dia ainda mais especial e inesquecível. Muito obrigado por celebrar e compartilhar esse momento de amor conosco!",
      timeline: [
        { id: "1", time: "9:20", title: "CERIMÔNIA", iconType: "church" },
        { id: "2", time: "20:00", title: "JANTAR", iconType: "dinner" },
      ],
      dressCode: {
        type: isPlural
          ? "Venham como quiserem, o importante é a presença de vocês"
          : "Venha como quiser, o importante é a sua presença",
        colors: [
          { name: "Bege Nude", hex: "#E5DDD1" },
          { name: "Champagne / Ouro Velho", hex: "#C7B39B" },
          { name: "Taupe Terroso", hex: "#8A7969" },
          { name: "Café / Grafite", hex: "#352F2B" },
        ],
      },
    };
  }

  async getCouple(): Promise<Couple> {
    return this.getCoupleSync();
  }

  async getWeddingEvent(isPlural: boolean = false): Promise<WeddingEvent> {
    return this.getWeddingEventSync(isPlural);
  }
}

export const weddingRepository = new MockWeddingRepository();
