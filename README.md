# Mega Discount Appliances — Premium Brand Site

A research-driven, scroll-animated rebuild of the Mega Discount Appliances homepage.

**Live business:** 10861 Katy Fwy, Houston, TX 77079 · (346) 730-4870

---

## What's in this repo

```
megadiscountappliances/
├── netlify.toml                   # Pins publish dir to site/
├── vercel.json                    # Same for Vercel deploys
├── megalogo.jpg                   # Original client logo
├── README.md
├── research/
│   ├── 01-client-brand.md         # Brand extraction
│   ├── 02-competitor-analysis.md  # Houston niche research
│   ├── 03-build-brief.md          # Master build spec
│   └── 04-quality-audit.md        # Final audit results
└── site/                          # Publish directory (Netlify/Vercel)
    ├── index.html                 # Homepage
    ├── competitive-analysis.html  # Client-only PDF deliverable (noindex)
    ├── 404.html
    ├── robots.txt                 # Disallows the report from search
    ├── sitemap.xml
    ├── css/styles.css
    ├── js/main.js
    └── assets/
        ├── logo/                  # megalogo.jpg + wp-logo.avif
        ├── icons/                 # delivery / service / warranty
        ├── products/              # Featured deal images
        └── categories/            # Shop-by-category tiles
```

## Local preview

```sh
cd site
python -m http.server 8765
# open http://localhost:8765
```

## Deployment

### Netlify
The repo includes `netlify.toml` pinning publish to `site/`. Connect the repo
and Netlify will pick it up automatically.

### Vercel
The repo includes `vercel.json` pinning output to `site/`. Connect the repo
or run `vercel --prod`.

### Plain static host
Upload everything in `site/` to your web root. No build step required.

## Tech

- Plain HTML, CSS, vanilla JS — no framework
- GSAP 3.12 from CDN (hero entrance only)
- Google Fonts: Anton, Oswald, Inter
- Mobile-first, responsive at 1100 / 900 / 720 / 380 breakpoints
- `prefers-reduced-motion` respected
- Schema.org `AppliancesStore` markup
- Open Graph + Twitter card meta

## Brand tokens

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#0F2A5C` | Primary, headlines |
| `--red` | `#D62027` | Accents, CTAs |
| `--cream` | `#F5F1E6` | Page background |
| `--paper` | `#FBF8F0` | Cards |
| `--ink` | `#0E1A33` | Body text |
| `--muted` | `#5A6478` | Subdued text |

## Things to swap before client launch

1. **Real customer reviews** — replace the placeholder reviews in `index.html`
   (search `<!-- TODO: replace with real customer reviews`). Pull from the
   client's Google Business Profile.
2. **Storefront photo** — the hero currently uses a featured-deal product card.
   If the client wants a real storefront/team photo as the hero visual,
   replace the `.hero-card` block with an `<img>`.
3. **Phone-number link verification** — confirm `(346) 730-4870` is the live
   number. Right now it's wired in 4 places: nav, hero CTA, sticky mobile
   button, footer.
4. **Financing partners** — currently the FAQ says "call to discuss." If the
   client has named partners (Snap, Acima, Synchrony, etc.), add their logos
   to the trust strip and update the FAQ.
5. **Google Map embed** — the iframe uses a public Maps URL. Confirm the pin
   lands on the correct unit; if not, switch to a Maps Embed API key with the
   exact place ID.

## Credit

Created by [Chatbot Boy AI](https://www.chatbotboy.ai/).
