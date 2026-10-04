# Investigator’s Brochure (Prüfprodukte)

**DIGIFUNK-Inntal · Dokument 07 · Version 1.0 · 08.09.2026**  
Hersteller / Verfasser: Virtual Care Solution, Moustafa Ali  
Für: institutionelle PI AMEOS Klinikum Inntal, CMO Dr. med. univ. Margarete Liebmann  
Grundlage: Technical Project Description v1.1 (05.09.2026), eingefroren für diese Studie

Diese IB beschreibt die **Prüfprodukte**, nicht die klinische Verantwortung. Die PI entscheidet über den Einsatz am Menschen.

---

## 1. Status

Die vier Instrumente sind **Forschungsprototypen ohne CE-Kennzeichnung**. Sie sind in dieser Studie Prüfprodukte. Sie diagnostizieren nicht, therapieren nicht, alarmieren nicht.

Software-Freeze: Dokument 12. Algorithmische Neural-Net-Upgrades (Roadmap v1.1 Abschnitt 6) sind **nicht** Teil dieser IB-Version.

## 2. Gemeinsame Architektur

- Browser, vollständig client-side (Web Audio, MediaPipe Pose, localStorage)
- Keine Cloud-Inferenz, kein Hersteller-Backend für die Messung
- Studien-Build: WhatsApp-/E-Mail-/QR-Share **aus**, Ampelfarben und „Risiko-Score“-Anzeige gegenüber Patient und Behandler **aus**
- Laufzeit nur auf von der PI kontrollierten Studien-Geräten (Klinik-Tablets/Laptops); Home-Teil nur nach Extra-Consent und SOP

## 3. Breathscope

- 5 s forcierte Exspiration, Mikrofon, RMS-Peak
- PEF-Proxy: Peak × 800; FEV1-Proxy über Größen-/Altersformel
- Das sind **keine** spirometrischen Messwerte. Validierung gegen Klinik-Spirometer, sofern am Standort vorhanden
- Risiko: Husten, kurz Schwindel, sehr selten Synkope. Sitzend, Abbruch bei Unwohlsein

## 4. V27 Biomechanics Engine (GaitScope)

- MediaPipe Pose, Umgebungskamera
- Knie-/Hüftwinkel, Schrittdetektion, Kadenz, Schrittlängenschätzung, Asymmetrie
- Interner zusammengesetzter Score existiert im Code; im Studien-Build **nicht angezeigt**, nur optional als blinder Explorativparameter der Biometrie
- Risiko: Stolpern. Freier Gangraum, Begleitung

## 5. ROM Lens

- Rückkamera, Landmark-Winkel gegen kalibrierte Neutralposition
- Risiko: bewegungsassoziierter Schmerz. Stopp-Wort, keine forcierte Endgrade

## 6. ROM Lens CS (Cervical)

- Frontkamera, Ebenen Flexion, Extension, Rotation, Lateralflexion
- Red-Flag-Ausschluss vor Messung (SOP Dokument 13)
- Gesicht entsteht unvermeidbar im Arbeitsspeicher; Persistenz nur mit Extra-Consent

## 7. Bekannte Limitationen (der PI zur Kenntnis)

- Mikrofon-Peak ist gain- und geräuschabhängig
- Pose-Schätzung hängt von Beleuchtung, Bekleidung, Kameradistanz ab
- Kein 3-D-optisches Motion-Capture im Produkt
- Referenzmethoden am Standort können schmaler sein als ein laborbasiertes Goldstandard-Labor; der Prüfplan bildet das ab

## 8. Kennzeichnung gegenüber Nutzenden

UI-Text im Studien-Build (DE):  
„Forschungsinstrument der Studie DIGIFUNK-Inntal. Keine Diagnose. Keine Therapieänderung. Messung nur im Studienkontext unter Verantwortung von AMEOS Klinikum Inntal.“

## 9. Änderungen

Jede Änderung an Algorithmus, UI-Risikoanzeige oder Datenfluss erfordert Freeze-Bruch, Kenntnis der CMO und in der Regel ein Protokoll-Amendment.

Hersteller: Moustafa Ali, Virtual Care Solution  
Datum: 08.09.2026  
Kenntnisnahme CMO: Unterschrift ______________________ Datum ______________________
