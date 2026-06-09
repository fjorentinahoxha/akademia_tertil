# Akademia Tertil — Faqja zyrtare

Faqe webi për [@akademia_tertil](https://www.instagram.com/akademia_tertil/), akademi online për mësimin e Kuranit dhe arabishtes për femra.

Ndërtuar me **Astro 4** (statike, e shpejtë, SEO-friendly) dhe e gatshme për deploy në **Cloudflare Pages**.

## Çfarë përfshin

- ✓ 4 faqe kryesore: Ballina, Rreth Nesh, Kurset, Kontakt
- ✓ Faqe individuale për secilin kurs (4 kurse)
- ✓ Faqe 404 e dedikuar
- ✓ SEO i plotë: meta tags, Open Graph, Twitter Cards, canonical URLs
- ✓ JSON-LD structured data: `EducationalOrganization`, `Course`, `FAQPage`, `BreadcrumbList`
- ✓ Sitemap automatik (`/sitemap-index.xml`)
- ✓ `robots.txt`
- ✓ Përgjigje për pajisje mobile (responsive)
- ✓ Fontet me preconnect për performancë

## SEO — fjalë kyçe të synuara

Faqja është optimizuar për këto kërkime në Google:

- mësim kurani, mësim kurani online
- mësim kurani për femra, mësim kurani shqip
- mësim arabishtje, mësim arabishtje online
- texhuid, texhuid praktik, texhuid online
- abetare nuranije, el-kaideh en-nuranijeh
- xhuzi amme, mësimi i shkronjave arabe
- akademi islame online, kurse kurani

## Si ta nisni lokalisht

```bash
npm install
npm run dev
```

Hapni [http://localhost:4321](http://localhost:4321).

## Si të bëni build për prodhim

```bash
npm run build      # gjeneron dist/
npm run preview    # parashikim lokal i versionit të prodhimit
```

## Deploy në Cloudflare Pages

Domeni `akademia-tertil.com` është regjistruar te Cloudflare, ndaj Pages është zgjedhja më e thjeshtë: një dashboard për domenin, DNS-në dhe hostingin.

### Hapat (përmes UI-së)

1. Shko te [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Autorizo GitHub-in dhe zgjidh `fjorentinahoxha/akademia_tertil`.
3. Konfiguro build-in:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** lexohet nga `.nvmrc` (20) — nuk duhet të prekësh
4. Kliko **Save and Deploy**. Build i parë zgjat ~1–2 minuta.
5. Kur projekti është gati, shko te **Custom domains** → **Set up a custom domain** → shkruaj `akademia-tertil.com`. Cloudflare e konfiguron DNS automatikisht sepse domeni është te i njëjti llogari.
6. Shto edhe `www.akademia-tertil.com` me redirect 301 → root domain (te **Rules** → **Redirect Rules**).

Çdo push në `main` deklencon një deploy të ri automatikisht.

## Pas deploy — hapat e SEO

Kjo është **shumë e rëndësishme** për të dalë në Google:

1. **Regjistrohu në [Google Search Console](https://search.google.com/search-console)**:
   - Shto pronën e re (`akademia-tertil.com`).
   - Verifikoje (Cloudflare lejon shtimin e një TXT record direkt nga DNS).
   - Dorëzo sitemap-in: `https://akademia-tertil.com/sitemap-index.xml`.
2. **Regjistrohu në [Bing Webmaster Tools](https://www.bing.com/webmasters)** — disa shqiptarë përdorin Bing.
3. **Kërko indeksim** — në Search Console, përdor "URL Inspection" për çdo faqe dhe kliko "Request indexing".
4. **Backlinks** — kërko nga llogaritë e tjera islame shqiptare të vendosin linkun në bio-n e tyre të Instagram (linku përmes Linktree/website link nga IG është një sinjal i mirë).

## Si të shtosh një kurs të ri

1. Hap [`src/data/site.ts`](src/data/site.ts).
2. Shto një objekt të ri në array-n `COURSES` me `slug`, `title`, `description`, etj.
3. Build dhe deploy — faqja `/kurset/{slug}` gjenerohet automatikisht.

## Si të ndryshosh tekstet kryesore

Të gjitha tekstet ndodhen direkt te faqet përkatëse:

- Ballina: [`src/pages/index.astro`](src/pages/index.astro)
- Rreth Nesh: [`src/pages/rreth-nesh.astro`](src/pages/rreth-nesh.astro)
- Kontakt: [`src/pages/kontakt.astro`](src/pages/kontakt.astro)
- Konstantet (emri, bio, IG handle, fjalët kyçe): [`src/data/site.ts`](src/data/site.ts)

## Si të zëvendësosh logon/favicon-in

- Favicon: zëvendëso [`public/favicon.svg`](public/favicon.svg) me logon tënde.
- Imazhi për share në social media: zëvendëso [`public/og-default.svg`](public/og-default.svg) (ose përdor PNG 1200×630 dhe ndrysho `ogImage` te `Layout.astro`).

## Struktura

```
src/
├── components/    # Header, Footer
├── data/site.ts   # Konstantet e faqes + kurset
├── layouts/       # Layout-i bazë me SEO meta
├── pages/         # Faqet (file-based routing)
│   ├── index.astro
│   ├── rreth-nesh.astro
│   ├── kontakt.astro
│   ├── 404.astro
│   └── kurset/
│       ├── index.astro
│       └── [slug].astro
└── styles/global.css
public/
├── robots.txt
├── favicon.svg
└── og-default.svg
```
