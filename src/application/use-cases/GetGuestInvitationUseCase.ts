import { Guest } from "@/domain/models/Guest";

export class GetGuestInvitationUseCase {
  execute(rawName?: string | null): Guest {
    if (!rawName || rawName.trim().length === 0) {
      return {
        name: "Querido(a) Convidado(a)",
        isGeneric: true,
        invitationMessage:
          "É com imensa alegria e carinho que convidamos você para celebrar o início deste novo capítulo da nossa história.",
      };
    }

    const cleanName = decodeURIComponent(rawName).trim();

    return {
      name: cleanName,
      isGeneric: false,
      invitationMessage: `É com muita emoção que convidamos você, ${cleanName}, para estar ao nosso lado e testemunhar este momento inesquecível de nossas vidas.`,
    };
  }
}
