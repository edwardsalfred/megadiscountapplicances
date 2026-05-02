---
name: 03 — Build Brief
project: Mega Discount Appliances
date: 2026-05-02
status: For build
---

## North Star

Build the **most distinctive premium-discount appliance website in Houston.** A confident,
modern brand experience anchored in the navy-and-red retail-circular energy of the existing
logo — but executed at editorial quality (cinematic hero, real photography, scroll motion).

Position above scratch-and-dent depots. Position below big-box. Win on **specialty brands +
local trust + clear value math.**

---

## Design Direction

### Color palette (refined from logo)

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#0F2A5C` | Primary brand, headlines, nav, dark panels |
| `--navy-deep` | `#08183A` | Footer, hover states |
| `--red` | `#D62027` | Sale tags, CTAs, accents |
| `--red-deep` | `#A8161D` | Hover state on red CTAs |
| `--cream` | `#F5F1E6` | Page background (pulled from logo) |
| `--paper` | `#FBF8F0` | Card backgrounds |
| `--ink` | `#0E1A33` | Body text |
| `--muted` | `#5A6478` | Subdued text |
| `--hairline` | `#D9D2BE` | Borders / dividers |
| `--gold` | `#C9A24A` | Optional micro-accent (medallions, "premium" badges) |

The palette is dignified — not the typical retail-yellow blowout. The cream background is the
biggest difference vs. competitors and gives the site its editorial feel.

### Typography

- **Display / headlines:** **Anton** — single weight, tight tracking, bold-condensed. Echoes the
  logo's lockup directly. Big, statement-y.
- **Subheadings / accents:** **Oswald** — slightly less heavy, used for eyebrows and label text.
- **Body / UI:** **Inter** — clean, dependable, readable on mobile.
- **Numerals (price tags):** **Oswald** — gives prices a poster-y retail energy.

All from Google Fonts. Preconnect + font-display: swap.

### Photography style

- Hero: a real photo of the storefront or a clean appliance lifestyle shot (placeholder slot left for client to swap in)
- Product photography: white-background catalog images (already on hand)
- Brand-block photography: editorial lifestyle shots from the brand category libraries (already self-hosted)
- All product photography with consistent rounded corners, subtle drop shadows, never on a colored tile

### Animation

- Scroll-triggered reveals on every section (`opacity` + `y: 20`)
- Hero: large headline letters fade-stagger on load
- Hot Sale tile prices: count-up animation on scroll-in
- Brand grid: subtle parallax on the brand-block images
- Trust strip: marquee scroll on mobile (paused on hover)
- All respects `prefers-reduced-motion`

### What to AVOID
- Yellow blowout colors / starbursts
- Stock photos that obviously aren't this store
- Cluttered grid of 200 products on the homepage
- Phone-only CTAs (need online + phone parity)
- Any "WELCOME TO OUR STORE" generic hero copy
- Em-dashes used as sentence-openers in body copy

---

## Site Architecture

### Pages (v1 launch)
1. `index.html` — Homepage
2. `competitive-analysis.html` — Client-only PDF deliverable (noindex)
3. (Stub links to existing WordPress shop / about / contact pages)

The existing site keeps WooCommerce and the existing About / Shop / Contact / Policy pages. The
new build replaces the **homepage** and provides a competitive-analysis report. Adding a fully
custom shop is out of scope for v1.

### Homepage structure (top → bottom)

1. **Sticky nav** — logo, Shop / Brands / About / Contact links, sticky tap-to-call button
2. **Hero** — left-aligned big-headline savings claim + photo of storefront or feature product, dual CTA (Shop deals + Call)
3. **Trifecta value-prop strip** — Free delivery · Free installation · 1-year warranty (big icons, three columns)
4. **Hot Sale** — three featured deals with price-was/now and savings %
5. **Shop by Category** — six category tiles (Refrigerator, Range, Laundry, Dishwasher, Range Hood, Water Filtration) using existing category images
6. **Specialty brands strip** — Waterdrop, Robam, Seewin, Casabrews (with brand stories)
7. **Brand-trust logo strip** — KitchenAid, LG, Samsung, Whirlpool, Frigidaire, GE + the specialty brands
8. **Why Mega Discount** — 4 reasons (real warranty, real people, fast pickup, Houston-local)
9. **Testimonials / reviews** — placeholder for 3 customer quotes (with note for client to provide)
10. **Visit our showroom** — address, hours, embedded Google Map, get-directions CTA
11. **FAQ** — 6 accordions (warranty, financing, scratch-dent explanation, delivery zones, returns, in-stock)
12. **Final CTA band** — phone + email + shop link
13. **Footer** — full nav, socials, hours, address, Chatbot Boy AI credit

