  // --- Preklady (SK/EN) ---
  const translations = {
    sk: {
      welcomeTitle: 'Vitaj v To-Do Trackeri',
      welcomeSubtitle: 'Ako ťa mám volať?',
      recentLogins: 'Posledné prihlásenia',
      fieldNickname: 'Prezývka',
      fieldAvatar: 'Postavička',
      fieldEmail: 'Email',
      optionalTag: '(voliteľné)',
      nicknamePlaceholder: 'napr. Janka',
      emailPlaceholder: 'tvoj@email.sk',
      continueBtn: 'Pokračovať',
      skipBtn: 'Preskočiť zatiaľ',
      greetingHi: 'Ahoj,',
      appTitle: 'Môj To-Do Tracker',
      tabList: 'Zoznam',
      tabCalendar: 'Kalendár',
      tabBadges: 'Prehľad',
      taskInputPlaceholder: 'Napíš novú úlohu...',
      micTitle: 'Hlasové pridanie úlohy',
      addBtn: 'Pridať',
      moreOptionsShow: '+ Priorita, tag, poznámka',
      moreOptionsHide: '– Skryť možnosti',
      priorityLow: 'Nízka priorita',
      priorityMedium: 'Stredná priorita',
      priorityHigh: 'Vysoká priorita',
      tagPlaceholder: 'Tag (napr. práca)',
      notesPlaceholder: 'Poznámka k úlohe (voliteľné)',
      recurrenceNone: 'Bez opakovania',
      recurrenceDaily: 'Každý deň',
      recurrenceWeekly: 'Raz týždenne (rovnaký deň)',
      recurrenceCustom: 'Vlastné dni',
      dayMon: 'Po', dayTue: 'Ut', dayWed: 'St', dayThu: 'Št', dayFri: 'Pi', daySat: 'So', daySun: 'Ne',
      searchPlaceholder: 'Hľadať v úlohách...',
      prevDay: 'Predchádzajúci deň',
      nextDay: 'Nasledujúci deň',
      filterAll: 'Všetky',
      filterActive: 'Aktívne',
      filterDone: 'Hotové',
      bulkAllBtn: 'Všetky',
      bulkNoneBtn: 'Žiadne',
      emptyList: 'Žiadne úlohy tu nie sú',
      calLegendFull: 'Celý deň splnený',
      calLegendPartial: 'Čiastočne splnený',
      ringsToday: 'Dnešné úlohy',
      ringsStreak: 'Séria dní v rade',
      ringsTotal: 'Splnené spolu',
      ringsNote: 'Séria dní v rade = koľko dní po sebe máš úplne všetky úlohy splnené.',
      successWeekly: 'Úspešnosť za týždeň',
      successMonthly: 'Úspešnosť za mesiac',
      heatmapTitle: 'Aktivita za posledných 14 dní',
      heatmapSubtitle: 'Výška stĺpca = koľko % úloh si v ten deň splnila.',
      heatmapLess: 'menej',
      heatmapMore: 'viac',
      settingsTitle: 'Nastavenia profilu',
      settingsSave: 'Uložiť',
      subtaskPlaceholder: 'Pridať podúlohu...',
      subtaskAdd: 'Pridať',
      editTitle: 'Upraviť úlohu',
      saveBtn: 'Uložiť zmeny',
      cancelBtn: 'Zrušiť',
      today: 'Dnes', tomorrow: 'Zajtra', yesterday: 'Včera',
      dowFull: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
      dowShort: ['Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne'],
      months: ['Január','Február','Marec','Apríl','Máj','Jún','Júl','August','September','Október','November','December'],
      statsTaskWord: 'úloh hotových',
      statsFoundWord: 'nájdených úloh hotových',
      quickSuggestions: [
        { text: '🏃 Cvičenie 30 min', priority: 'high' },
        { text: '💧 Vypiť 2l vody', priority: 'low' },
        { text: '🧹 Upratať izbu', priority: 'medium' },
        { text: '📖 Prečítať knihu', priority: 'low' },
        { text: '🗓️ Naplánovať deň', priority: 'high' },
        { text: '🚶 Prechádzka von', priority: 'low' },
        { text: '🧘 Meditácia 10 min', priority: 'medium' }
      ],
      badgeNames: {
        streak3: '3 dni v rade', streak7: 'Celý týždeň', streak14: 'Dva týždne', streak30: 'Mesačná séria',
        ten: 'Rozbeh', fifty: 'Výkonná séria', hundred: 'Storka', twohund: 'Majster úloh'
      },
      badgeGoalStreak: 'cieľ: {n} dní v rade',
      badgeGoalTotal: 'cieľ: {n} splnených',
      badgeDone: 'Dosiahnuté',
      speechLang: 'sk-SK'
    },
    en: {
      welcomeTitle: 'Welcome to your To-Do Tracker',
      welcomeSubtitle: 'What should I call you?',
      recentLogins: 'Recent logins',
      fieldNickname: 'Nickname',
      fieldAvatar: 'Avatar',
      fieldEmail: 'Email',
      optionalTag: '(optional)',
      nicknamePlaceholder: 'e.g. Jane',
      emailPlaceholder: 'you@email.com',
      continueBtn: 'Continue',
      skipBtn: 'Skip for now',
      greetingHi: 'Hi,',
      appTitle: 'My To-Do Tracker',
      tabList: 'List',
      tabCalendar: 'Calendar',
      tabBadges: 'Overview',
      taskInputPlaceholder: 'Write a new task...',
      micTitle: 'Add task by voice',
      addBtn: 'Add',
      moreOptionsShow: '+ Priority, tag, note',
      moreOptionsHide: '– Hide options',
      priorityLow: 'Low priority',
      priorityMedium: 'Medium priority',
      priorityHigh: 'High priority',
      tagPlaceholder: 'Tag (e.g. work)',
      notesPlaceholder: 'Note for the task (optional)',
      recurrenceNone: 'No repeat',
      recurrenceDaily: 'Every day',
      recurrenceWeekly: 'Weekly (same day)',
      recurrenceCustom: 'Custom days',
      dayMon: 'Mon', dayTue: 'Tue', dayWed: 'Wed', dayThu: 'Thu', dayFri: 'Fri', daySat: 'Sat', daySun: 'Sun',
      searchPlaceholder: 'Search tasks...',
      prevDay: 'Previous day',
      nextDay: 'Next day',
      filterAll: 'All',
      filterActive: 'Active',
      filterDone: 'Done',
      bulkAllBtn: 'All',
      bulkNoneBtn: 'None',
      emptyList: 'No tasks here',
      calLegendFull: 'Fully completed day',
      calLegendPartial: 'Partially completed',
      ringsToday: "Today's tasks",
      ringsStreak: 'Streak in a row',
      ringsTotal: 'Completed total',
      ringsNote: 'Streak in a row = how many days in a row you completed absolutely all your tasks.',
      successWeekly: 'Weekly success rate',
      successMonthly: 'Monthly success rate',
      heatmapTitle: 'Activity in the last 14 days',
      heatmapSubtitle: 'Bar height = % of tasks completed that day.',
      heatmapLess: 'less',
      heatmapMore: 'more',
      settingsTitle: 'Profile settings',
      settingsSave: 'Save',
      subtaskPlaceholder: 'Add a subtask...',
      subtaskAdd: 'Add',
      editTitle: 'Edit task',
      saveBtn: 'Save changes',
      cancelBtn: 'Cancel',
      today: 'Today', tomorrow: 'Tomorrow', yesterday: 'Yesterday',
      dowFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dowShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      statsTaskWord: 'tasks completed',
      statsFoundWord: 'found tasks completed',
      quickSuggestions: [
        { text: '🏃 Exercise 30 min', priority: 'high' },
        { text: '💧 Drink 2l of water', priority: 'low' },
        { text: '🧹 Clean the room', priority: 'medium' },
        { text: '📖 Read a book', priority: 'low' },
        { text: '🗓️ Plan the day', priority: 'high' },
        { text: '🚶 Go for a walk', priority: 'low' },
        { text: '🧘 Meditate 10 min', priority: 'medium' }
      ],
      badgeNames: {
        streak3: '3 days in a row', streak7: 'Full week', streak14: 'Two weeks', streak30: 'Monthly streak',
        ten: 'Getting started', fifty: 'Strong streak', hundred: 'Century', twohund: 'Task master'
      },
      badgeGoalStreak: 'goal: {n} days in a row',
      badgeGoalTotal: 'goal: {n} completed',
      badgeDone: 'Achieved',
      speechLang: 'en-US'
    }
  };

  let currentLang = localStorage.getItem('language') || 'en';

  function t(key) {
    return translations[currentLang][key] || translations.sk[key] || key;
  }

  // Nastaví text/placeholder/title/aria-label na všetkých prvkoch s data-i18n atribútmi
  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.dataset.i18nTitle);
    });
    document.querySelectorAll('[data-i18n-arialabel]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nArialabel));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    safeSetItem('language', lang);
    applyTranslations();
    // Prekreslíme všetko, čo obsahuje dynamicky generovaný (nejazykovo-neutrálny) text
    if (typeof render === 'function') render();
    if (typeof renderCalendar === 'function') renderCalendar();
    if (typeof renderBadges === 'function') renderBadges();
    if (typeof buildQuickSuggestions === 'function') buildQuickSuggestions();
    if (typeof updateDayNav === 'function') updateDayNav();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Bezpečné čítanie z localStorage - ak je uložená hodnota poškodená (napr. ručne upravená),
  // JSON.parse by inak zhodil celú appku hneď pri načítaní.
  function safeParse(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  // Bezpečný zápis do localStorage - v privátnom prehliadaní (napr. Safari) alebo
  // pri plnom úložisku setItem hádže výnimku. Bez tohto by pád nastal uprostred
  // addTask()/toggleTask()/atď. a zvyšok funkcie (render, reset formulára) by sa vôbec nevykonal.
  function safeSetItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Dáta ostávajú aspoň v pamäti (v premennej tasks/profile/...) pre aktuálnu session
    }
  }

  // Vracia kľúč, pod ktorým sú v localStorage uložené úlohy/šablóny/odznaky patriace
  // danej prezývke - vďaka tomu majú rôzne profily (napr. viacero ľudí na jednom
  // počítači) oddelené zoznamy úloh namiesto jedného spoločného.
  function profileStorageKey(nickname) {
    const normalized = (nickname || '').trim().toLowerCase();
    return normalized || '_guest';
  }

  let profile = safeParse('profile', null);

  // Jednorazová migrácia: appka predtým ukladala úlohy/šablóny/odznaky pod jedným
  // spoločným kľúčom bez ohľadu na profil. Existujúce dáta presunieme pod aktuálne
  // aktívny profil, nech sa touto zmenou nestratia.
  (function migrateToProfileScopedStorage() {
    if (localStorage.getItem('tasks') === null) return;
    const scopeKey = profileStorageKey(profile ? profile.nickname : '');
    ['tasks', 'recurringTemplates', 'recurringExclusions', 'unlockedBadges'].forEach(name => {
      const legacyValue = localStorage.getItem(name);
      if (legacyValue !== null && localStorage.getItem(name + ':' + scopeKey) === null) {
        safeSetItem(name + ':' + scopeKey, legacyValue);
      }
      localStorage.removeItem(name);
    });
  })();

  let tasks = safeParse('tasks:' + profileStorageKey(profile ? profile.nickname : ''), []);
  let currentFilter = 'all';
  let calDate = new Date();
  let calPreviewDate = null; // ktorý deň má práve otvorený náhľad úloh v Calendar view

  // Migrácia: staršie úlohy (vytvorené pred pridaním dátumového políčka)
  // nemuseli mať uložený dátum – bez neho by ich kalendár nevedel priradiť k žiadnemu dňu.
  (function migrateMissingDates() {
    const fallback = new Date();
    const fallbackKey = fallback.getFullYear() + '-' + String(fallback.getMonth() + 1).padStart(2, '0') + '-' + String(fallback.getDate()).padStart(2, '0');
    let changed = false;
    tasks = tasks.map(tk => {
      let updated = tk;
      if (!updated.date) {
        changed = true;
        updated = { ...updated, date: fallbackKey };
      }
      // Doplníme defaultné hodnoty pre polia, ktoré staršie úlohy nemuseli mať
      if (updated.priority === undefined || updated.tag === undefined || updated.notes === undefined || updated.subtasks === undefined) {
        changed = true;
        updated = {
          ...updated,
          priority: updated.priority || 'medium',
          tag: updated.tag || '',
          notes: updated.notes || '',
          subtasks: updated.subtasks || []
        };
      }
      return updated;
    });
    if (changed) safeSetItem('tasks:' + profileStorageKey(profile ? profile.nickname : ''), JSON.stringify(tasks));
  })();

  const taskInput = document.getElementById('taskInput');
  const dateInput = document.getElementById('dateInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');
  const stats = document.getElementById('stats');
  const bulkAllBtn = document.getElementById('bulkAllBtn');
  const bulkNoneBtn = document.getElementById('bulkNoneBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const recurrenceSelect = document.getElementById('recurrenceSelect');
  const customDaysRow = document.getElementById('customDaysRow');
  const quickSuggestionsBox = document.getElementById('quickSuggestions');
  const moreOptionsToggle = document.getElementById('moreOptionsToggle');
  const moreOptionsBox = document.getElementById('moreOptionsBox');
  const prioritySelect = document.getElementById('prioritySelect');
  const tagInput = document.getElementById('tagInput');
  const notesInput = document.getElementById('notesInput');
  const searchInput = document.getElementById('searchInput');
  const micBtn = document.getElementById('micBtn');

  moreOptionsToggle.addEventListener('click', () => {
    const isOpen = moreOptionsBox.classList.toggle('visible');
    moreOptionsToggle.textContent = isOpen ? t('moreOptionsHide') : t('moreOptionsShow');
  });

  let searchQuery = '';

  // --- Navigátor dní: Zoznam defaultne zobrazuje len úlohy pre vybraný deň ---
  let viewDate = todayStr();
  const dayNav = document.getElementById('dayNav');
  const dayNavLabel = document.getElementById('dayNavLabel');

  function formatDayLabel(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const todayD = new Date(todayStr() + 'T00:00:00');
    const diffDays = Math.round((d - todayD) / 86400000);

    if (diffDays === 0) return t('today');
    if (diffDays === 1) return t('tomorrow');
    if (diffDays === -1) return t('yesterday');
    return `${d.getDate()}. ${d.getMonth() + 1}. (${t('dowFull')[d.getDay()]})`;
  }

  function updateDayNav() {
    dayNavLabel.textContent = formatDayLabel(viewDate);
  }
  updateDayNav();

  function shiftViewDate(deltaDays) {
    const d = new Date(viewDate + 'T00:00:00');
    d.setDate(d.getDate() + deltaDays);
    viewDate = dateKey(d.getFullYear(), d.getMonth(), d.getDate());
    updateDayNav();
    dateInput.value = viewDate; // nová úloha sa pridá rovno na prezeraný deň
    render();
  }

  document.getElementById('prevDayBtn').addEventListener('click', () => shiftViewDate(-1));
  document.getElementById('nextDayBtn').addEventListener('click', () => shiftViewDate(1));

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    // Kým hľadáš, dátumový navigátor nemá zmysel (hľadanie prehľadáva úplne všetky dni)
    dayNav.classList.toggle('hidden', searchQuery.length > 0);
    render();
  });

  // --- Hlasové pridávanie úlohy (Web Speech API) ---
  const SpeechRecognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognitionApi) {
    // Prehliadač túto funkciu nepodporuje - tlačidlo radšej skryjeme, nech nemätie
    micBtn.style.display = 'none';
  } else {
    const recognition = new SpeechRecognitionApi();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let isListening = false;

    micBtn.addEventListener('click', () => {
      if (isListening) {
        recognition.stop();
        return;
      }
      try {
        recognition.lang = t('speechLang'); // podľa aktuálne zvoleného jazyka appky (SK/EN)
        recognition.start();
        isListening = true;
        micBtn.classList.add('listening');
      } catch (e) {
        // start() môže zlyhať, ak už jedna inštancia beží - jednoducho ticho ignorujeme
      }
    });

    recognition.addEventListener('result', (event) => {
      const transcript = event.results[0][0].transcript;
      taskInput.value = transcript;
    });

    recognition.addEventListener('end', () => {
      isListening = false;
      micBtn.classList.remove('listening');
    });

    recognition.addEventListener('error', () => {
      isListening = false;
      micBtn.classList.remove('listening');
    });
  }

  function todayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // Jednotný generátor ID pre úlohy/podúlohy - Date.now() samotné by pri dvoch
  // pridaniach v tej istej milisekunde spôsobilo kolíziu ID.
  function generateId() {
    return Date.now() + Math.random();
  }

  // Pri načítaní stránky nastavíme dátumovému inputu dnešný deň ako predvolený
  dateInput.value = todayStr();

  function saveTasks() {
    safeSetItem('tasks:' + profileStorageKey(profile ? profile.nickname : ''), JSON.stringify(tasks));
  }

  // --- Opakovanie úloh (šablóny) ---

  let recurringTemplates = safeParse('recurringTemplates:' + profileStorageKey(profile ? profile.nickname : ''), []);
  let recurringExclusions = safeParse('recurringExclusions:' + profileStorageKey(profile ? profile.nickname : ''), []); // zoznam "templateId|dátum", ktoré si vedome zmazal/a
  let selectedCustomDays = []; // dni vybrané pri "Vlastné dni" (0=Ne .. 6=So)

  recurrenceSelect.addEventListener('change', () => {
    customDaysRow.classList.toggle('visible', recurrenceSelect.value === 'custom');
  });

  document.querySelectorAll('.day-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const day = Number(chip.dataset.day);
      if (selectedCustomDays.includes(day)) {
        selectedCustomDays = selectedCustomDays.filter(d => d !== day);
        chip.classList.remove('selected');
      } else {
        selectedCustomDays.push(day);
        chip.classList.add('selected');
      }
    });
  });

  function saveRecurringTemplates() {
    safeSetItem('recurringTemplates:' + profileStorageKey(profile ? profile.nickname : ''), JSON.stringify(recurringTemplates));
  }

  function saveRecurringExclusions() {
    safeSetItem('recurringExclusions:' + profileStorageKey(profile ? profile.nickname : ''), JSON.stringify(recurringExclusions));
  }

  // Zistí, či daný dátum (Date objekt) zodpovedá pravidlu opakovania danej šablóny
  function matchesRecurrence(template, dateObj) {
    const dow = dateObj.getDay(); // 0 = nedeľa ... 6 = sobota
    if (template.type === 'daily') return true;
    if (template.type === 'weekly') return dow === template.days[0];
    if (template.type === 'custom') return template.days.includes(dow);
    return false;
  }

  // Pre každú šablónu vygeneruje chýbajúce inštancie úloh od jej začiatku
  // až 30 dní dopredu (nech je vidno aj nadchádzajúce dni v kalendári)
  function generateRecurringInstances() {
    if (recurringTemplates.length === 0) return;

    const horizon = new Date();
    horizon.setDate(horizon.getDate() + 30);

    let changed = false;

    recurringTemplates.forEach(tpl => {
      let cursor = new Date(tpl.startDate + 'T00:00:00');
      while (cursor <= horizon) {
        if (matchesRecurrence(tpl, cursor)) {
          const key = dateKey(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
          const exclusionKey = tpl.id + '|' + key;
          const alreadyExists = tasks.some(tk => tk.templateId === tpl.id && tk.date === key);
          const wasExcluded = recurringExclusions.includes(exclusionKey);

          if (!alreadyExists && !wasExcluded) {
            tasks.push({
              id: generateId(),
              text: tpl.text,
              done: false,
              date: key,
              templateId: tpl.id,
              priority: tpl.priority || 'medium',
              tag: tpl.tag || '',
              notes: tpl.notes || '',
              subtasks: []
            });
            changed = true;
          }
        }
        cursor.setDate(cursor.getDate() + 1);
      }
    });

    if (changed) saveTasks();
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const recurrenceType = recurrenceSelect.value;
    const startDate = dateInput.value || todayStr();
    const priority = prioritySelect.value;
    const tag = tagInput.value.trim();
    const notes = notesInput.value.trim();

    if (recurrenceType === 'none') {
      tasks.push({
        id: generateId(),
        text: text,
        done: false,
        date: startDate,
        priority: priority,
        tag: tag,
        notes: notes,
        subtasks: []
      });
      saveTasks();
    } else {
      // Vytvoríme šablónu opakovania a necháme ju rovno vygenerovať potrebné inštancie
      const startDow = new Date(startDate + 'T00:00:00').getDay();
      const template = {
        id: 'tpl_' + generateId(),
        text: text,
        type: recurrenceType,
        days: recurrenceType === 'weekly' ? [startDow] : (recurrenceType === 'custom' ? selectedCustomDays.slice() : []),
        startDate: startDate,
        priority: priority,
        tag: tag,
        notes: notes
      };

      // Pri "Vlastné dni" bez zvolenia žiadneho dňa to berieme ako jednorazovú úlohu
      if (recurrenceType === 'custom' && template.days.length === 0) {
        tasks.push({ id: generateId(), text: text, done: false, date: startDate, priority: priority, tag: tag, notes: notes, subtasks: [] });
        saveTasks();
      } else {
        recurringTemplates.push(template);
        saveRecurringTemplates();
        generateRecurringInstances();
      }
    }

    taskInput.value = '';
    dateInput.value = todayStr();
    recurrenceSelect.value = 'none';
    customDaysRow.classList.remove('visible');
    selectedCustomDays = [];
    document.querySelectorAll('.day-chip').forEach(c => c.classList.remove('selected'));
    prioritySelect.value = 'medium';
    tagInput.value = '';
    notesInput.value = '';
    moreOptionsBox.classList.remove('visible');
    moreOptionsToggle.textContent = t('moreOptionsShow');

    render();
    renderCalendar();
    renderBadges();
  }

  // Rýchle pridanie úlohy z prednastavených nápadov (bez opakovania, na aktuálne zvolený dátum)
  function quickAddTask(text, priority) {
    tasks.push({
      id: generateId(),
      text: text,
      done: false,
      date: dateInput.value || todayStr(),
      priority: priority || 'medium',
      tag: '',
      notes: '',
      subtasks: []
    });
    saveTasks();
    render();
    renderCalendar();
    renderBadges();
  }

  function buildQuickSuggestions() {
    quickSuggestionsBox.innerHTML = '';
    t('quickSuggestions').forEach(item => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'quick-chip';
      chip.textContent = '+ ' + item.text;
      chip.title = t('priority' + item.priority.charAt(0).toUpperCase() + item.priority.slice(1));
      chip.addEventListener('click', () => quickAddTask(item.text, item.priority));
      quickSuggestionsBox.appendChild(chip);
    });
  }
  buildQuickSuggestions();

  function toggleTask(id) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    saveTasks();
    render();
    renderCalendar();
    renderBadges();
  }

  // Označí/zruší ako hotové len úlohy, ktoré sú práve zobrazené (rešpektuje
  // hľadanie, filter Aktívne/Hotové aj vybraný deň) - nie úplne všetky úlohy v appke.
  function setFilteredTasksDone(done) {
    const visibleIds = new Set(getFilteredTasks().map(tk => tk.id));
    if (visibleIds.size === 0) return;
    tasks = tasks.map(task => visibleIds.has(task.id) ? { ...task, done } : task);
    saveTasks();
    render();
    renderCalendar();
    renderBadges();
  }

  // --- Podúlohy (checklist v rámci jednej úlohy) ---
  function addSubtask(taskId, text) {
    if (!text.trim()) return;
    tasks = tasks.map(task => {
      if (task.id !== taskId) return task;
      const subtasks = task.subtasks || [];
      return { ...task, subtasks: [...subtasks, { id: generateId(), text: text.trim(), done: false }] };
    });
    saveTasks();
    render();
  }

  function toggleSubtask(taskId, subtaskId) {
    tasks = tasks.map(task => {
      if (task.id !== taskId) return task;
      const subtasks = (task.subtasks || []).map(st =>
        st.id === subtaskId ? { ...st, done: !st.done } : st
      );
      return { ...task, subtasks };
    });
    saveTasks();
    render();
  }

  function deleteSubtask(taskId, subtaskId) {
    tasks = tasks.map(task => {
      if (task.id !== taskId) return task;
      return { ...task, subtasks: (task.subtasks || []).filter(st => st.id !== subtaskId) };
    });
    saveTasks();
    render();
  }

  function deleteTask(id) {
    const task = tasks.find(tk => tk.id === id);
    // Ak ide o inštanciu opakujúcej sa úlohy, zapamätáme si, že tento konkrétny deň
    // bol vedome vymazaný, aby sa pri ďalšom generovaní znova neobjavil
    if (task && task.templateId) {
      const exclusionKey = task.templateId + '|' + task.date;
      // Bez tejto kontroly by sa pri opakovanom mazaní tej istej inštancie
      // (napr. znovu vygenerovanej po chybe) zoznam donekonečna duplikoval.
      if (!recurringExclusions.includes(exclusionKey)) {
        recurringExclusions.push(exclusionKey);
        saveRecurringExclusions();
      }
    }

    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    render();
    renderCalendar();
    renderBadges();
  }

  function getFilteredTasks() {
    let list = tasks;

    if (searchQuery) {
      // Pri hľadaní prehľadávame úplne všetky dni, nie len vybraný deň
      list = list.filter(tk =>
        tk.text.toLowerCase().includes(searchQuery) ||
        (tk.tag || '').toLowerCase().includes(searchQuery) ||
        (tk.notes || '').toLowerCase().includes(searchQuery)
      );
    } else {
      // Bez hľadania zobrazujeme len úlohy pre aktuálne vybraný deň (Dnes/Zajtra/...)
      list = list.filter(tk => tk.date === viewDate);
    }

    if (currentFilter === 'active') list = list.filter(t => !t.done);
    if (currentFilter === 'done') list = list.filter(t => t.done);

    return list;
  }

  const expandedTaskIds = new Set(); // ktoré úlohy majú práve rozbalené detaily (poznámka/podúlohy)
  let editingTaskId = null; // ktorá úloha sa práve upravuje (naraz len jedna)

  // Aktualizuje ľubovoľné polia existujúcej úlohy (text, prioritu, tag, poznámku...)
  function updateTask(id, updates) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, ...updates } : task
    );
    saveTasks();
    render();
    renderCalendar();
    renderBadges();
  }

  function render() {
    const filtered = getFilteredTasks();
    taskList.innerHTML = '';

    // Keď nie sú žiadne (zobrazené) úlohy, hromadné "Všetky"/"Žiadne" nemajú čo robiť
    bulkAllBtn.disabled = filtered.length === 0;
    bulkNoneBtn.disabled = filtered.length === 0;

    if (filtered.length === 0) {
      taskList.innerHTML = `<li class="empty-msg">${t('emptyList')}</li>`;
    } else {
      filtered.forEach(task => {
        const li = document.createElement('li');
        const priority = task.priority || 'medium';
        li.className = 'task priority-' + priority + (task.done ? ' done' : '');

        const subtasks = task.subtasks || [];
        const subDone = subtasks.filter(st => st.done).length;
        const isExpanded = expandedTaskIds.has(task.id);
        const isEditing = editingTaskId === task.id;

        const editIconSvg = '<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>';

        const detailsContent = isEditing ? `
            <div class="edit-form">
              <input type="text" class="edit-text-input" value="${escapeHtml(task.text)}">
              <div class="edit-form-row">
                <select class="edit-priority-select">
                  <option value="low" ${priority === 'low' ? 'selected' : ''}>${t('priorityLow')}</option>
                  <option value="medium" ${priority === 'medium' ? 'selected' : ''}>${t('priorityMedium')}</option>
                  <option value="high" ${priority === 'high' ? 'selected' : ''}>${t('priorityHigh')}</option>
                </select>
                <input type="text" class="edit-tag-input" value="${escapeHtml(task.tag || '')}" placeholder="${t('tagPlaceholder')}">
              </div>
              <textarea class="edit-notes-textarea" placeholder="${t('notesPlaceholder')}">${escapeHtml(task.notes || '')}</textarea>
              <div class="edit-form-actions">
                <button type="button" class="edit-save-btn">${t('saveBtn')}</button>
                <button type="button" class="edit-cancel-btn">${t('cancelBtn')}</button>
              </div>
            </div>
          ` : `
            ${task.notes ? `<div class="task-notes">${escapeHtml(task.notes)}</div>` : ''}
          `;

        li.innerHTML = `
          <div class="task-main-row">
            <input type="checkbox" class="checkbox" ${task.done ? 'checked' : ''}>
            <span class="task-text">${escapeHtml(task.text)}</span>
            ${task.tag ? `<span class="task-tag">${escapeHtml(task.tag)}</span>` : ''}
            <button class="edit-btn" title="${t('editTitle')}">${editIconSvg}</button>
            <button class="task-expand-btn">${isExpanded ? '▲' : (subtasks.length ? `${subDone}/${subtasks.length} ▼` : '▼')}</button>
            <button class="delete-btn">✕</button>
          </div>
          <div class="task-details ${(isExpanded || isEditing) ? 'visible' : ''}">
            ${detailsContent}
            <ul class="subtask-list">
              ${subtasks.map(st => `
                <li class="subtask-item ${st.done ? 'done' : ''}" data-subtask-id="${st.id}">
                  <input type="checkbox" class="subtask-checkbox" ${st.done ? 'checked' : ''}>
                  <span class="subtask-text">${escapeHtml(st.text)}</span>
                  <button class="subtask-delete">✕</button>
                </li>
              `).join('')}
            </ul>
            <div class="subtask-add-row">
              <input type="text" class="subtask-add-input" placeholder="${t('subtaskPlaceholder')}">
              <button type="button" class="subtask-add-btn">${t('subtaskAdd')}</button>
            </div>
          </div>
        `;

        li.querySelector('.checkbox').addEventListener('change', () => toggleTask(task.id));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));

        li.querySelector('.edit-btn').addEventListener('click', () => {
          editingTaskId = isEditing ? null : task.id;
          if (!isEditing) expandedTaskIds.add(task.id); // pri úprave rovno rozbalíme detail
          render();
        });

        li.querySelector('.task-expand-btn').addEventListener('click', () => {
          if (expandedTaskIds.has(task.id)) {
            expandedTaskIds.delete(task.id);
          } else {
            expandedTaskIds.add(task.id);
          }
          render();
        });

        if (isEditing) {
          const saveEdit = () => {
            const newText = li.querySelector('.edit-text-input').value.trim();
            if (!newText) return; // prázdny názov úlohy neuložíme
            updateTask(task.id, {
              text: newText,
              priority: li.querySelector('.edit-priority-select').value,
              tag: li.querySelector('.edit-tag-input').value.trim(),
              notes: li.querySelector('.edit-notes-textarea').value.trim()
            });
            editingTaskId = null;
          };
          li.querySelector('.edit-save-btn').addEventListener('click', saveEdit);
          li.querySelector('.edit-cancel-btn').addEventListener('click', () => {
            editingTaskId = null;
            render();
          });
          li.querySelector('.edit-text-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveEdit();
          });
        }

        li.querySelectorAll('.subtask-checkbox').forEach(cb => {
          const stId = Number(cb.closest('.subtask-item').dataset.subtaskId) || cb.closest('.subtask-item').dataset.subtaskId;
          cb.addEventListener('change', () => toggleSubtask(task.id, stId));
        });

        li.querySelectorAll('.subtask-delete').forEach(btn => {
          const stId = Number(btn.closest('.subtask-item').dataset.subtaskId) || btn.closest('.subtask-item').dataset.subtaskId;
          btn.addEventListener('click', () => deleteSubtask(task.id, stId));
        });

        const subtaskInput = li.querySelector('.subtask-add-input');
        const subtaskAddBtn = li.querySelector('.subtask-add-btn');
        const submitSubtask = () => {
          addSubtask(task.id, subtaskInput.value);
          expandedTaskIds.add(task.id); // po pridaní necháme detail otvorený
        };
        subtaskAddBtn.addEventListener('click', submitSubtask);
        subtaskInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') submitSubtask();
        });

        taskList.appendChild(li);
      });
    }

    if (searchQuery) {
      const doneCount = filtered.filter(tk => tk.done).length;
      stats.textContent = `${doneCount} / ${filtered.length} ${t('statsFoundWord')}`;
    } else {
      const dayTasksAll = tasks.filter(tk => tk.date === viewDate);
      const doneCount = dayTasksAll.filter(tk => tk.done).length;
      stats.textContent = `${doneCount} / ${dayTasksAll.length} ${t('statsTaskWord')} (${formatDayLabel(viewDate).toLowerCase()})`;
    }
  }

  // Escapuje aj úvodzovky - text sa vkladá nielen ako obsah elementu, ale aj
  // do HTML atribútov (napr. value="..."), kde by ich neescapovanie umožnilo
  // vlomiť sa z atribútu a vložiť vlastný HTML/JS (XSS).
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  const calGrid = document.getElementById('calGrid');
  const calMonthLabel = document.getElementById('calMonthLabel');

  function dateKey(y, m, d) {
    return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  }

  function renderCalendar() {
    calGrid.innerHTML = '';
    const year = calDate.getFullYear();
    const month = calDate.getMonth();

    calMonthLabel.textContent = t('months')[month] + ' ' + year;

    t('dowShort').forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      calGrid.appendChild(el);
    });

    const firstDay = new Date(year, month, 1);
    let startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day empty';
      calGrid.appendChild(empty);
    }

    const today = todayStr();

    for (let day = 1; day <= daysInMonth; day++) {
      const key = dateKey(year, month, day);
      const dayTasks = tasks.filter(tk => tk.date === key);

      const cell = document.createElement('div');
      cell.className = 'cal-day';

      if (key === today) cell.classList.add('today');
      if (key === calPreviewDate) cell.classList.add('selected');

      let starHtml = '';
      if (dayTasks.length > 0) {
        const allDone = dayTasks.every(tk => tk.done);
        const someDone = dayTasks.some(tk => tk.done);
        if (allDone) {
          cell.classList.add('all-done');
          starHtml = '<span class="day-star"><svg viewBox="0 0 24 24"><polygon points="12,1 15,9 23,9.5 17,15 19,23 12,18.5 5,23 7,15 1,9.5 9,9"/></svg></span>';
        } else if (someDone) {
          cell.classList.add('partial');
        }
      }
      cell.innerHTML = day + starHtml;

      // Klik na deň zostane v Calendar view a ukáže náhľad úloh pod kalendárom -
      // do Zoznamu (kde sa dá upravovať/mazať) sa prechádza až kliknutím na konkrétnu úlohu v náhľade
      cell.addEventListener('click', () => {
        calPreviewDate = key;
        renderCalendar();
        document.getElementById('calDayPreview').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      calGrid.appendChild(cell);
    }

    if (calPreviewDate) renderCalDayPreview(calPreviewDate);
  }

  // Náhľad úloh pre vybraný deň v Calendar view - len na čítanie; klik na konkrétnu
  // úlohu prenesie do Zoznamu (List view) na ten istý deň, kde sa dá upravovať/mazať
  function renderCalDayPreview(dateKey) {
    const box = document.getElementById('calDayPreview');
    const label = document.getElementById('calDayPreviewLabel');
    const list = document.getElementById('calDayPreviewList');

    box.classList.add('visible');
    label.textContent = formatDayLabel(dateKey);

    const dayTasks = tasks.filter(tk => tk.date === dateKey);
    list.innerHTML = '';

    if (dayTasks.length === 0) {
      list.innerHTML = `<li class="cal-day-preview-empty">${t('emptyList')}</li>`;
      return;
    }

    dayTasks.forEach(tk => {
      const li = document.createElement('li');
      li.className = 'cal-day-preview-item priority-' + (tk.priority || 'medium') + (tk.done ? ' done' : '');
      li.textContent = tk.text;
      li.addEventListener('click', () => {
        viewDate = dateKey;
        updateDayNav();
        dateInput.value = dateKey;
        activateTab('list');
        render();
      });
      list.appendChild(li);
    });
  }

  document.getElementById('prevMonth').addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById('nextMonth').addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() + 1);
    renderCalendar();
  });

  function activateTab(tabName) {
    tabBtns.forEach(b => b.classList.remove('active'));
    const targetBtn = Array.from(tabBtns).find(b => b.dataset.tab === tabName);
    if (targetBtn) targetBtn.classList.add('active');

    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-' + tabName).classList.add('active');

    if (tabName === 'calendar') renderCalendar();
    if (tabName === 'badges') renderBadges();
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  // --- Streak a odznaky ---

  // Vypočíta počet dní v rade, kedy bol daný deň "kompletne splnený"
  // (mal aspoň 1 úlohu a všetky boli hotové). Počíta odzadu od dneška.
  function calculateStreak() {
    const byDate = {};
    tasks.forEach(tk => {
      if (!byDate[tk.date]) byDate[tk.date] = [];
      byDate[tk.date].push(tk);
    });

    let streak = 0;
    let cursor = new Date();

    // ak dnešok ešte nie je kompletný, začneme počítať od včera
    // (aby si nestratil/a streak len preto, že deň ešte neskončil)
    const todayKey = todayStr();
    const todayTasks = byDate[todayKey];
    const todayComplete = todayTasks && todayTasks.length > 0 && todayTasks.every(tk => tk.done);
    if (!todayComplete) {
      cursor.setDate(cursor.getDate() - 1);
    }

    while (true) {
      const key = dateKey(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
      const dayTasks = byDate[key];
      if (dayTasks && dayTasks.length > 0 && dayTasks.every(tk => tk.done)) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  // Nastaví jeden SVG kruh tak, aby vizuálne zobrazoval percento progresu (0 až 1)
  function setRingProgress(circleEl, progress) {
    const r = circleEl.getAttribute('r');
    const circumference = 2 * Math.PI * r;
    circleEl.style.strokeDasharray = circumference;
    circleEl.style.strokeDashoffset = circumference * (1 - Math.min(progress, 1));
  }

  const checkIconSvg = '<svg class="check-icon" viewBox="0 0 24 24"><polyline points="4,13 9,18 20,6"/></svg>';

  // Míľniky, ku ktorým sa jednotlivé odznaky viažu
  const streakMilestones = [3, 7, 14, 30];
  const totalMilestones = [10, 50, 100, 200];

  const badgeDefs = [
    { id: 'streak3',  goal: 3,   category: 'streak', color: '#f5a25a', getValue: (d, s) => s },
    { id: 'streak7',  goal: 7,   category: 'streak', color: '#f5a25a', getValue: (d, s) => s },
    { id: 'streak14', goal: 14,  category: 'streak', color: '#f5a25a', getValue: (d, s) => s },
    { id: 'streak30', goal: 30,  category: 'streak', color: '#f5a25a', getValue: (d, s) => s },
    { id: 'ten',      goal: 10,  category: 'total',  color: '#a98be0', getValue: (d, s) => d },
    { id: 'fifty',    goal: 50,  category: 'total',  color: '#a98be0', getValue: (d, s) => d },
    { id: 'hundred',  goal: 100, category: 'total',  color: '#a98be0', getValue: (d, s) => d },
    { id: 'twohund',  goal: 200, category: 'total',  color: '#a98be0', getValue: (d, s) => d },
  ];

  // Vypočíta percento dní za posledných N dní, kedy boli splnené úplne všetky úlohy
  // (počíta sa len z dní, ktoré vôbec mali nejaké úlohy)
  function successRate(days) {
    const byDate = {};
    tasks.forEach(tk => {
      if (!byDate[tk.date]) byDate[tk.date] = [];
      byDate[tk.date].push(tk);
    });

    let daysWithTasks = 0;
    let daysCompleted = 0;
    const cursor = new Date();

    for (let i = 0; i < days; i++) {
      const key = dateKey(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
      const dayTasks = byDate[key];
      if (dayTasks && dayTasks.length > 0) {
        daysWithTasks++;
        if (dayTasks.every(tk => tk.done)) daysCompleted++;
      }
      cursor.setDate(cursor.getDate() - 1);
    }

    return daysWithTasks > 0 ? Math.round((daysCompleted / daysWithTasks) * 100) : null;
  }

  let previouslyUnlockedBadges = safeParse('unlockedBadges:' + profileStorageKey(profile ? profile.nickname : ''), []);

  function renderBadges() {
    const streak = calculateStreak();
    const doneCount = tasks.filter(tk => tk.done).length;

    // --- Horný súhrn: 3 prstence ako v Activity ---
    const todayKey = todayStr();
    const todayTasks = tasks.filter(tk => tk.date === todayKey);
    const todayDone = todayTasks.filter(tk => tk.done).length;
    const todayProgress = todayTasks.length > 0 ? todayDone / todayTasks.length : 0;

    // Prstenec série berie ako "cieľ" najbližší nedosiahnutý míľnik (3 -> 7 -> 14 -> 30)
    const nextStreakGoal = streakMilestones.find(m => m > streak) || streakMilestones[streakMilestones.length - 1];
    const streakProgress = streak / nextStreakGoal;

    const nextTotalGoal = totalMilestones.find(m => m > doneCount) || totalMilestones[totalMilestones.length - 1];
    const totalProgress = doneCount / nextTotalGoal;

    setRingProgress(document.getElementById('ringToday'), todayProgress);
    setRingProgress(document.getElementById('ringStreak'), streakProgress);
    setRingProgress(document.getElementById('ringTotal'), totalProgress);

    document.getElementById('legendToday').textContent = `${todayDone}/${todayTasks.length}`;
    document.getElementById('legendStreak').textContent = streak;
    document.getElementById('legendTotal').textContent = doneCount;

    // --- Úspešnosť za týždeň a mesiac ---
    const weekly = successRate(7);
    const monthly = successRate(30);
    document.getElementById('weeklySuccessValue').textContent = weekly === null ? '–' : weekly + '%';
    document.getElementById('monthlySuccessValue').textContent = monthly === null ? '–' : monthly + '%';

    // --- Jednotlivé odznaky, každý ako vlastný malý prstenec smerujúci k cieľu ---
    const grid = document.getElementById('badgesGrid');
    grid.innerHTML = '';
    const currentlyUnlockedIds = [];

    badgeDefs.forEach(b => {
      const value = b.getValue(doneCount, streak);
      const progress = value / b.goal;
      const unlocked = value >= b.goal;
      const justUnlocked = unlocked && !previouslyUnlockedBadges.includes(b.id);
      if (unlocked) currentlyUnlockedIds.push(b.id);

      const div = document.createElement('div');
      div.className = 'badge' + (unlocked ? ' unlocked' : '') + (justUnlocked ? ' just-unlocked' : '');
      div.innerHTML = `
        <div class="badge-ring">
          <svg viewBox="0 0 54 54">
            <circle class="ring-track" cx="27" cy="27" r="23" stroke="#f0e9fa" />
            <circle class="ring-progress badge-ring-circle" cx="27" cy="27" r="23" stroke="${b.color}" />
          </svg>
          <div class="badge-ring-value">${unlocked ? `<span class="ring-check-circle" style="background:${b.color}">${checkIconSvg}</span>` : Math.min(value, b.goal) + '/' + b.goal}</div>
        </div>
        <div class="badge-name">${t('badgeNames')[b.id]}</div>
        <div class="badge-desc">${unlocked ? t('badgeDone') : (b.category === 'streak' ? t('badgeGoalStreak').replace('{n}', b.goal) : t('badgeGoalTotal').replace('{n}', b.goal))}</div>
      `;

      setRingProgress(div.querySelector('.badge-ring-circle'), progress);
      grid.appendChild(div);
    });

    previouslyUnlockedBadges = currentlyUnlockedIds;
    safeSetItem('unlockedBadges:' + profileStorageKey(profile ? profile.nickname : ''), JSON.stringify(currentlyUnlockedIds));

    renderHeatmap();
  }

  // --- Heatmapa aktivity (GitHub-style) - posledných ~17 týždňov ---
  function renderHeatmap() {
    const chart = document.getElementById('activityChart');
    const labels = document.getElementById('activityLabels');
    chart.innerHTML = '';
    labels.innerHTML = '';

    const byDate = {};
    tasks.forEach(tk => {
      if (!byDate[tk.date]) byDate[tk.date] = [];
      byDate[tk.date].push(tk);
    });

    const today = todayStr();
    const cursor = new Date();
    cursor.setDate(cursor.getDate() - 13); // posledných 14 dní vrátane dneška

    for (let i = 0; i < 14; i++) {
      const key = dateKey(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
      const dayTasks = byDate[key];
      const isToday = key === today;

      const col = document.createElement('div');
      col.className = 'activity-bar-col';

      const bar = document.createElement('div');
      bar.className = 'activity-bar' + (isToday ? ' today' : '');

      if (dayTasks && dayTasks.length > 0) {
        const doneCount = dayTasks.filter(tk => tk.done).length;
        const ratio = doneCount / dayTasks.length;
        const heightPx = Math.max(4, Math.round(ratio * 78));
        bar.style.height = heightPx + 'px';
        if (ratio >= 1) bar.classList.add('level-3');
        else if (ratio >= 0.5) bar.classList.add('level-2');
        else if (ratio > 0) bar.classList.add('level-1');
        bar.title = `${key}: ${doneCount}/${dayTasks.length}`;
      } else {
        bar.style.height = '4px';
        bar.title = key;
      }

      col.appendChild(bar);
      chart.appendChild(col);

      const label = document.createElement('div');
      label.className = 'activity-label' + (isToday ? ' today' : '');
      label.textContent = cursor.getDate();
      labels.appendChild(label);

      cursor.setDate(cursor.getDate() + 1);
    }
  }

  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
  });

  bulkAllBtn.addEventListener('click', () => setFilteredTasksDone(true));
  bulkNoneBtn.addEventListener('click', () => setFilteredTasksDone(false));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  generateRecurringInstances();

  applyTranslations();
  render();
  renderCalendar();
  renderBadges();

  // --- Profil používateľa (prezývka, avatar postavička, voliteľný email) ---

  // 5 jednoduchých postavičiek na výber - farebný kruh na pozadí + biela silueta v strede
  const avatarTypes = [
    { id: 'cat',   name: 'Mačka',  color: '#f5829e' },
    { id: 'fox',   name: 'Líška',  color: '#f5a25a' },
    { id: 'bear',  name: 'Medveď', color: '#a98be0' },
    { id: 'bunny', name: 'Zajko',  color: '#5fd6a0' },
    { id: 'owl',   name: 'Sova',   color: '#6fb3e0' },
  ];

  const defaultAvatarBg = '#e6ddfa';

  // Vygeneruje SVG pre danú postavičku (farebné pozadie + biela silueta hlavy/uší/očí)
  function buildAvatarSvg(type, color) {
    let extra = '';
    switch (type) {
      case 'cat':
        extra = `
          <polygon points="20,24 26,10 30,22" fill="#ffffff"/>
          <polygon points="44,24 38,10 34,22" fill="#ffffff"/>
          <circle cx="27" cy="34" r="2.3" fill="${color}"/>
          <circle cx="37" cy="34" r="2.3" fill="${color}"/>
          <path d="M29,41 Q32,44 35,41" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round"/>
        `;
        break;
      case 'fox':
        extra = `
          <polygon points="18,22 27,6 31,22" fill="#ffffff"/>
          <polygon points="46,22 37,6 33,22" fill="#ffffff"/>
          <circle cx="27" cy="34" r="2.3" fill="${color}"/>
          <circle cx="37" cy="34" r="2.3" fill="${color}"/>
          <polygon points="29,40 35,40 32,45" fill="${color}"/>
        `;
        break;
      case 'bear':
        extra = `
          <circle cx="20" cy="20" r="6" fill="#ffffff"/>
          <circle cx="44" cy="20" r="6" fill="#ffffff"/>
          <circle cx="27" cy="34" r="2.3" fill="${color}"/>
          <circle cx="37" cy="34" r="2.3" fill="${color}"/>
          <ellipse cx="32" cy="41" rx="5" ry="3.5" fill="#ffffff"/>
        `;
        break;
      case 'bunny':
        extra = `
          <rect x="21" y="4" width="7" height="24" rx="3.5" fill="#ffffff"/>
          <rect x="36" y="4" width="7" height="24" rx="3.5" fill="#ffffff"/>
          <circle cx="27" cy="34" r="2.3" fill="${color}"/>
          <circle cx="37" cy="34" r="2.3" fill="${color}"/>
          <path d="M29,41 Q32,44 35,41" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round"/>
        `;
        break;
      case 'owl':
        extra = `
          <circle cx="25" cy="32" r="7" fill="#ffffff"/>
          <circle cx="39" cy="32" r="7" fill="#ffffff"/>
          <circle cx="25" cy="32" r="3" fill="${color}"/>
          <circle cx="39" cy="32" r="3" fill="${color}"/>
          <polygon points="29,38 35,38 32,43" fill="${color}"/>
        `;
        break;
    }
    return `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${color}"/><circle cx="32" cy="34" r="14" fill="#ffffff"/>${extra}</svg>`;
  }

  function findAvatarType(avatarId) {
    return avatarTypes.find(a => a.id === avatarId);
  }

  // Prvé dve písmená prezývky (namiesto otáznika, kým si nevyberieš postavičku)
  function initials2(name) {
    const trimmed = (name || '').trim();
    return trimmed ? trimmed.slice(0, 2).toUpperCase() : 'TY';
  }

  // Nastaví obsah daného "preview" elementu - buď zvolenú postavičku, alebo iniciály ako placeholder
  function setAvatarPreview(el, avatarId, nickname) {
    const type = findAvatarType(avatarId);
    if (type) {
      el.innerHTML = buildAvatarSvg(type.id, type.color);
      el.style.background = 'transparent';
    } else {
      el.textContent = initials2(nickname);
      el.style.background = defaultAvatarBg;
    }
  }

  // Vykreslí 5 postavičiek na výber do daného kontajnera
  function buildAvatarPicker(container, selectedId, onPick) {
    container.innerHTML = '';
    avatarTypes.forEach(a => {
      const opt = document.createElement('div');
      opt.className = 'avatar-option' + (a.id === selectedId ? ' selected' : '');
      opt.title = a.name;
      opt.innerHTML = buildAvatarSvg(a.id, a.color);
      opt.addEventListener('click', () => {
        container.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        onPick(a.id);
      });
      container.appendChild(opt);
    });
  }

  let profiles = safeParse('profiles', []); // posledné prihlásenia

  const welcomeOverlay = document.getElementById('welcomeOverlay');
  const welcomeNickname = document.getElementById('welcomeNickname');
  const welcomeEmail = document.getElementById('welcomeEmail');
  const welcomeAvatarPreview = document.getElementById('welcomeAvatarPreview');
  const welcomeAvatarOptions = document.getElementById('welcomeAvatarOptions');

  const settingsOverlay = document.getElementById('settingsOverlay');
  const settingsNickname = document.getElementById('settingsNickname');
  const settingsEmail = document.getElementById('settingsEmail');
  const settingsAvatarPreview = document.getElementById('settingsAvatarPreview');
  const settingsAvatarOptions = document.getElementById('settingsAvatarOptions');

  let welcomeSelectedAvatar = profile && profile.avatarId ? profile.avatarId : null;
  let settingsSelectedAvatar = null;

  function applyProfileToTopBar() {
    const topBarAvatar = document.getElementById('topBarAvatar');
    const topBarName = document.getElementById('topBarName');
    const name = profile && profile.nickname ? profile.nickname : 'Ty';

    setAvatarPreview(topBarAvatar, profile ? profile.avatarId : null, name);
    topBarName.textContent = name;
  }

  // Uloží aktívny profil pre túto session a zároveň ho pridá do "posledných prihlásení".
  // Ak sa prezývka zmenila (napr. prepnutie na iné "posledné prihlásenie" alebo
  // premenovanie v Nastaveniach), prepneme aj úlohy/šablóny/odznaky na dáta patriace
  // novej prezývke - každá prezývka má svoj vlastný, oddelený zoznam úloh.
  function saveProfile(nickname, email, avatarId) {
    const previousNickname = profile ? profile.nickname : '';
    profile = { nickname: nickname.trim(), email: email.trim(), avatarId: avatarId || null };
    safeSetItem('profile', JSON.stringify(profile));
    applyProfileToTopBar();

    if (profileStorageKey(profile.nickname) !== profileStorageKey(previousNickname)) {
      switchProfileData(profile.nickname);
    }

    if (profile.nickname) {
      profiles = profiles.filter(p => p.nickname.toLowerCase() !== profile.nickname.toLowerCase());
      profiles.unshift(profile);
      profiles = profiles.slice(0, 5);
      safeSetItem('profiles', JSON.stringify(profiles));
    }
  }

  // Načíta úlohy/šablóny/odznaky patriace danej prezývke a appku prekreslí
  function switchProfileData(nickname) {
    const key = profileStorageKey(nickname);
    tasks = safeParse('tasks:' + key, []);
    recurringTemplates = safeParse('recurringTemplates:' + key, []);
    recurringExclusions = safeParse('recurringExclusions:' + key, []);
    previouslyUnlockedBadges = safeParse('unlockedBadges:' + key, []);
    generateRecurringInstances();
    render();
    renderCalendar();
    renderBadges();
  }

  // --- Welcome obrazovka: zobrazuje sa vždy pri otvorení appky ---

  function renderRecentLogins() {
    const box = document.getElementById('recentLoginsBox');
    const list = document.getElementById('recentLoginsList');

    if (profiles.length === 0) {
      box.style.display = 'none';
      return;
    }

    box.style.display = 'block';
    list.innerHTML = '';

    profiles.forEach(p => {
      const item = document.createElement('div');
      item.className = 'recent-login-item';

      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'recent-login-avatar';
      setAvatarPreview(avatarDiv, p.avatarId, p.nickname);

      const nameDiv = document.createElement('div');
      nameDiv.className = 'recent-login-name';
      nameDiv.textContent = p.nickname;

      item.appendChild(avatarDiv);
      item.appendChild(nameDiv);

      item.addEventListener('click', () => {
        saveProfile(p.nickname, p.email || '', p.avatarId);
        closeWelcome();
      });

      list.appendChild(item);
    });
  }

  buildAvatarPicker(welcomeAvatarOptions, welcomeSelectedAvatar, (id) => {
    welcomeSelectedAvatar = id;
    setAvatarPreview(welcomeAvatarPreview, id, welcomeNickname.value);
  });
  setAvatarPreview(welcomeAvatarPreview, welcomeSelectedAvatar, profile ? profile.nickname : '');

  // Predvyplníme meno posledného použitého profilu, nech ho netreba znova prepisovať
  if (profile && profile.nickname) {
    welcomeNickname.value = profile.nickname;
    welcomeEmail.value = profile.email || '';
  }

  welcomeNickname.addEventListener('input', () => {
    setAvatarPreview(welcomeAvatarPreview, welcomeSelectedAvatar, welcomeNickname.value);
  });

  function closeWelcome() {
    welcomeOverlay.style.display = 'none';
  }

  document.getElementById('welcomeContinueBtn').addEventListener('click', () => {
    saveProfile(welcomeNickname.value, welcomeEmail.value, welcomeSelectedAvatar);
    closeWelcome();
  });

  document.getElementById('welcomeSkipBtn').addEventListener('click', () => {
    saveProfile('', '', welcomeSelectedAvatar);
    closeWelcome();
  });

  // Welcome obrazovka sa zobrazuje vždy, pri každom otvorení appky
  renderRecentLogins();

  // --- Settings panel (burger menu) ---
  function openSettings() {
    const name = profile && profile.nickname ? profile.nickname : '';
    const email = profile && profile.email ? profile.email : '';
    settingsSelectedAvatar = profile && profile.avatarId ? profile.avatarId : null;

    settingsNickname.value = name;
    settingsEmail.value = email;
    setAvatarPreview(settingsAvatarPreview, settingsSelectedAvatar, name);

    buildAvatarPicker(settingsAvatarOptions, settingsSelectedAvatar, (id) => {
      settingsSelectedAvatar = id;
      setAvatarPreview(settingsAvatarPreview, id, settingsNickname.value);
    });

    settingsOverlay.classList.add('open');
  }

  function closeSettings() {
    settingsOverlay.classList.remove('open');
  }

  settingsNickname.addEventListener('input', () => {
    setAvatarPreview(settingsAvatarPreview, settingsSelectedAvatar, settingsNickname.value);
  });

  document.getElementById('burgerBtn').addEventListener('click', openSettings);
  document.getElementById('settingsCloseBtn').addEventListener('click', closeSettings);
  settingsOverlay.addEventListener('click', (e) => {
    if (e.target === settingsOverlay) closeSettings();
  });

  document.getElementById('settingsSaveBtn').addEventListener('click', () => {
    saveProfile(settingsNickname.value, settingsEmail.value, settingsSelectedAvatar);
    closeSettings();
  });
