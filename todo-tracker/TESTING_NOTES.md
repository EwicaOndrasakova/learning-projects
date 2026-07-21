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
- **Poradie Uložiť zmeny/Zrušiť pri editácii úlohy prehodené** – "Zrušiť" teraz vľavo, "Uložiť zmeny" (zelené,
  primárna akcia) vpravo. Overené vizuálne screenshotom.
- **Plynulá animácia rozbaľovania detailu úlohy** (▼ tlačidlo) – `.task-details` teraz prechádza cez
  `max-height`/`opacity`/`margin-top` transition namiesto okamžitého `display:none/block`. DÔLEŽITÉ: click handler
  na `.task-expand-btn` už nevolá celý `render()` (ktorý by DOM element zničil a znova vytvoril rovno v cieľovom
  stave bez animácie) - namiesto toho priamo prepína `.visible` triedu na existujúcom elemente. Overené: rovnaký
  DOM node ostáva zachovaný cez `sameNode === true` test pred/po kliku.
- **Toast notifikácie** (`#toastContainer`, fixed dole na strede, tmavo-fialová bublina, autoskrytie po ~2.2s) –
  pridané po pridaní úlohy, zmazaní úlohy, uložení zmien úlohy (edit form) a uložení profilu (Nastavenia).
  Overené: text aj SK/EN preklad správny, `showToast()` vytvorí element s triedou `visible` cez
  `requestAnimationFrame` (nutné pre CSS transition), vizuálne overené screenshotom pri simulovanom trvalom stave
  (keďže skutočný beh má len ~2.2s, čo je pod hranicou spoľahlivého zachytenia cez viacero Playwright tool-call
  round-tripov - mechanika overená priamo cez DOM/computed styles, nie len screenshotom).

## Staršie, stále platné overenia (z prvého kola review)
- XSS escapovanie (text úlohy, tag, poznámka, podúlohy) – bezpečné, overené `<script>`, `"`, `'`.
- Opakujúce sa úlohy: týždenné opakovanie generuje správne inštancie; "Vlastné dni" bez výberu dňa correctně
  spadne späť na jednorazovú úlohu.
- Responzivita 320px–1440px – žiadny horizontálny scroll (mimo opraveného bodu s overlay presahom vyššie).
- Cross-browser: testovací nástroj vie spustiť len Chromium. Firefox/Safari neboli reálne spustené - len kódová
  kontrola (Web Speech API sa už korektne skrýva keď chýba, žiadne iné browser-specific API sa nepoužíva).

## Zatiaľ neriešené / vedomé medzery (neboli explicitne vyžiadané)
- Chýba export/import úloh (JSON zálohovanie) – appka žije len v localStorage jedného prehliadača/zariadenia.
- Zmazanie úlohy je okamžité a nezvratné – žiadne potvrdenie ani undo.
- Podúlohy sa nedajú premenovať (len pridať/odškrtnúť/zmazať).
- Úlohy sa v zozname nezoraďujú podľa priority (len podľa poradia pridania).
- Chýbajú aria-labels na ikonových tlačidlách (✕, ceruzka, ▼).
- Dark mode (`prefers-color-scheme`) nie je implementovaný.
- PWA/"Pridať na plochu" meta tagy (apple-touch-icon, theme-color, manifest.json) chýbajú.
- Globálny scope v `script.js` (žiadny IIFE/module wrap) – kozmetický code-quality bod, nie funkčný bug.

## Implementované z minulej spätnej väzby
- **Náhľad úloh pod kalendárom v Calendar view (IMPLEMENTOVANÉ).** Klik na deň v kalendári už neprepína na List
  view - ostáva v Calendar view, deň sa zvýrazní (`.cal-day.selected`, fialový box-shadow rámik) a pod kalendárom
  (`#calDayPreview`) sa zobrazí kompaktný, len-na-čítanie zoznam úloh pre ten deň (`renderCalDayPreview()`),
  s plynulým scrollom (`scrollIntoView({behavior:'smooth'})`) k nemu. Riadky sú menšie/jednoduchšie než v List
  view - len farebný pásik podľa priority + text (`white-space:nowrap` + ellipsis pri dlhom texte), žiadny
  checkbox/edit/delete. Klik na konkrétnu úlohu v náhľade prenesie do List view na ten istý deň, kde sa dá
  upravovať/mazať ako doteraz. Prázdny deň ukáže rovnaké "Žiadne úlohy tu nie sú"/"No tasks here" hlásenie ako
  List view. Vybraný deň (`calPreviewDate`) ostáva zvýraznený a náhľad zostáva viditeľný aj pri prepnutí mesiaca
  (label vždy jednoznačne ukazuje dátum, aj keď mriežka kalendára ukazuje iný mesiac).
  Overené: klik na deň nezmení tab, klik na úlohu prenesie do List view a nastaví správny deň, prázdny deň,
  dlhý text úlohy sa skráti ellipsis bez pretečenia na 320px, prepnutie mesiaca s aktívnym náhľadom nespadne,
  SK aj EN preklad (dátumový label aj "no tasks" hláška).
