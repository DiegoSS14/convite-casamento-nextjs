import { Guest } from "@/domain/models/Guest";

export class GetGuestInvitationUseCase {
  execute(rawName?: string | null, isPlural: boolean = false): Guest {
    if (!rawName || rawName.trim().length === 0) {
      return {
        name: "",
        isGeneric: true,
        isPlural,
        invitationMessage: isPlural
          ? "É com imensa alegria e carinho que convidamos vocês para celebrarem o início deste novo capítulo da nossa história."
          : "É com imensa alegria e carinho que convidamos você para celebrar o início deste novo capítulo da nossa história.",
      };
    }

    const cleanName = decodeURIComponent(rawName).trim();

      return {
        name: cleanName,
        isGeneric: false,
        isPlural,
        invitationMessage: isPlural
          ? `É com muita emoção que convidamos vocês, ${cleanName}, para estarem ao nosso lado e testemunharem este momento inesquecível de nossas vidas.`
          : `É com muita emoção que convidamos você, ${cleanName}, para estar ao nosso lado e testemunhar este momento inesquecível de nossas vidas.`,
      };
    }
  }
