# Designsysteem: Danique Nagel, videoversie

*Laag 1 van 3: de regels. Een AI-agent die aan deze site bouwt, volgt dit bestand altijd.*

## Design read

Een persoonlijke site voor ondernemers in het MKB, strak en minimalistisch, in de stijl van een productlancering. De video draagt het verhaal. De rest is rust, witruimte en typografie.

Gebaseerd op de minimalist-skill uit de taste-skill van Leon Lin. **Instellingen:** variatie 5, beweging 5, dichtheid 2.

## Kleur

Kleur is schaars. De pagina is wit, zwart en grijs.

| Token | Waarde | Gebruik |
|---|---|---|
| `--bg` | `#FFFFFF` | Achtergrond van de hele pagina. De video's hebben dezelfde witte achtergrond. |
| `--surface` | `#F9F9F8` | Vlakken |
| `--ink` | `#111111` | Koppen, tekst en knoppen |
| `--muted` | `#787774` | Ondersteunende tekst |
| `--line` | `#EAEAEA` | Alle lijnen en randen, altijd 1 px |
| `--tag-bg` | `#EDF3EC` | Achtergrond van kleine labels |
| `--tag-ink` | `#2F5D57` | Tekst van kleine labels, en het eindpunt van de werkwijze |

**Regels**
- Geen gekleurde vlakken of secties. Geen verlopen.
- Alleen een licht thema, omdat de video's wit zijn.
- Foto's in zwart-wit.

## Typografie

- **Alles:** Geist. Koppen in gewicht 500, tekst in 400.
- **Details:** Geist Mono, voor kleine labels en meta-informatie.
- Koppen: letterafstand -0,035em, regelafstand 1,05.
- Tekst: regelafstand 1,6, maximaal 60 tekens breed.

| Token | Grootte |
|---|---|
| `--t-xs` | 12 px, labels in mono |
| `--t-sm` | 14 px |
| `--t-base` | 16 px |
| `--t-lg` | 19 px |
| `--t-xl` | 24 px |
| `--t-2xl` | clamp(32 px, 4vw, 48 px), sectiekoppen |
| `--t-hero` | clamp(40 px, 5.6vw, 72 px), alleen de hero |

## Raster en ruimte

- Inhoud maximaal 1120 px breed. Zijmarge clamp(20 px, 5vw, 64 px).
- Tussen secties 160 px op desktop, 104 px op mobiel.
- **Hoeken:** knoppen 6 px, vlakken en foto's 12 px. Geen ronde knoppen.
- **Lijnen:** altijd 1 px in `--line`.
- **Schaduw:** geen.

## Componenten

- **Primaire knop:** zwart vlak, witte tekst, hoek 6 px, hoogte 44 px. Hover wordt `#333333`, klik wordt 2 procent kleiner.
- **Secundaire knop:** witte achtergrond, rand van 1 px, zwarte tekst.
- **Vlak:** rand 1 px `--line`, hoek 12 px, padding 32 tot 40 px.
- **Label:** klein, in mono, hoofdletters, achtergrond `--tag-bg`. Maximaal twee op de hele pagina.

## Beweging

- Elementen komen zacht in beeld: opacity en 12 px omhoog, in 600 ms, cubic-bezier(0.16, 1, 0.3, 1), 80 ms na elkaar.
- De hero is een scrollvideo: de video loopt mee met het scrollen, en drie zinnen wisselen elkaar af.
- Het kompas speelt in een lus zolang het in beeld is.
- Bij `prefers-reduced-motion` staat alle beweging uit.

## Verboden

Handgeschreven letters, stickers, scheve elementen, gekleurde vlakken, ronde knoppen, schaduwen, labels boven elke sectie, drie gelijke kaarten, genummerde stappen en verzonnen cijfers.