- **Dnešný deň predvolene vybraný pri prvom vstupe do Calendar view** – `activateTab('calendar')` nastaví
  `calPreviewDate = todayStr()` len ak ešte nič vybrané nebolo (`calPreviewDate === null`). Ak si už predtým
  vybrala iný deň, ten ostáva zachovaný aj pri prepnutí na iný tab a späť (nereseuje sa na dnešok pri každom
  vstupe). Overené: prvý vstup ukáže "Dnes" s náhľadom, výber iného dňa prežije prepnutie na List a späť.
- **Login/My Profile/Log out prestavba.** Tlačidlo "Pokračovať" na uvítacej obrazovke je teraz "Login"/"Login".
  Hamburger menu už neotvára Nastavenia rovno - je to skutočné dropdown menu (`#burgerMenu`) s položkami
  **My Profile** (bývalý panel Nastavenia, teraz s poľami Dátum narodenia a Pohlavie Muž/Žena navyše k
  Prezývke/Avataru/Emailu) a **Log out** (vynuluje `profile` na `null`, prepne dáta na `_guest` cez
  `switchProfileData('')`, vyprázdni polia na uvítacej obrazovke a znova ju zobrazí - dáta úloh sa nemažú).
  `saveProfile()` teraz berie jeden objekt `{nickname, email, avatarId, birthday, gender}` namiesto pozičných
  argumentov, a chýbajúce polia dopĺňa z existujúceho záznamu danej prezývky (z `profiles`) alebo z aktuálneho
  profilu - vďaka tomu Login/Skip obrazovka (ktorá birthday/gender vôbec nepozná) tieto polia neprepíše/nevymaže.
  Overené: uloženie birthday+gender v My Profile, Log out vyprázdni meno a zobrazí welcome, opätovné prihlásenie
  pod tým istým menom cez Login formulár (ktorý nemá birthday/gender polia) správne zachová predtým uložené
  birthday="1995-03-14" a gender="female".
- **Vizuálny redesign inšpirovaný "Caldera" štýlom** (z https://styles.refero.design/style/fe8cdcf9-...) –
  adaptovaný duch (plochý dizajn, sebavedomá paleta, pill tvary), nie doslovná kópia (pôvodný štýl je pre
  landing page s hero sekciami, nie kompaktnú kartovú appku). Zmeny:
  - Font `DM Sans` (Google Fonts, pridané `<link>` v `index.html`) namiesto `Segoe UI`.
  - `body`/`.welcome-overlay` gradient nahradený plochou farbou `#e4e0f2` (žiadne farebné prechody).
  - Odstránené takmer všetky `box-shadow` (`.app`, `.welcome-card`, `.settings-panel`, `.burger-menu`,
    `.toast`, `.tab-btn.active`, `li.task:hover`) - ostali len "ring" efekty (`.cal-day.selected`,
    `.activity-bar.today`), ktoré sú vizuálne obrysy, nie hĺbkové tiene.
  - Hlavná fialová akcentová farba `#c9b6f0` → sýtejšia `#5b3df0` (a hover `#b8a2e8` → `#4930d1`) - **globálny
    sed replace**, dotklo sa to tab-btn.active, day-chip.selected, focus rings na vstupoch, primary-btn,
    lang-btn.active, gender-btn.selected. Vedomé rozhodnutie: NIE oranžová (ako v originálnom štýle), lebo by
    kolidovala s existujúcim farebným kódovaním priority úloh (stredná priorita je už oranžová/žltá).
  - Zväčšené zaoblenie naprieč appkou - primárne tlačidlá/inputy/filter/tab/day-nav na plný pill (`999px`),
    karty (`.app`, `.welcome-card`, `.settings-panel`, `.badge`, `.rings-summary`) na 20-28px (predtým 12-20px).
  - `h1`, `.welcome-card h2`, `.settings-header h3` dostali `font-weight:800` + `letter-spacing:-0.02em` +
    tmavšiu takmer-čiernu farbu `#211c38` (predtým `#6b5b95`) - zvyšné menšie fialové akcenty (badge-name,
    rings-legend, cal month label...) zostali pri pôvodnej `#6b5b95`, nech appka nestratí celú identitu.
  Overené: vizuálne screenshotmi na 420px aj 320px (žiadny horizontálny presah), font DM Sans sa reálne
  načítal (`document.fonts.check('700 16px "DM Sans"')` → true), všetky views (List/Calendar/Overview),
  burger menu aj My Profile panel prekontrolované. **Ľahko vratiteľné cez git, ak by sa nepáčilo.**
