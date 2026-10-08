# Designsysteem: Danique Nagel

*Laag 1 van 3: de regels. Een AI-agent die aan deze site bouwt, volgt dit bestand altijd. Wijkt iets af, dan past eerst dit bestand aan, en daarna pas de code.*

## Design read

Een persoonlijke site voor ondernemers in het MKB, met een speelse en eigenwijze taal. Gebouwd met gewone HTML, CSS en JavaScript, met uitgesproken typografie en handgeschreven aantekeningen.

**Instellingen**, volgens de taste-skill van Leon Lin:

| Instelling | Waarde | Waarom |
|---|---|---|
| Variatie in layout | 9 van 10 | Speels en eigenwijs: asymmetrisch, onverwacht |
| Beweging | 6 van 10 | Merkbaar, maar elke beweging heeft een reden |
| Dichtheid | 3 van 10 | Ruim en luchtig |

## Het idee: Danique's ontwerpbestand

De site voelt als een ontwerp waar Danique zelf aantekeningen in heeft gezet. Handgeschreven notities in de accentkleur, een doorgestreepte to-do-lijst, een sticker op haar foto. Zo zie je dat er een mens achter zit, en een ontwerper die het leuk vindt.

**Het routebeeld blijft:** in de werkwijze loopt een stippellijn langs vier haltes. De laatste halte is altijd in de accentkleur.

## Kleur

Eén accentkleur, op de hele pagina dezelfde. Alle kleuren zijn tokens in `styles.css`.

| Token | Licht | Donker | Gebruik |
|---|---|---|---|
| `--bg` | `#F4F6F3` | `#111513` | Achtergrond |
| `--surface` | `#FFFFFF` | `#191F1D` | Vlakken, de rand van de foto |
| `--ink` | `#141917` | `#EEF1EF` | Tekst, het donkere tegelvlak |
| `--muted` | `#56615C` | `#9BA7A2` | Ondersteunende tekst |
| `--line` | `#DCE2DE` | `#2A3431` | Lijnen |
| `--accent` | `#0D6E66` | `#6CCFC2` | Knoppen, aantekeningen, doorhalingen, de sticker |
| `--accent-soft` | `#DDEFEB` | `#16302D` | Zachte tegelvlakken |

**Regels**
- Geen tweede accentkleur, nergens.
- De foto is in zwart-wit en krijgt kleur bij hover. Zo botst de paarse achtergrond van de foto niet met de accentkleur.
- Contrast van tekst minimaal 4,5:1 in beide thema's. Het thema volgt de instelling van de bezoeker.

## Typografie

- **Alles:** Bricolage Grotesque. Een eigenwijze schreefloze letter met karakter. Koppen in gewicht 700, tekst in 400.
- **Aantekeningen:** Caveat, gewicht 600, altijd in de accentkleur. Alleen voor korte handgeschreven notities, nooit voor gewone tekst.
- Geen kleine labels in hoofdletters boven secties. De kop is genoeg.

**Schaal**

| Token | Grootte | Gebruik |
|---|---|---|
| `--t-sm` | 15 px | Kleine tekst |
| `--t-base` | 18 px | Lopende tekst |
| `--t-lg` | 22 px | Intro's |
| `--t-note` | 26 px | Aantekeningen in Caveat |
| `--t-xl` | 30 px | Tegelkoppen, werkregels |
| `--t-2xl` | clamp(36 px, 5vw, 56 px) | Sectiekoppen |
| `--t-hero` | clamp(44 px, 6.4vw, 84 px) | Alleen de hero |

**Regels**
- Koppen: regelafstand 1,02, letterafstand -0,035em, `text-wrap: balance`.
- Lopende tekst: regelafstand 1,55, maximaal 60 tekens breed.
- Nadruk in een kop gaat met de accentkleur of een onderstreping, nooit met een tweede lettertype.

## Raster en ruimte

- Maximale breedte 1240 px, zijmarge clamp(20 px, 5vw, 72 px).
- Ruimteschaal: 4, 8, 12, 16, 24, 32, 48, 64, 96, 136 px.
- Tussen secties: 136 px op desktop, 96 px op mobiel.
- **Hoeken:** knoppen en de sticker zijn rond, tegels en de foto hebben 20 px. Niets anders.
- Geen schaduwen, behalve onder de foto: een zachte schaduw in de tint van de achtergrond, zodat hij als een polaroid op de pagina ligt.

## Layout

Elke sectie heeft een eigen vorm. Geen twee secties zien er hetzelfde uit.

| Sectie | Vorm |
|---|---|
| Hero | Tekst links, scheve polaroid rechts |
| Herkenning | To-do-lijst die zichzelf doorstreept |
| Diensten | Asymmetrische tegels: één grote, twee kleine, elk met een eigen vlakkleur |
| Werkwijze | Een route met vier haltes, zonder nummers |
| Werk | Een lijst met grote titels, als een inhoudsopgave |
| Over | Eén grote uitspraak, met een korte tekst en een handtekening |
| Kennismaking | Grote kop links, actie rechts |

**Verboden**, volgens de taste-skill: drie gelijke kaarten, labels boven elke sectie, genummerde stappen, liggende streepjes als gedachtestreep, decoratieve stipjes, nepschermafbeeldingen en verzonnen cijfers.

## Beweging

| Moment | Effect | Duur |
|---|---|---|
| Sectie komt in beeld | Opacity 0 naar 1, 16 px omhoog | 700 ms, cubic-bezier(0.2, 0.7, 0.2, 1) |
| To-do-lijst komt in beeld | Elke regel wordt doorgestreept, 350 ms na elkaar. Daarna verschijnt de aantekening. | 500 ms per streep |
| Hover op de foto | Kleur verschijnt, de foto draait recht | 400 ms |
| Hover op een werkregel | Titel schuift 8 px op, pijl verschijnt | 200 ms |
| Klik op een knop | Even 2 procent kleiner | 120 ms |

**Regels**
- Niets blijft eindeloos bewegen.
- Bij `prefers-reduced-motion` staat alle beweging uit, en staat de to-do-lijst meteen doorgestreept.

## Tekst

Volg de tone of voice uit `../merk/merkfundament.md`: je in plaats van u, een vleugje humor, vaktaal uitleggen, korte zinnen. Eén actie heeft overal hetzelfde label: "Plan een kennismaking".
