# Testfälle: HTML-System-Bündler

## Test 1: Minimaler Bündelauftrag

- **Nutzeranfrage:** „Nutze `$html-system-bundler`, um diese `index.html` und zwei lokale HTML-Module als offline nutzbares ZIP zu bündeln.“
- **Warum die Fähigkeit auslösen soll:** Die Anfrage nennt die Fähigkeit und verlangt ihr Kernresultat: ein lokales HTML-Systempaket.
- **Erwarteter Ablauf/Fähigkeiten:** Dateien auf Lesbarkeit und lokale Verweise prüfen; eine klare Ordnerstruktur festlegen; fehlende Startseite nur bei Bedarf ergänzen; die drei HTML-Dateien paketieren und das ZIP testen.
- **Erwartete Artefakte:** Ein finales ZIP mit `index.html` und zwei verlinkten Moduldateien.
- **Akzeptanzkriterien:** Das Archiv ist nicht leer und lesbar; die Startseite verweist lokal auf beide Module; keine temporären oder fremden Dateien befinden sich im Paket.

## Test 2: Vollständiges Website-System mit Begleitmaterial

- **Nutzeranfrage:** „Nutze `$html-system-bundler`, um meine laufende Website, sechs exportierte HTML-Module und die vorhandene Startlogik zu einem downloadbaren System zu bündeln. Die Module sollen über eine zentrale Startseite erreichbar sein.“
- **Warum die Fähigkeit auslösen soll:** Der Auftrag enthält eine Website, mehrere Module und die klare Anforderung eines auslieferbaren Systems.
- **Erwarteter Ablauf/Fähigkeiten:** Online-Referenz und lokale Module analysieren; lokale Startseite als Modulübersicht nur falls notwendig erstellen; relative Links prüfen; externe Abhängigkeiten transparent markieren; ZIP erzeugen und programmgesteuert auf Vollständigkeit testen.
- **Erwartete Artefakte:** Ein finales ZIP mit zentraler Startseite, sechs Modulen und einer knappen Offline-/Online-Hinweislogik.
- **Akzeptanzkriterien:** Die sechs Module sind von der Startseite erreichbar; vorhandene Modul-Inhalte bleiben erhalten; das Archiv enthält keine Logs, Caches oder Rohdaten; unvermeidbare Online-Abhängigkeiten sind nicht als offline funktionsfähig dargestellt.

## Test 3: Fehlende Abhängigkeit bei einer Revision

- **Nutzeranfrage:** „Nutze `$html-system-bundler`, um mein bestehendes Paket zu aktualisieren. Das Dashboard verweist auf `assets/app.js`, aber diese Datei wurde nicht mitgeliefert. Bitte mach das Paket trotzdem fertig.“
- **Warum die Fähigkeit auslösen soll:** Die Anfrage testet den Reparatur- und Grenzfall: ein Projekt soll aktualisiert werden, aber eine konkrete lokale Abhängigkeit fehlt.
- **Erwarteter Ablauf/Fähigkeiten:** Den fehlenden Verweis verifizieren; nicht erfinden oder durch fremden Code ersetzen; den Nutzer fragen, ob die Datei nachgereicht, der Link entfernt oder ein klarer Hinweis eingebaut werden soll; danach nur die bestätigte, gezielte Änderung vornehmen und das neue ZIP validieren.
- **Erwartete Artefakte:** Entweder ein überarbeitetes finales ZIP nach Nutzerentscheidung oder eine klare Rückfrage ohne irreführende Auslieferung.
- **Akzeptanzkriterien:** Keine erfundene JavaScript-Datei; keine stille Deaktivierung wesentlicher Funktionen; unveränderte Teile bleiben erhalten; jede Auslieferung enthält ein lesbares, geprüftes ZIP.
