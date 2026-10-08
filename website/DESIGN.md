# Designsysteem: Danique Nagel

*Laag 1 van 3: de regels. Een AI-agent die aan deze site bouwt, volgt dit bestand altijd. Wijkt iets af, dan past eerst dit bestand aan, en daarna pas de code.*

## Uitgangspunt

**Strak en rustig.** Veel witruimte, een strak raster, één accentkleur. Het ontwerp straalt uit wat het merk belooft: rust en overzicht in een onderwerp dat voor veel mensen chaotisch voelt.

**Beeldidee: de route.** Waar beeld nodig is, gebruiken we een rustig raster van punten met één lijn die er een weg doorheen vindt. Dat is wat Danique doet: de weg vinden in AI. De lijn eindigt altijd in de accentkleur.

## Kleur

Alle kleuren zijn tokens in `styles.css`. Gebruik nooit een losse hexwaarde in een component.

| Token | Licht | Donker | Gebruik |
|---|---|---|---|
| `--bg` | `#F7F8F6` | `#0E1312` | Achtergrond van de pagina |
| `--surface` | `#FFFFFF` | `#151C1B` | Kaarten en vlakken |
| `--ink` | `#111816` | `#ECF0EE` | Koppen en hoofdtekst |
| `--muted` | `#59645F` | `#9AA6A2` | Ondersteunende tekst |
| `--line` | `#E1E6E3` | `#26302E` | Lijnen en randen |
| `--accent` | `#0F5E58` | `#5FC2B6` | De ene accentkleur: knoppen, links, het eindpunt van de route |
| `--accent-soft` | `#E2EFEC` | `#173230` | Zachte achtergrond achter accentelementen |

**Regels**
- De accentkleur beslaat nooit meer dan ongeveer 5 procent van een scherm.
- Per scherm is er maximaal één gevulde accentknop.
- Contrast van tekst is minimaal 4,5:1 in beide thema's.
- Het donkere thema volgt de instelling van de bezoeker.

## Typografie

- **Koppen en tekst:** Instrument Sans, gewichten 400, 500 en 600.
- **Labels en kleine details:** JetBrains Mono, gewicht 500, in hoofdletters met 0,08em letterafstand. Dit is de enige techknipoog in de typografie.

**Schaal**, ratio 1,25, basis 17 px:

| Token | Grootte | Gebruik |
|---|---|---|
| `--t-xs` | 13 px | Labels in mono |
| `--t-sm` | 15 px | Kleine tekst, voetnoten |
| `--t-base` | 17 px | Lopende tekst |
| `--t-lg` | 21 px | Intro's en grote alinea's |
| `--t-xl` | 27 px | Kopjes van kaarten |
| `--t-2xl` | 34 px | Sectiekoppen op mobiel |
| `--t-3xl` | 44 px | Sectiekoppen |
| `--t-4xl` | clamp(44 px, 7vw, 76 px) | Alleen de hero |

**Regels**
- Koppen: gewicht 500, regelafstand 1,08, letterafstand -0,02em, `text-wrap: balance`.
- Lopende tekst: regelafstand 1,6, maximaal 62 tekens breed.
- Nooit meer dan drie tekstgroottes in één sectie.

## Raster en ruimte

- **Raster:** 12 kolommen, maximale breedte 1200 px, kolomafstand 24 px.
- **Zijmarge:** clamp(20 px, 5vw, 64 px). Op elke breedte minimaal 20 px.
- **Ruimteschaal:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Gebruik alleen deze waarden.
- **Tussen secties:** 128 px op desktop, 96 px op mobiel.
- **Hoeken:** 14 px voor kaarten, 999 px voor knoppen. Niets anders.
- **Schaduw:** geen. Diepte komt van lijnen en vlakken.

## Beweging

Beweging is subtiel en ondersteunt de inhoud, nooit andersom.

| Moment | Effect | Duur | Easing |
|---|---|---|---|
| Sectie komt in beeld | Opacity 0 naar 1, 12 px omhoog | 600 ms | cubic-bezier(0.2, 0.7, 0.2, 1) |
| Elementen in een rij | Zelfde effect, met 80 ms vertraging per element | 600 ms | idem |
| Hover op knop of kaart | Kleur of rand verandert | 160 ms | ease-out |
| De route in de hero | De lijn tekent zich één keer | 1800 ms | cubic-bezier(0.65, 0, 0.35, 1) |

**Regels**
- Alles is ook zonder animatie volledig zichtbaar en leesbaar.
- Bij `prefers-reduced-motion` staat alle beweging uit.
- Geen parallax, geen elementen die blijven bewegen.

## Componenten

- **Knop, primair:** gevuld met `--accent`, tekst in `--surface`, hoogte 48 px, horizontale padding 24 px.
- **Knop, secundair:** transparant, rand `--line`, tekst `--ink`. Bij hover wordt de rand `--ink`.
- **Label:** mono, `--t-xs`, kleur `--muted`. Staat boven een sectiekop en zegt waar de sectie over gaat.
- **Kaart:** `--surface`, rand `--line`, hoek 14 px, padding 32 px. Geen schaduw.
- **Stappen:** genummerd, alleen omdat de werkwijze echt een volgorde heeft.

## Tekst

Volg de tone of voice uit `../merk/merkfundament.md`: je in plaats van u, een vleugje humor, vaktaal altijd uitleggen, korte zinnen. Geen verzonnen klantcijfers of reviews. Wat nog niet bestaat, is een duidelijk gemarkeerde placeholder.
