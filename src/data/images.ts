/**
 * IMAGENS DO SITE
 * ---------------------------------------------------------------------------
 * Todas as fotos abaixo são TEMPORÁRIAS (banco de imagens Unsplash) e servem
 * apenas como referência visual até a Bicho Solto enviar fotos reais.
 *
 * Para substituir uma foto:
 *   1. Coloque o arquivo em /public/images (ex.: /public/images/hero.jpg)
 *   2. Troque o `src` correspondente por '/images/hero.jpg'
 *   3. Atualize o `alt` descrevendo a foto real
 *
 * Se alguma imagem não carregar, o componente <Media> exibe automaticamente
 * um fundo neutro com o rótulo da foto — o layout nunca quebra.
 */

export interface SiteImage {
  src: string;
  alt: string;
  /** Rótulo exibido no placeholder caso a imagem não carregue. */
  label: string;
  /** true = imagem de banco, precisa ser substituída por foto real. */
  placeholder?: boolean;
}

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  hero: {
    src: unsplash('1628009368231-7bb7cfcb0def'),
    alt: 'Profissional cuidando de um cachorro com carinho',
    label: 'Foto principal',
    placeholder: true,
  },
  about: {
    src: unsplash('1601758228041-f3b2795255f1'),
    alt: 'Tutora abraçando seu cachorro',
    label: 'Foto institucional',
    placeholder: true,
  },
  clinic: {
    src: unsplash('1576201836106-db1758fd1c97'),
    alt: 'Veterinária examinando um cachorro',
    label: 'Atendimento veterinário',
    placeholder: true,
  },
  grooming: {
    src: unsplash('1516734212186-a967f81ad0d7'),
    alt: 'Cachorro após o banho, limpo e cheiroso',
    label: 'Banho & Tosa',
    placeholder: true,
  },
  daycare: {
    src: unsplash('1548199973-03cce0bbc87b'),
    alt: 'Dois cachorros correndo e brincando na grama',
    label: 'Day Care',
    placeholder: true,
  },
  hotel: {
    src: unsplash('1517849845537-4d257902454a'),
    alt: 'Cachorro descansando tranquilo sobre uma manta',
    label: 'Hotel para Pets',
    placeholder: true,
  },
  emergency: {
    src: unsplash('1628009368231-7bb7cfcb0def'),
    alt: 'Veterinária atendendo um cachorro',
    label: 'Clínica 24h',
    placeholder: true,
  },
  cta: {
    src: unsplash('1587300003388-59208cc962cb'),
    alt: 'Cachorro feliz olhando para a câmera',
    label: 'Seu pet',
    placeholder: true,
  },
} satisfies Record<string, SiteImage>;

/** Galeria "Estrutura" — substitua pelas fotos reais do espaço. */
export const structureGallery: SiteImage[] = [
  {
    src: unsplash('1576201836106-db1758fd1c97'),
    alt: 'Ambiente da clínica veterinária',
    label: 'Ambiente da clínica',
    placeholder: true,
  },
  {
    src: unsplash('1516734212186-a967f81ad0d7'),
    alt: 'Área de banho e tosa',
    label: 'Banho & Tosa',
    placeholder: true,
  },
  {
    src: unsplash('1548199973-03cce0bbc87b'),
    alt: 'Espaço para os pets brincarem',
    label: 'Espaços para pets',
    placeholder: true,
  },
  {
    src: unsplash('1628009368231-7bb7cfcb0def'),
    alt: 'Atendimento veterinário',
    label: 'Atendimento veterinário',
    placeholder: true,
  },
  {
    src: unsplash('1530281700549-e82e7bf110d6'),
    alt: 'Área de convivência dos pets',
    label: 'Áreas de convivência',
    placeholder: true,
  },
  {
    src: unsplash('1517849845537-4d257902454a'),
    alt: 'Espaço de hospedagem',
    label: 'Hospedagem',
    placeholder: true,
  },
];

/** Galeria "Momentos Bicho Solto". */
export const momentsGallery: SiteImage[] = [
  {
    src: unsplash('1587300003388-59208cc962cb'),
    alt: 'Cachorro sorridente',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1514888286974-6c03e2ca1dba'),
    alt: 'Gato de olhos atentos',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1601758228041-f3b2795255f1'),
    alt: 'Tutora e seu cachorro',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1543466835-00a7907e9de1'),
    alt: 'Cachorro descansando',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1574158622682-e40e69881006'),
    alt: 'Gato relaxando',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1552053831-71594a27632d'),
    alt: 'Cachorro feliz ao ar livre',
    label: 'Momentos',
    placeholder: true,
  },
  {
    src: unsplash('1592194996308-7b43878e84a6'),
    alt: 'Gato tranquilo',
    label: 'Momentos',
    placeholder: true,
  },
];
