// @ts-check
import { defineConfig } from 'astro/config';

// Defina SITE_URL com o domínio definitivo ao publicar
// (ex.: SITE_URL=https://seudominio.com.br npm run build).
// Com ele, o site gera canonical e og:url automaticamente.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
