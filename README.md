# Bicho Solto - Animal Care — Site institucional

Site institucional da **Bicho Solto - Animal Care** (Joinville - SC): clínica veterinária 24h, banho & tosa, day care e hotel para pets.

Feito com [Astro](https://astro.build): o resultado é HTML/CSS estático, leve e rápido, com quase nenhum JavaScript no navegador. Dá para hospedar em qualquer serviço de sites estáticos.

## Como rodar

```bash
npm install
npm run dev      # ambiente local em http://localhost:4321
npm run build    # gera o site final em /dist
npm run preview  # visualiza o build
```

Requer Node.js 22.12 ou superior.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, endereço, telefone, redes sociais, SEO | `src/config/site.ts` |
| Mensagens pré-configuradas do WhatsApp | `src/lib/whatsapp.ts` |
| Textos de serviços, pilares, etapas e depoimentos | `src/data/content.ts` |
| **Fotos** | `src/data/images.ts` |
| Cores, fontes, espaçamentos (design tokens) | `src/styles/global.css` |

### Trocando as fotos temporárias

As imagens atuais são **temporárias** (Unsplash) e estão marcadas com `placeholder: true` em `src/data/images.ts`.

1. Coloque as fotos reais em `public/images/` (ex.: `public/images/hero.jpg`).
2. Em `src/data/images.ts`, troque o `src` pelo caminho local (`'/images/hero.jpg'`) e ajuste o `alt`.
3. Use fotos na horizontal com pelo menos 1600 px de largura, em JPG ou WebP, com até ~400 KB.

Se uma imagem não carregar, o componente `Media` mostra um fundo neutro com o nome da foto, então o layout continua inteiro.

## Estrutura

```
src/
├── config/site.ts           # dados da empresa (fonte única)
├── lib/whatsapp.ts          # links e mensagens do WhatsApp
├── data/
│   ├── content.ts           # conteúdo das seções
│   └── images.ts            # todas as imagens do site
├── layouts/BaseLayout.astro # <head>, SEO, Open Graph, dados estruturados (Schema.org)
├── components/
│   ├── ui/                  # componentes reutilizáveis (Button, Icon, Media, Logo…)
│   └── sections/            # seções da página (Header, Hero, Services…)
├── scripts/main.ts          # menu mobile, animações de entrada, menu ativo
├── styles/global.css        # tokens de design e estilos base
└── pages/index.astro        # monta a página
```

## Publicação

O build gera a pasta `dist/`, que pode ir para Netlify, Vercel, Cloudflare Pages, GitHub Pages ou qualquer hospedagem comum.

Ao publicar, defina o domínio final para gerar `canonical` e `og:url`:

```bash
SITE_URL=https://seudominio.com.br npm run build
```

Na Netlify/Vercel, cadastre `SITE_URL` como variável de ambiente do projeto.

## SEO

- Title e meta description definidos em `src/config/site.ts`
- Hierarquia correta: um único `H1` (hero), `H2` por seção, `H3` nos cards
- Dados estruturados `VeterinaryCare` / `LocalBusiness` com endereço, telefone, redes e serviços
- Metatags de geolocalização (Joinville - SC) e Open Graph

> Recomendação: adicionar uma imagem de compartilhamento (`og:image`, 1200×630) quando houver fotos reais.

## Conteúdo

O site usa **apenas** as informações fornecidas pela empresa. Não há preços, horários detalhados, nomes de profissionais, avaliações extras ou características da estrutura que não tenham sido informadas. Antes de acrescentar conteúdo, confirme com a Bicho Solto.