### CTA Strategy
- **Primary CTA:** "Shop the Hot Sale" (drives to existing WooCommerce shop)
- **Secondary CTA:** Tap-to-call **(346) 730-4870** (sticky on mobile, in nav on desktop)
- **Tertiary CTA:** "Visit our Houston showroom" (anchored to map section)

---

## Content Framework

### Homepage hero — 3 headline options

**Option A (the Mega claim):**
> # Mega brands. Mega discounts. Houston's go-to for premium appliances at outlet prices.

**Option B (value math):**
> # Save up to 60% on the appliances Houston families actually want. Free delivery, free install, 1-year warranty.

**Option C (the showroom):**
> # The neighborhood appliance dealer Houston didn't know it had. Premium brands. Outlet pricing. A real warranty.

**Recommended:** **Option B** — it does the math, names the bundle, and matches the niche-winning headline pattern (Katy Discounted's "Up to 60% Off + free delivery + install + warranty"). Keeps Mega Discount Appliances directly competitive on the cheapest-fastest-best dimension while the rest of the site plays the premium-brand wedge.

### Sub-hero / supporting line
> Refrigerators, washers, dryers, ranges, dishwashers — plus Waterdrop, Robam, Seewin, and Casabrews. Same-day pickup or weekly delivery, on-site installation within 72 hours.

### Section copy direction

- **Trifecta strip** — three short verbs in big condensed type: "DELIVERED." / "INSTALLED." / "WARRANTIED."
- **Hot Sale** — "Real prices. Real savings. While they last." Bold red sale tags, struck-through retail price, large now-price.
- **Shop by Category** — "Built for the way Houston cooks, cleans, and lives." Six tiles.
- **Specialty brands** — Editorial paragraphs for each (Waterdrop, Robam, Seewin, Casabrews) with brand story.
- **Why Mega Discount** — Four stat-style cards: 60% off, 1-yr warranty, 72-hr install, 100% Houston-owned.
- **FAQ** — Real, specific answers; lift the "scratches disappear after install" reframe from the West Liquidation site (it's good copy and worth borrowing).

### SEO target keywords
- Primary: "discount appliances Houston" / "appliance store Katy Freeway"
- Specialty: "Waterdrop dealer Houston" / "Robam range hood Houston" / "Seewin smart toilet Houston" / "Casabrews espresso Houston"
- Secondary: "open box appliances Houston" / "scratch and dent refrigerator Houston"

---

## Conversion Playbook

### Primary conversion goal
Drive a phone call OR a Shop-now click on a featured deal. Either is a qualified lead.

### Lead capture
- Sticky tap-to-call on mobile (always visible)
- Nav phone number on desktop
- Hero "Shop deals" → Woo shop
- Footer email opt-in (low priority — no real lead-gen funnel today)

### Social proof plan
- Brand-trust logo strip in viewport 1
- 3 testimonials section in viewport 4 (placeholder for client to provide real ones — explicit comment in HTML)
- Google reviews link (when client confirms profile URL)
- Star count / rating placeholder line

### Trust signals
- Real Houston address shown 3 times (hero meta, visit-us, footer)
- Hours shown in nav, visit-us, and footer
- Phone number shown 4 times
- Warranty badge in trifecta + each product card
- Local-family positioning in About copy

---

## Technical Decisions

- Plain HTML / CSS / JS — no framework
- GSAP + ScrollTrigger via CDN
- One stylesheet, one JS file
- Self-hosted images (already done)
- Mobile-first, responsive at 1400 / 1024 / 720 / 380 breakpoints
- Lighthouse 90+ across the board
- Schema.org `LocalBusiness` + `Store` markup
- Open Graph + Twitter Card meta
- Favicon = client logo

---

## Hard Stop

I'm proceeding straight into Phase 5 build because the user invoked the skill in **auto / greenfield mode** with explicit direction to recreate the site. The brief above is opinionated and grounded; if any direction conflicts with what the client wants, course-correct after the build is reviewable in-browser.
