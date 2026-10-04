# Risikomanagementakte (ISO 14971, Kurzfassung Studienkontext)

**DIGIFUNK-Inntal · Dokument 08 · Version 1.0 · 08.09.2026**  
Verantwortlich für die Software-Risikoakte: Virtual Care Solution  
Verantwortlich für den klinischen Einsatz: institutionelle PI AMEOS Klinikum Inntal (CMO Dr. Liebmann)

Kein Ersatz für eine vollständige technische Dokumentation nach MDR Anhang II. Ausreichend als studienbezogene Hazard-Analyse für Art. 82 / EK.

---

## 1. Intended-use in der Studie

Messung und wissenschaftliche Bewertung. **Nicht:** Diagnose, Therapie, Alarmierung, Triage, Entlassmanagement.

## 2. Wesentliche Gefährdungen

| ID | Hazard | Harm | Schwere (vor/nach Kontrolle) | Kontrolle in dieser Studie |
|---|---|---|---|---|
| H1 | Falsch niedrige Atem-Proxy-Werte | Unnötige Angst, Fehlinterpretation als Lungenbefund | Mittel → Niedrig | Keine Therapieentscheidung; Ampel aus; Werte nur auf Wunsch mit Behandler |
| H2 | Falsch hoher/low ROM | Falsches Leistungsbild | Mittel → Niedrig | Nur Forschung; Referenzmessung parallel |
| H3 | „Risiko-Score“ als Sturzrisiko gelesen | Über- oder Untermobilisation | Hoch → Niedrig | Anzeige im Studien-Build deaktiviert |
| H4 | Forcierte Exspiration | Schwindel, Synkope | Mittel → Niedrig | Sitzend, Ausschlusskriterien, Anwesenheit, Abbruch |
| H5 | Ganganalyse | Sturz | Mittel → Niedrig | Begleitung, freier Raum, Stopp |
| H6 | Zervikales ROM | Schmerz, vaskuläre/neurologische Komplikation | Hoch → Niedrig | Red-Flag-SOP, keine forcierten Endgrade, Stopp-Wort |
| H7 | Video/Audio-Abfluss | Identitäts- und Gesundheitsdatenpanne | Hoch → Niedrig | Lokal only, Share aus, kein Herstellerzugriff, Opt-in Rohdaten |
| H8 | Cloud-Fehlkonfiguration | Datenvorfall | Hoch → Niedrig | Kein Cloud-Messbackend im Freeze |
| H9 | Therapeutic misconception | Teilnahme in der Hoffnung auf bessere Therapie | Mittel → Niedrig | PIS, ärztliche Aufklärung durch PI, nicht durch Hersteller |
| H10 | COI steuert Einschluss/Auswertung | Wissenschaftlicher Schaden, Vertrauensschaden | Hoch → Niedrig | Dokument 02/11, unabhängige Biometrie |
| H11 | Symptomfokussierung in der Psychosomatik | Verstärkte Körpersymptome | Mittel → Niedrig | Keine Ampel, optionale Nicht-Einsicht, Team-Schulung |
| H12 | Dritte im Kamerabild (Home) | Fremddatenschutz | Mittel → Niedrig | SOP Home, Leihtablet, Opt-in, kein Video-Upload |

## 3. Nutzen-Risiko (Studienkontext)

Individueller klinischer Nutzen: keiner. Residualrisiko nach Kontrollen: gering und der wissenschaftlichen Fragestellung angemessen, **sofern** die PI die Kontrollen (Freeze, Firewall, SOP) tatsächlich durchsetzt.

## 4. Residualrisiko-Erklärung der PI

Die CMO bestätigt mit Kenntnisnahme, dass die klinischen Kontrollen (Aufklärung, Red Flags, kein Therapiebezug, UE-Erfassung) in ihren Häusern umsetzbar sind.

CMO: Unterschrift ______________________ Datum ______________________  
Hersteller: Unterschrift ______________________ Datum ______________________
