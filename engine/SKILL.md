---
name: html-system-bundler
description: "Bündelt vorhandene HTML-Websites, lokale HTML-Module und zugehörige Dokumente zu einem geprüften, offline nutzbaren Browser-System als ZIP. Verwenden, wenn Nutzer eine Website mit mehreren Dateien konsolidieren, defekte lokale Verweise prüfen oder ein HTML-/Modul-Projekt downloadbar bereitstellen lassen möchten. Nicht für die Neugestaltung einer Website ohne vorhandenes Material oder für reine PDF-Zusammenführungen."
---

# HTML-System-Bündler

## Zweck

Erstellt aus einer vorhandenen Startseite, Webmodulen und optionalen Begleitdokumenten ein klar strukturiertes Browser-Paket. Das Ergebnis enthält einen lokalen Einstiegspunkt, funktionierende relative Verweise und nur die Dateien, die zum Öffnen und Nutzen des Systems gebraucht werden.

## Eingaben und Ergebnis

- **Eingaben:** HTML-Dateien, Website-URL, lokale CSS-/JavaScript-/Bilddateien sowie optional Dokumente oder Module. Kläre, welches Artefakt als Startseite gelten soll, falls das nicht eindeutig ist.
- **Ergebnis:** Ein ZIP mit einem obersten Projektordner, einer Startdatei und den benötigten Unterordnern. Liefere ausschließlich das geprüfte ZIP aus.

## Ablauf

1. Prüfe die vorhandenen Dateien, ihre Formate, Größe und ihre Rolle. Für eine Website-URL lies die Seite; verwende sie nur als Referenz, sofern keine herunterladbaren Quellen vorhanden sind.
2. Lege die Bündelstruktur fest: eine `index.html` als Einstieg, separate Ordner für Module und benötigte Assets. Bewahre die Inhalte der Nutzereingaben unverändert, soweit keine Reparatur nötig ist.
3. Prüfe HTML auf offensichtliche Platzhalter, beschädigte relative Pfade, leere Dateien und fehlende Zielseiten. Verweise externe Ressourcen deutlich als online-abhängig, statt sie unbemerkt zu ersetzen.
4. Repariere nur blockierende, klar bestimmbare Verweise oder Strukturfehler. Bei Änderungen, die Gestaltung oder Verhalten wesentlich verändern, hole vorher eine Bestätigung ein.
5. Erstelle eine kompakte lokale Startseite nur dann, wenn keine brauchbare Einstiegseite existiert oder wenn der Nutzer ausdrücklich eine Bündeloberfläche wünscht. Diese Seite soll die Module benennen und lokal verlinken, ohne deren Inhalt umzuschreiben.
6. Packe ausschließlich nutzbare finale Dateien. Schließe temporäre Dateien, Caches, Logs, Zugangsdaten, Rohmaterial und nicht verwendete Duplikate aus.
7. Prüfe das Archiv programmgesteuert: nicht leer, lesbar, erwartete Dateien vorhanden. Führe, falls verfügbar, zusätzlich eine leichte statische HTML-/JavaScript-Prüfung durch. Behaupte keine Browser-Sichtprüfung, wenn keine Browser-Engine verfügbar ist.
8. Liefere das finale ZIP mit einer kurzen Nutzungsanweisung: entpacken und die Startdatei im Browser öffnen.

## Regeln

- Erfinde keine Marken, Funktionen, Inhalte oder Systemlogik, wenn Angaben fehlen.
- Erhalte Originalmaterial und vorhandene Struktur, sofern die gewünschte Bündelung oder eine bestätigte Reparatur nichts anderes erfordert.
- Frage vor dem Löschen von Dateien, vor einer starken Strukturänderung oder vor einer wesentlichen Neugestaltung nach.
- Verwende nur relative lokale Verweise innerhalb des Pakets, wenn die Zielressource mitgeliefert wird.
- Ersetze fehlende externe oder lokale Abhängigkeiten nicht stillschweigend. Benenne sie als Einschränkung oder bitte um die Datei.
- Liefere keine Zwischenstände; das ZIP ist das alleinige Endartefakt.

## Bestätigungspunkte

Hole eine Entscheidung ein, wenn mehrere plausible Startseiten existieren, ein benötigtes Modul fehlt, Dateien entfernt werden müssten oder eine Reparatur die sichtbare Oberfläche bzw. Funktion wesentlich verändert. Bei eindeutigem Bündelauftrag ohne diese Konflikte arbeite direkt.

## Fehlerbehandlung

- Ist ein Modul nicht lesbar oder nicht HTML, prüfe den Dateityp und frage, ob es als Anhang beigelegt, konvertiert oder ausgeschlossen werden soll.
- Schlägt eine Pfadprüfung fehl, korrigiere nur einen eindeutigen relativen Pfad. Bei mehreren möglichen Zielen frage nach.
- Ist die Website nur online vorhanden, liefere keine irreführende Offline-Kopie; bündele nur Dateien, die tatsächlich verfügbar sind, und kennzeichne verbleibende Online-Abhängigkeiten.
- Schlägt die Archivprüfung fehl, behebe den Packaging-Fehler und prüfe erneut. Liefere kein defektes Archiv.

## Lieferung

Validiere vor der Auslieferung, dass das ZIP existiert, nicht leer ist und die Startdatei sowie alle verlinkten lokalen Module enthält. Liefere es als einziges finales Artefakt.
