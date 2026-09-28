import { site } from '../config/site';

/** Mensagens pré-configuradas de cada ponto de contato do site. */
export const whatsappMessages = {
  geral: 'Olá! Gostaria de conhecer os serviços da Bicho Solto - Animal Care.',
  clinica: 'Olá! Gostaria de informações sobre o atendimento veterinário 24 horas.',
  banho: 'Olá! Gostaria de informações sobre banho e tosa.',
  daycare: 'Olá! Gostaria de informações sobre o Day Care.',
  hotel: 'Olá! Gostaria de informações sobre o Hotel para Pets.',
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export function whatsappLink(topic: WhatsappTopic = 'geral'): string {
  const text = encodeURIComponent(whatsappMessages[topic]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
