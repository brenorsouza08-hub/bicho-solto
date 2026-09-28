import { images, type SiteImage } from './images';
import type { WhatsappTopic } from '../lib/whatsapp';
import type { IconName } from '../components/ui/icons';

/** Indicadores exibidos abaixo do hero. */
export const heroHighlights = [
  { title: '24h', text: 'Clínica Veterinária', icon: 'heart-pulse' },
  { title: 'Banho & Tosa', text: 'Cuidado e bem-estar', icon: 'bath' },
  { title: 'Day Care', text: 'Diversão e socialização', icon: 'sun' },
  { title: 'Hotel', text: 'Conforto e segurança', icon: 'bed' },
] satisfies { title: string; text: string; icon: IconName }[];

/** Pilares da seção "Um lugar para eles". */
export const pillars = [
  { title: 'Saúde', icon: 'stethoscope' },
  { title: 'Higiene', icon: 'sparkles' },
  { title: 'Bem-estar', icon: 'heart' },
  { title: 'Hospedagem', icon: 'house' },
  { title: 'Diversão', icon: 'paw' },
] satisfies { title: string; icon: IconName }[];

export interface Service {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: IconName;
  image: SiteImage;
  whatsapp: WhatsappTopic;
}

export const services: Service[] = [
  {
    id: 'clinica',
    title: 'Clínica Veterinária 24h',
    description:
      'Atendimento veterinário para cuidar da saúde do seu pet com atenção e segurança.',
    cta: 'Saiba mais',
    icon: 'stethoscope',
    image: images.clinic,
    whatsapp: 'clinica',
  },
  {
    id: 'banho-e-tosa',
    title: 'Banho & Tosa',
    description:
      'Cuidados de higiene e estética para deixar seu pet limpo, confortável e bem cuidado.',
    cta: 'Conhecer serviço',
    icon: 'scissors',
    image: images.grooming,
    whatsapp: 'banho',
  },
  {
    id: 'day-care',
    title: 'Day Care',
    description:
      'Um espaço para seu pet brincar, socializar e gastar energia em um ambiente preparado para ele.',
    cta: 'Conhecer serviço',
    icon: 'sun',
    image: images.daycare,
    whatsapp: 'daycare',
  },
  {
    id: 'hotel',
    title: 'Hotel para Pets',
    description:
      'Uma opção de hospedagem com cuidado, conforto e atenção durante a estadia.',
    cta: 'Conhecer serviço',
    icon: 'bed',
    image: images.hotel,
    whatsapp: 'hotel',
  },
];

/** Etapas da seção "Cuidado em cada detalhe". */
export const experienceSteps = [
  {
    number: '01',
    title: 'Atendimento',
    text: 'Você fala com a nossa equipe e encontra o serviço ideal para o seu pet.',
  },
  {
    number: '02',
    title: 'Cuidado',
    text: 'Seu pet recebe atenção e carinho de quem entende de cuidado animal.',
  },
  {
    number: '03',
    title: 'Conforto',
    text: 'Um ambiente acolhedor para que ele se sinta seguro e à vontade.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Seguimos ao seu lado, com atenção ao bem-estar dele em cada etapa.',
  },
];

/** Depoimentos reais fornecidos pela empresa. Não adicionar avaliações fictícias. */
export const testimonials = [
  {
    quote: 'Confio 100% no cuidado com os pets no hotel, no banho e veterinária!',
    context: 'Hotel · Banho · Veterinária',
  },
  {
    quote: 'Ótimo ambiente, profissionais muito atenciosos e competentes.',
    context: 'Ambiente · Equipe',
  },
];
