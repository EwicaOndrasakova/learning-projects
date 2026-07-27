# Kalendár ako landing page

## Cieľ

Po prihlásení má užívateľ hneď vidieť aký je deň a zoznam úloh na dnes, bez toho aby musel prepínať tab alebo klikať na deň v mriežke. Poradie tabov sa mení na Kalendár → Zoznam → Prehľad, s Kalendárom ako defaultne aktívnym tabom.

## Zmeny

1. **Poradie a default tab** (`html/index.html:73-76`)
   Tri tab-tlačidlá (`data-tab="calendar|list|badges"`) sa preusporiadajú na poradie Kalendár, Zoznam, Prehľad. Trieda `active` sa presunie z `data-tab="list"` / `#view-list` na `data-tab="calendar"` / `#view-calendar`.

2. **Automaticky rozbalený dnešný deň** (`js/script.js:442`)
   `calPreviewDate` sa inicializuje na `todayStr()` namiesto `null`. Keďže `render(); renderCalendar(); renderBadges();` sa už teraz volajú pri načítaní stránky (`js/script.js:1652-1654`), táto zmena zabezpečí, že náhľad dnešných úloh pod mesačnou mriežkou sa vykreslí hneď pri prvom načítaní — bez potreby kliknúť na deň.

3. **Poradie view blokov** (`html/index.html`, `<div class="view" id="view-...">`)
   Kozmetická úprava — poradie troch `.view` blokov v HTML sa preusporiada tak, aby zodpovedalo poradiu tabov (Kalendár, Zoznam, Prehľad). Bez funkčného dopadu.

## Mimo rozsahu

- Tlačidlo "+ Pridať úlohu" v náhľade dňa v Kalendári už teraz presmerúva do Zoznamu a otvorí formulár na pridanie úlohy (`js/script.js:1299-1308`) — toto správanie sa nemení.
- Logika pridávania úloh, filtre, badge/streak systém — bez zmien.

## Testovanie

Po implementácii manuálne overiť v prehliadači:
- Po prihlásení (welcome overlay) sa otvorí Kalendár tab, nie Zoznam.
- Poradie tabov v navigácii je Kalendár, Zoznam, Prehľad.
- Pod mesačnou mriežkou je hneď viditeľný náhľad dnešných úloh (bez kliku).
- Kliknutie na "+ Pridať úlohu" v náhľade dňa prepne na Zoznam a otvorí formulár, tak ako doteraz.
- Prepínanie medzi všetkými tromi tabmi funguje správne (pill animácia, obsah).
