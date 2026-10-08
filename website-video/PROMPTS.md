# Prompts voor de video's

*Volgens de methode van Nick Saraev. Je maakt eerst een startbeeld met Nano Banana Pro, en zet dat daarna in beweging met Kling, bijvoorbeeld via Higgsfield.*

De achtergrond moet overal **volledig wit** zijn. De website is ook wit, zodat de video naadloos in de pagina overloopt.

## Video 1: de laptop die uit elkaar valt (hero)

**Stap 1, startbeeld in Nano Banana Pro:**

```
Studio product photo of a slim modern laptop, open at 110 degrees, seen in three-quarter view. Matte light aluminium. The screen shows a calm, abstract deep teal gradient. No logos, no text. Pure white background (#FFFFFF), soft even studio lighting, a subtle contact shadow. Centered, with the whole laptop fully in frame and generous margin on all sides. Photorealistic, high detail.
```

**Stap 2, animatie in Kling:**

```
Vertical exploded engineering view of this laptop. No logos. Just the laptop, and the components "exploding" (i.e expanding and revealing) as each frame continues: screen panel, keyboard, battery, motherboard, chips, cooling fan and casing separate cleanly along a vertical axis. Smooth animation from start to finish as components move. Background fully white. All of the object should be within the frame of the video; i.e nothing should spill outside.
```

**Opslaan als:** `media/laptop-exploded.mp4`. Sla ook het startbeeld op als `media/laptop.jpg`. Dat wordt het stilstaande beeld voordat de video geladen is.

## Video 2: het kompas dat ronddraait (kennismaking)

**Stap 1, startbeeld in Nano Banana Pro:**

```
Studio product photo of a minimal modern compass with a matte white body and a deep teal needle, seen from a slightly raised three-quarter angle. No logos, no text. Pure white background (#FFFFFF), soft even lighting, a subtle contact shadow. Centered, fully in frame with generous margin. Photorealistic, high detail.
```

**Stap 2, animatie in Kling:**

```
Compass rotating in the exact same place. Center of mass should not move, just rotating perfectly on its axis. Background fully white. All of the object should be within the frame of the video; i.e nothing should spill outside.
```

**Opslaan als:** `media/compass.mp4`

## De video klaarmaken voor scrollen

De laptopvideo loopt mee met het scrollen. Dat werkt alleen soepel als elk beeldje los op te vragen is. Zet de video daarom om met ffmpeg:

```
ffmpeg -i laptop-origineel.mp4 -vf "scale=1600:-2" -c:v libx264 -crf 22 -g 1 -an -movflags +faststart media/laptop-exploded.mp4
```

- `-g 1` maakt van elk beeldje een sleutelbeeld, zodat scrollen niet hapert.
- `-an` haalt het geluid eruit.
- `-movflags +faststart` laat de video sneller beginnen.

Voor het kompas is dit niet nodig. Die speelt gewoon in een lus.

## Tips

- Krijg je logo's of tekst in beeld? Zeg het nog een keer expliciet in de prompt, of genereer opnieuw.
- Loopt een onderdeel uit beeld? Maak het startbeeld kleiner in het kader, met meer witruimte.
- Houd de video kort, ongeveer 5 seconden. Dat is genoeg voor een scrollanimatie en houdt het bestand klein.
