/**
 * Biblioteca de ícones minimalistas (Lucide) e de marcas (Simple Icons).
 * Os SVGs são embutidos no HTML em tempo de build — nenhum JS extra no cliente.
 */
import {
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Clock,
  Heart,
  HeartPulse,
  House,
  MapPin,
  Menu,
  PawPrint,
  Phone,
  Quote,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  X,
} from 'lucide-static';
import { siFacebook, siGoogle, siInstagram, siWhatsapp } from 'simple-icons';

/** Extrai apenas o conteúdo interno do <svg> do Lucide. */
const inner = (svg: string) => svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').trim();

export const strokeIcons = {
  'arrow-right': inner(ArrowRight),
  'arrow-up-right': inner(ArrowUpRight),
  bath: inner(Bath),
  bed: inner(BedDouble),
  clock: inner(Clock),
  heart: inner(Heart),
  'heart-pulse': inner(HeartPulse),
  house: inner(House),
  'map-pin': inner(MapPin),
  menu: inner(Menu),
  paw: inner(PawPrint),
  phone: inner(Phone),
  quote: inner(Quote),
  scissors: inner(Scissors),
  shield: inner(ShieldCheck),
  sparkles: inner(Sparkles),
  stethoscope: inner(Stethoscope),
  sun: inner(Sun),
  close: inner(X),
} as const;

export const brandIcons = {
  whatsapp: siWhatsapp.path,
  instagram: siInstagram.path,
  facebook: siFacebook.path,
  google: siGoogle.path,
} as const;

export type StrokeIconName = keyof typeof strokeIcons;
export type BrandIconName = keyof typeof brandIcons;
export type IconName = StrokeIconName | BrandIconName;
