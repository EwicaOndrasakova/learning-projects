# Testovacie poznámky (priebežné, neverejný pracovný denník)

Cieľ: nezabudnúť, čo už bolo overené, aby sme to netestovali duplicitne.
Testované vždy cez Playwright (Chromium) na `localhost:8791`, pokiaľ nie je uvedené inak.

## Opravené a overené bugy
- **Overlay presah na nízkej výške** (welcome-card, settings-panel) – fix: `max-height` + `overflow-y: auto`.
  Overené na 667×320, tlačidlá Continue/Skip/Save aj zatváracie X sú dosiahnuteľné scrollom.
- **Pád appky pri zlyhaní localStorage** – fix: `safeSetItem()` wrapper okolo všetkých `setItem` volaní.
  Overené simuláciou `QuotaExceededError` (mock `Storage.prototype.setItem`) – appka už nespadne, úloha sa zobrazí,
  len sa neuloží natrvalo.
- **Úlohy naviazané na profil** (predtým zdieľané cez všetky "posledné prihlásenia") – fix: `profileStorageKey()`,
  scoped kľúče `tasks:<nickname>` atď., `switchProfileData()` pri zmene prezývky.
  Overené: guest/Alice/Bob majú oddelené zoznamy, reload zachová identitu, klik na "posledné prihlásenie" prepne
  správne dáta, migrácia starých plochých kľúčov (`tasks`, `recurringTemplates`, ...) na scoped kľúč funguje.

## UI/UX doplnky a overenia
- **Favicon** (`html/favicon.svg` + `<link rel="icon">`) – vracia HTTP 200, žiadny 404 v konzole.
- **Dotykové plochy zväčšené** (checkbox 20→24px, subtask-checkbox 16→20px, day-chip 34→42px, cal-header/day-nav
  tlačidlá, burger, close-btn, edit/delete/expand ikonky) – overené na 320px šírke, žiadny horizontálny presah.
- **"Všetky / Žiadne"** (pravý horný roh nad zoznamom úloh, dva odkazy oddelené lomkou – nie toggle, podľa
  referenčného screenshotu od používateľky) – pôsobia na aktuálne *filtrované/zobrazené* úlohy (rešpektuje Aktívne/Hotové
  filter aj deň). Keď je filtrovaný zoznam prázdny, oba sú `disabled` (sivé, `cursor:not-allowed`, neklikateľné).
  Overené: funguje v SK aj EN preklade, disabled/enabled stav pri prázdnom/neprázdnom zozname, obe tlačidlá
  funkčné nezávisle.
- **Zelená farba appky zmenená** (menej tmavá/zamazaná, sviežejší odtieň) – zmenené v `css/style.css`, `html/index.html`
  (ring farby), `js/script.js` (farba zajka-avatara). Vizuálne overené screenshotmi: tlačidlo Pridať, checkbox,
  hotová úloha, kalendár "celý deň splnený", prstenec "Dnešné úlohy" aj heatmapa aktivity – všade sviežia zelená.

## Staršie, stále platné overenia (z prvého kola review)
- XSS escapovanie (text úlohy, tag, poznámka, podúlohy) – bezpečné, overené `<script>`, `"`, `'`.
- Opakujúce sa úlohy: týždenné opakovanie generuje správne inštancie; "Vlastné dni" bez výberu dňa correctně
  spadne späť na jednorazovú úlohu.
- Responzivita 320px–1440px – žiadny horizontálny scroll (mimo opraveného bodu s overlay presahom vyššie).
- Cross-browser: testovací nástroj vie spustiť len Chromium. Firefox/Safari neboli reálne spustené - len kódová
  kontrola (Web Speech API sa už korektne skrýva keď chýba, žiadne iné browser-specific API sa nepoužíva).

## Zatiaľ neriešené / vedomé medzery (neboli explicitne vyžiadané)
- Chýba export/import úloh (JSON zálohovanie) – appka žije len v localStorage jedného prehliadača/zariadenia.
- Dark mode (`prefers-color-scheme`) nie je implementovaný.
- PWA/"Pridať na plochu" meta tagy (apple-touch-icon, theme-color, manifest.json) chýbajú.
- Globálny scope v `script.js` (žiadny IIFE/module wrap) – kozmetický code-quality bod, nie funkčný bug.
