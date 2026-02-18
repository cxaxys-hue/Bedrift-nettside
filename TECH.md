# WebStarkupisz — Teknologioversikt

Dokumentasjon over alle komponenter, biblioteker og effekter brukt på nettsiden.

---

## Komponenter fra @react-bits / eksterne kilder

### 1. ClickSpark (Global cursor-effekt)
**Kilde:** `@react-bits/ClickSpark-JS-CSS`  
**Bruk:** Global klikk-effekt på hele nettsiden. Viser små «spark»-linjer som stråler ut fra klikkpunktet.

**Plassering:** Wrapper hele appen i `App.jsx` (rotnivå).

**Props:**
- `sparkColor` — Farge på spark (rgba(111, 78, 133, 0.7))
- `sparkSize` — Størrelse på linjer (8)
- `sparkRadius` — Rekkevidde (22)
- `sparkCount` — Antall retninger (8)
- `duration` — Varighet i ms (380)

**Installasjon:** Manuelt lagt til som `src/components/ClickSpark.jsx`

---

### 2. DotGrid (Interaktiv prikkmatrise)
**Kilde:** Tilpasset implementasjon med GSAP  
**Bruk:** Kun i CTA-kortet (kontaktseksjonen). Interaktiv prikkmatrise som reagerer på musepeker og klikk.

**Plassering:** Kun i `CTA.jsx` — høyre side av kontaktkortet (skjult på mobil).

**Props:**
- `dotSize` — Prikkstørrelse (5)
- `gap` — Avstand mellom prikker (15)
- `baseColor` — Inaktiv farge
- `activeColor` — Aktiv farge ved nærhet
- `proximity` — Avstand for lys-effekt (120)
- `shockRadius` — Radius for klikk-effekt (250)
- `shockStrength` — Styrke på push (5)
- `returnDuration` — Tid tilbake (1.5s)

**Avhengigheter:** `gsap`

**Installasjon:** `npm install gsap`

---

### 3. LogoLoop (Logo-karusell)
**Kilde:** `@react-bits/LogoLoop-JS-CSS`  
**Bruk:** Horisontal løkke med teknologi-/partnerlogoer.

**Plassering:** `Partners.jsx` — seksjon «Teknologier vi bruker» før Footer.

**Props:**
- `logos` — Array med `{ node, title, href }` eller `{ src, alt, href }`
- `speed` — Hastighet (80)
- `direction` — "left" | "right" | "up" | "down"
- `logoHeight` — Høyde på logoer (48)
- `gap` — Avstand (60)
- `hoverSpeed` — Hastighet ved hover (0 = pause)
- `scaleOnHover` — Forstørrelse ved hover
- `fadeOut` — Gradient-fading på kanter
- `fadeOutColor` — Farge for fade (#F5F0E1)

**Avhengigheter:** `react-icons` (for SiReact, SiVite, etc.)

**Installasjon:** `npm install react-icons`

---

## Egne komponenter

| Komponent | Beskrivelse |
|-----------|-------------|
| `Navbar` | Fast navigasjon med mobilmeny |
| `Hero` | Forsidebanner med CTA |
| `About` | Om oss-seksjon |
| `ServicesList` | Tjenester, prosess og statistikk som vertikal liste |
| `Testimonials` | Sitatsseksjon |
| `FAQ` | Spørsmål og svar (accordion) |
| `CTA` | Kontaktkort med DotGrid |
| `Partners` | LogoLoop med teknologiikoner |
| `Footer` | Bunntekst med lenker og kontakt |
| `ContactModal` | Modal for kontaktskjema |
| `ScrollProgress` | Liten oransje scroll-indikator til høyre |
| `GradientBackground` | Bakgrunnsgradienter |

---

## Avhengigheter (package.json)

```json
{
  "dependencies": {
    "gsap": "^3.14.2",        // DotGrid-animasjoner
    "lucide-react": "^0.469.0", // Ikoner
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.5.0"    // LogoLoop (SiReact, SiVite, etc.)
  }
}
```

---

## Fargepalett

| Variabel | Hex | Bruk |
|----------|-----|------|
| Bakgrunn | `#F5F0E1` | Hovedbakgrunn |
| Oransje | `#FC7600` | CTA, hover, accent |
| Lilla | `#6F4E85` | Sekundærfarge |
| Grønn | `#388E3C` | Suksess, SEO |

---

## Oppsummering

- **ClickSpark** = Global cursor/klikk-effekt (hele siden)
- **DotGrid** = Kun i CTA-kortet (kontaktboks)
- **LogoLoop** = Teknologi-seksjon før Footer
