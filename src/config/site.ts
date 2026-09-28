/**
 * Informações centrais da empresa.
 * Qualquer dado exibido no site (endereço, telefone, redes, SEO) vem daqui —
 * altere apenas este arquivo para atualizar o site inteiro.
 */
export const site = {
  name: 'Bicho Solto',
  tagline: 'Animal Care',
  fullName: 'Bicho Solto - Animal Care',
  slogan: 'Saúde, cuidado e carinho para quem faz parte da sua família.',

  seo: {
    title:
      'Bicho Solto - Animal Care | Clínica Veterinária, Banho & Tosa, Day Care e Hotel em Joinville',
    description:
      'Bicho Solto - Animal Care em Joinville. Clínica veterinária 24 horas, banho e tosa, day care e hotel para pets.',
    locale: 'pt_BR',
  },

  address: {
    street: 'R. Aquidaban, 730',
    district: 'América',
    city: 'Joinville',
    state: 'SC',
    postalCode: '89201-652',
    country: 'BR',
  },

  phone: {
    display: '(47) 99751-5499',
    e164: '+5547997515499',
  },

  /** Número usado nos links do WhatsApp (somente dígitos, com DDI). */
  whatsappNumber: '5547997515499',

  social: {
    instagram: 'https://www.instagram.com/bichosoltojoinville/',
    facebook: 'https://www.facebook.com/bichosoltojoinville/',
  },

  googleReviewsCount: '+600',
} as const;

export const fullAddress = `${site.address.street} - ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`;

const mapsQuery = encodeURIComponent(`${site.fullName}, ${fullAddress}`);

export const links = {
  maps: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  googleReviews: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.fullName} Joinville`,
  )}`,
  phone: `tel:${site.phone.e164}`,
};

/** Itens do menu principal (reutilizados no header e no footer). */
export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;
