# antikes-rom-unterricht

Interaktive deutschsprachige 45-Minuten-Unterrichtsstunde zur antiken Stadt Rom mit statischer Website, druckbaren Materialien, Arbeitsblättern und GitHub-Pages-Deployment.

## Inhalt des Repos

- `index.html` – Hauptwebsite für den Unterricht
- `materialien/` – vier differenzierte Arbeitsblätter plus Lehrkraft-Lösungen
- `praesentation/Antikes_Rom_Unterricht.pptx` – vollständig ausgearbeitete, editierbare Unterrichtspräsentation
- `quellen.html` – Quellen, Lizenzen und historische Hinweise
- `.github/workflows/deploy-pages.yml` – Deployment für GitHub Pages auf `main`

## Unterrichtsfluss (45 Minuten, vier Vortragende)

| Zeit | Phase | Schwerpunkt | Leitung |
| --- | --- | --- | --- |
| 0–5 Min. | Einstieg | Leitfrage und Vorwissen | Person 1 |
| 5–12 Min. | Geografische Orientierung | Rom, Tiber, Hügel, Ostia | Person 1 |
| 12–19 Min. | Aufbau und Funktion | Forum, Wasser, Straßen, Wohnen | Person 2 |
| 19–31 Min. | Gruppenarbeit | Vier differenzierte Arbeitsblätter | Personen 2–4 |
| 31–38 Min. | Interaktives Spiel | Quiz zur Stadtfunktion | Person 3 |
| 38–45 Min. | Sicherung und Hausaufgabe | Bewertung, Exit-Ticket, Transfer | Person 4 |

## Materialien

- Arbeitsblatt 1: Orientierung und Lage
- Arbeitsblatt 2: Infrastruktur, Wasser, Versorgung
- Arbeitsblatt 3: Wohnen und soziale Ungleichheit
- Arbeitsblatt 4: Bewertung, Transfer, Stadtplanung
- Lehrkraft-Seite mit Lösungshinweisen und Timing

Alle Kernmaterialien funktionieren lokal/offline. Die Website enthält bewusst keine eingebetteten Grafiken oder Karten, damit eigene Visuals ergänzt werden können.

## Lokale Vorschau

Im Repo-Verzeichnis:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen:

- lokal: `http://localhost:8000/`
- nach GitHub-Pages-Deployment typischerweise: `https://<owner>.github.io/<repo>/`

## GitHub Pages

Das Repo enthält einen Workflow für GitHub Pages, der bei einem Push auf `main` deployt:

1. In GitHub unter **Settings → Pages** als Quelle **GitHub Actions** auswählen, falls noch nicht aktiv.
2. Änderungen nach `main` mergen.
3. Den Workflow **Deploy static site to Pages** abwarten.
4. Danach sollte die Seite typischerweise unter `https://<owner>.github.io/<repo>/` erreichbar sein.

Hinweis: In dieser Arbeitsumgebung konnte ich Repository-Einstellungen oder einen Live-Merge nach `main` nicht selbst abschließen; deshalb wird hier keine konkrete Live-URL als bereits aktiv behauptet.

## Quellen und Attribution

- Historische Hintergrundquellen stehen in `quellen.html`.

## Barrierefreiheit und Nutzung

- semantische HTML-Struktur
- Tastaturbedienung für die Rollen-Tabs und native Formularbedienung für das Quiz
- kontrastreiche Gestaltung
- Druckansichten für Arbeitsblätter und Lehrkraft-Material
- relative Pfade, damit das Projekt auch unter einem GitHub-Pages-Unterpfad zuverlässig funktioniert
