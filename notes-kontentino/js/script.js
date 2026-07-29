(function(){
  // ---------- state ----------
  var today = new Date();
  var viewYear = today.getFullYear();
  var viewMonth = today.getMonth(); // 0-based
  var selectedDayKey = null; // "YYYY-M-D"
  var activeProfile = 'fb';
  var editingId = null; // id of the note currently being edited
  var deletingId = null; // id of the note pending delete confirmation
  var expandedIds = {}; // ids of notes expanded past the clamp

  var STORAGE_KEY = 'kontentino_personal_notes_v1';
  var notes = loadNotes();

  var ICON_EDIT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
  var ICON_DELETE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';

  // small hardcoded sample posts just for visual context (not functional)
  var samplePosts = {
    fb: {
      '2026-6-20': [{label:'#ChihuahuaPuppies', type:'posted'}],
      '2026-6-21': [{label:'QA test post', type:'scheduled'}],
      '2026-6-23': [{label:'WF-SKIP test post 1', type:'posted'}, {label:'WF-COMBO pair 3', type:'posted'}],
      '2026-6-25': [{label:'WF-SKIP test post 5', type:'scheduled'}, {label:'CLEAN REPRO v2', type:'scheduled'}],
      '2026-6-24': [{label:'Craving a pizza…', type:'approved'}]
    },
    ig: {
      '2026-6-20': [{label:'Sunset shoot', type:'posted'}],
      '2026-6-22': [{label:'Reel draft', type:'approved'}],
      '2026-6-24': [{label:'New product teaser', type:'scheduled'}]
    }
  };

  // ---------- helpers ----------
  function dayKey(y,m,d){ return y+'-'+m+'-'+d; }
  function loadNotes(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function saveNotes(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }

  var URL_PATTERN = /(https?:\/\/[^\s]+)/g;
  function renderNoteText(container, text){
    var lastIndex = 0;
    var match;
    URL_PATTERN.lastIndex = 0;
    while ((match = URL_PATTERN.exec(text))){
      if (match.index > lastIndex){
        container.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      var link = document.createElement('a');
      link.className = 'note-link';
      link.href = match[0];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = match[0];
      container.appendChild(link);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length){
      container.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
  }
  var monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // ---------- calendar rendering ----------
  function renderCalendar(){
    document.getElementById('monthLabel').textContent = monthNames[viewMonth] + ' ' + viewYear;
    var grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    var firstOfMonth = new Date(viewYear, viewMonth, 1);
    // Monday-first weekday index (0=Mon ... 6=Sun)
    var startWeekday = (firstOfMonth.getDay() + 6) % 7;
    var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    var daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    var cells = [];

    // leading days (previous month)
    for (var i = startWeekday - 1; i >= 0; i--){
      cells.push({ day: daysInPrevMonth - i, otherMonth: true, y: viewYear, m: viewMonth - 1 });
    }
    // current month days
    for (var d = 1; d <= daysInMonth; d++){
      cells.push({ day: d, otherMonth: false, y: viewYear, m: viewMonth });
    }
    // trailing days to complete final week row
    var remainder = cells.length % 7;
    if (remainder !== 0){
      var trailing = 7 - remainder;
      for (var t = 1; t <= trailing; t++){
        cells.push({ day: t, otherMonth: true, y: viewYear, m: viewMonth + 1 });
      }
    }

    cells.forEach(function(cell){
      var realDate = new Date(cell.y, cell.m, cell.day);
      var key = dayKey(realDate.getFullYear(), realDate.getMonth(), realDate.getDate());

      var el = document.createElement('div');
      el.className = 'day-cell' + (cell.otherMonth ? ' other-month' : '');
      if (isSameDay(realDate, today)) el.classList.add('today');
      if (key === selectedDayKey) el.classList.add('selected');
      el.dataset.key = key;

      var num = document.createElement('div');
      num.className = 'day-num';
      num.textContent = cell.day;
      el.appendChild(num);

      // sample post chips
      var posts = samplePosts[activeProfile] && samplePosts[activeProfile][key];
      if (posts){
        posts.forEach(function(p){
          var chip = document.createElement('span');
          chip.className = 'post-chip ' + p.type;
          chip.textContent = p.label;
          el.appendChild(chip);
        });
      }

      // note indicator dot if any note (done or not) linked to this day
      var hasNote = notes.some(function(n){ return n.day === key; });
      if (hasNote){
        var dot = document.createElement('span');
        dot.className = 'note-dot';
        dot.title = 'View notes linked to this day';
        dot.addEventListener('click', function(e){
          e.stopPropagation();
          openNotesForDay(key);
        });
        el.appendChild(dot);
      }

      el.addEventListener('click', function(){
        selectedDayKey = key;
        renderCalendar();
        updateLinkedDayLabel();
      });

      grid.appendChild(el);
    });
  }

  function isSameDay(a,b){
    return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
  }

  function formatDayKey(key){
    var parts = key.split('-').map(Number);
    var d = new Date(parts[0], parts[1], parts[2]);
    return monthNames[d.getMonth()].slice(0,3) + ' ' + d.getDate();
  }

  // ---------- notes panel ----------
  function updateLinkedDayLabel(){
    var checkbox = document.getElementById('linkToDay');
    var label = document.getElementById('linkedDayLabel');
    if (checkbox.checked && selectedDayKey){
      label.textContent = '(' + formatDayKey(selectedDayKey) + ')';
    } else {
      label.textContent = '';
    }
  }

  var EMOJI_DATA = [
    {e:'😀', k:'grinning happy smile'},
    {e:'😂', k:'joy laugh tears funny'},
    {e:'😅', k:'sweat smile relief'},
    {e:'😉', k:'wink'},
    {e:'😊', k:'blush smile happy'},
    {e:'😍', k:'heart eyes love'},
    {e:'🥳', k:'party celebrate'},
    {e:'😢', k:'cry sad'},
    {e:'😴', k:'sleep tired'},
    {e:'😎', k:'cool sunglasses'},
    {e:'🙄', k:'eyeroll'},
    {e:'🤔', k:'thinking'},
    {e:'👍', k:'thumbs up like approve yes'},
    {e:'👎', k:'thumbs down dislike no'},
    {e:'👏', k:'clap applause'},
    {e:'🙌', k:'raised hands celebrate'},
    {e:'🙏', k:'pray thanks please'},
    {e:'👀', k:'eyes look watch'},
    {e:'💪', k:'muscle strong'},
    {e:'🤝', k:'handshake deal'},
    {e:'✅', k:'check done complete yes'},
    {e:'❌', k:'x cancel wrong no'},
    {e:'❤️', k:'heart love'},
    {e:'🔥', k:'fire hot lit'},
    {e:'✨', k:'sparkles new'},
    {e:'🎉', k:'party celebrate confetti'},
    {e:'🎯', k:'target goal'},
    {e:'🚀', k:'rocket launch fast'},
    {e:'💡', k:'idea light bulb'},
    {e:'📅', k:'calendar date schedule'},
    {e:'⏰', k:'alarm clock time reminder'},
    {e:'📌', k:'pin important'},
    {e:'📸', k:'camera photo picture'},
    {e:'💬', k:'speech chat comment'},
    {e:'📈', k:'chart growth stats'},
    {e:'📉', k:'chart down decline'},
    {e:'⚠️', k:'warning alert'},
    {e:'🎨', k:'art design paint'},
    {e:'🛠️', k:'tools fix build'},
    {e:'📝', k:'note memo write'},
    {e:'🗓️', k:'calendar schedule'}
  ];

  var EMOJI_RECENT_KEY = 'kontentino_recent_emoji_v1';
  function loadRecentEmoji(){
    try{
      var raw = localStorage.getItem(EMOJI_RECENT_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function rememberEmoji(emoji){
    var recent = loadRecentEmoji().filter(function(e){ return e !== emoji; });
    recent.unshift(emoji);
    if (recent.length > 8) recent = recent.slice(0, 8);
    localStorage.setItem(EMOJI_RECENT_KEY, JSON.stringify(recent));
  }

  function insertAtCursor(textarea, str){
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var value = textarea.value;
    textarea.value = value.slice(0, start) + str + value.slice(end);
    var pos = start + str.length;
    textarea.focus();
    textarea.setSelectionRange(pos, pos);
  }

  function buildEmojiGrid(container, emojiList, textarea, pickerEl){
    emojiList.forEach(function(emoji){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = emoji;
      btn.addEventListener('click', function(){
        insertAtCursor(textarea, emoji);
        rememberEmoji(emoji);
        pickerEl.classList.add('hidden');
      });
      container.appendChild(btn);
    });
  }

  function populateEmojiPicker(pickerEl, textarea){
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'emoji-search';
    searchInput.placeholder = 'Search emoji…';
    pickerEl.appendChild(searchInput);

    var resultsWrap = document.createElement('div');
    pickerEl.appendChild(resultsWrap);

    function renderResults(query){
      resultsWrap.innerHTML = '';
      query = query.trim().toLowerCase();

      if (!query){
        var recent = loadRecentEmoji();
        if (recent.length){
          var recentLabel = document.createElement('div');
          recentLabel.className = 'emoji-section-label';
          recentLabel.textContent = 'Frequently used';
          resultsWrap.appendChild(recentLabel);
          var recentGrid = document.createElement('div');
          recentGrid.className = 'emoji-grid';
          buildEmojiGrid(recentGrid, recent, textarea, pickerEl);
          resultsWrap.appendChild(recentGrid);
        }

        var allLabel = document.createElement('div');
        allLabel.className = 'emoji-section-label';
        allLabel.textContent = 'Smileys & People';
        resultsWrap.appendChild(allLabel);
        var allGrid = document.createElement('div');
        allGrid.className = 'emoji-grid';
        buildEmojiGrid(allGrid, EMOJI_DATA.map(function(item){ return item.e; }), textarea, pickerEl);
        resultsWrap.appendChild(allGrid);
        return;
      }

      var matches = EMOJI_DATA.filter(function(item){
        return item.k.indexOf(query) !== -1;
      }).map(function(item){ return item.e; });

      if (!matches.length){
        var empty = document.createElement('div');
        empty.className = 'emoji-empty';
        empty.textContent = 'No emoji found';
        resultsWrap.appendChild(empty);
        return;
      }

      var grid = document.createElement('div');
      grid.className = 'emoji-grid';
      buildEmojiGrid(grid, matches, textarea, pickerEl);
      resultsWrap.appendChild(grid);
    }

    searchInput.addEventListener('input', function(){ renderResults(searchInput.value); });
    searchInput.addEventListener('click', function(e){ e.stopPropagation(); });
    renderResults('');

    pickerEl._resetEmojiSearch = function(){
      searchInput.value = '';
      renderResults('');
    };
  }

  function shouldFlipUp(toggleBtn){
    var list = document.getElementById('notesList');
    var boundary = list.contains(toggleBtn) ? list.getBoundingClientRect() : {top:0, bottom:window.innerHeight};
    var toggleRect = toggleBtn.getBoundingClientRect();
    var spaceBelow = boundary.bottom - toggleRect.bottom;
    var spaceAbove = toggleRect.top - boundary.top;
    return spaceBelow < 260 && spaceAbove > spaceBelow;
  }

  function setupEmojiToggle(toggleBtn, pickerEl){
    toggleBtn.addEventListener('click', function(e){
      e.stopPropagation();
      document.querySelectorAll('.emoji-picker').forEach(function(p){
        if (p !== pickerEl) p.classList.add('hidden');
      });
      var wasHidden = pickerEl.classList.contains('hidden');
      pickerEl.classList.toggle('hidden');
      if (wasHidden){
        if (pickerEl._resetEmojiSearch) pickerEl._resetEmojiSearch();
        pickerEl.classList.toggle('flip-up', shouldFlipUp(toggleBtn));
      }
    });
  }

  document.addEventListener('click', function(e){
    if (e.target.closest('.note-input-toolbar')) return;
    document.querySelectorAll('.emoji-picker').forEach(function(p){ p.classList.add('hidden'); });
  });

  var ICON_UNDO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';
  var ICON_REDO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>';

  function createToolbarIconButton(iconSvg, title, onClick){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'input-icon-btn';
    btn.innerHTML = iconSvg;
    btn.title = title;
    btn.addEventListener('click', onClick);
    return btn;
  }

  function addUndoRedoButtons(toolbar, textarea, beforeEl){
    var undoBtn = createToolbarIconButton(ICON_UNDO, 'Undo', function(){
      textarea.focus();
      document.execCommand('undo');
      refreshUndoRedoState();
    });
    var redoBtn = createToolbarIconButton(ICON_REDO, 'Redo', function(){
      textarea.focus();
      document.execCommand('redo');
      refreshUndoRedoState();
    });

    function refreshUndoRedoState(){
      undoBtn.disabled = !document.queryCommandEnabled('undo');
      redoBtn.disabled = !document.queryCommandEnabled('redo');
    }
    undoBtn.disabled = true;
    redoBtn.disabled = true;
    textarea.addEventListener('input', refreshUndoRedoState);
    textarea.addEventListener('focus', refreshUndoRedoState);

    if (beforeEl){
      toolbar.insertBefore(undoBtn, beforeEl);
      toolbar.insertBefore(redoBtn, beforeEl);
    } else {
      toolbar.appendChild(undoBtn);
      toolbar.appendChild(redoBtn);
    }
  }

  function renderNotes(){
    var list = document.getElementById('notesList');
    list.innerHTML = '';

    if (notes.length === 0){
      var empty = document.createElement('li');
      empty.className = 'empty-state';
      empty.textContent = 'No notes yet. Add your first one above 👆';
      list.appendChild(empty);
    } else {
      // sort: unfinished first, then by linked day
      var sorted = notes.slice().sort(function(a,b){
        if (a.done !== b.done) return a.done ? 1 : -1;
        return (a.day || '') < (b.day || '') ? -1 : 1;
      });

      sorted.forEach(function(note){
        var li = document.createElement('li');
        li.className = 'note-item' + (note.done ? ' done' : '');
        li.dataset.noteId = note.id;

        if (editingId === note.id){
          // ---- edit mode ----
          li.classList.add('editing');

          var editBody = document.createElement('div');
          editBody.className = 'note-body';

          var editInputBox = document.createElement('div');
          editInputBox.className = 'note-edit-input-box';

          var editArea = document.createElement('textarea');
          editArea.value = note.text;
          editInputBox.appendChild(editArea);

          var editToolbar = document.createElement('div');
          editToolbar.className = 'note-input-toolbar';
          addUndoRedoButtons(editToolbar, editArea);
          var editEmojiToggle = document.createElement('button');
          editEmojiToggle.type = 'button';
          editEmojiToggle.className = 'input-icon-btn';
          editEmojiToggle.textContent = '🙂';
          editEmojiToggle.title = 'Emoji';
          var editEmojiPicker = document.createElement('div');
          editEmojiPicker.className = 'emoji-picker hidden';
          populateEmojiPicker(editEmojiPicker, editArea);
          setupEmojiToggle(editEmojiToggle, editEmojiPicker);
          editToolbar.appendChild(editEmojiToggle);
          editToolbar.appendChild(editEmojiPicker);
          editInputBox.appendChild(editToolbar);

          editBody.appendChild(editInputBox);

          if (note.day){
            var editDayCurrent = document.createElement('div');
            editDayCurrent.className = 'edit-day-current';
            var editDayChip = document.createElement('span');
            editDayChip.className = 'note-day-chip';
            editDayChip.textContent = '📅 ' + formatDayKey(note.day);
            var removeLinkBtn = document.createElement('button');
            removeLinkBtn.type = 'button';
            removeLinkBtn.className = 'edit-remove-link-btn';
            removeLinkBtn.textContent = 'Remove';
            removeLinkBtn.addEventListener('click', function(){
              note.day = null;
              saveNotes();
              renderNotes();
            });
            editDayCurrent.appendChild(editDayChip);
            editDayCurrent.appendChild(removeLinkBtn);
            editBody.appendChild(editDayCurrent);
          }

          var editLinkRow = document.createElement('div');
          editLinkRow.className = 'link-row';
          var editLinkLabel = document.createElement('label');
          var editLinkCheckbox = document.createElement('input');
          editLinkCheckbox.type = 'checkbox';
          editLinkLabel.appendChild(editLinkCheckbox);
          editLinkLabel.appendChild(document.createTextNode(' link to selected day'));
          var editLinkSelectedLabel = document.createElement('span');
          editLinkCheckbox.addEventListener('change', function(){
            editLinkSelectedLabel.textContent = (editLinkCheckbox.checked && selectedDayKey) ? '(' + formatDayKey(selectedDayKey) + ')' : '';
          });
          editLinkRow.appendChild(editLinkLabel);
          editLinkRow.appendChild(editLinkSelectedLabel);
          editBody.appendChild(editLinkRow);

          var actions = document.createElement('div');
          actions.className = 'note-edit-actions';

          var saveBtn = document.createElement('button');
          saveBtn.className = 'note-save-btn';
          saveBtn.textContent = 'Save';
          saveBtn.addEventListener('click', function(){
            var newText = editArea.value.trim();
            if (newText){ note.text = newText; }
            if (editLinkCheckbox.checked && selectedDayKey){ note.day = selectedDayKey; }
            editingId = null;
            saveNotes();
            renderNotes();
          });

          var cancelBtn = document.createElement('button');
          cancelBtn.className = 'note-cancel-btn';
          cancelBtn.textContent = 'Cancel';
          cancelBtn.addEventListener('click', function(){
            editingId = null;
            renderNotes();
          });

          actions.appendChild(cancelBtn);
          actions.appendChild(saveBtn);
          editBody.appendChild(actions);

          li.appendChild(editBody);
          list.appendChild(li);
          return;
        }

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = note.done;
        checkbox.addEventListener('change', function(){
          note.done = checkbox.checked;
          saveNotes();
          renderNotes();
        });

        var body = document.createElement('div');
        body.className = 'note-body';

        if (note.day){
          var chip = document.createElement('span');
          chip.className = 'note-day-chip';
          chip.textContent = '📅 ' + formatDayKey(note.day);
          body.appendChild(chip);
        }

        var text = document.createElement('div');
        text.className = 'note-text';
        renderNoteText(text, note.text);

        var isLongNote = note.text.length > 160 || (note.text.match(/\n/g) || []).length >= 4;
        if (isLongNote && !expandedIds[note.id]) text.classList.add('clamped');
        body.appendChild(text);

        if (isLongNote){
          var toggleBtn = document.createElement('button');
          toggleBtn.className = 'note-toggle-text';
          toggleBtn.textContent = expandedIds[note.id] ? 'Show less' : 'Show more';
          toggleBtn.addEventListener('click', function(){
            if (expandedIds[note.id]) delete expandedIds[note.id];
            else expandedIds[note.id] = true;
            renderNotes();
          });
          body.appendChild(toggleBtn);
        }

        if (deletingId === note.id){
          li.classList.add('confirming-delete');

          var confirmRow = document.createElement('div');
          confirmRow.className = 'note-delete-confirm';

          var confirmText = document.createElement('span');
          confirmText.className = 'note-delete-confirm-text';
          confirmText.textContent = 'Delete this note?';

          var confirmBtn = document.createElement('button');
          confirmBtn.className = 'note-confirm-delete-btn';
          confirmBtn.textContent = 'Delete';
          confirmBtn.addEventListener('click', function(){
            notes = notes.filter(function(n){ return n.id !== note.id; });
            delete expandedIds[note.id];
            deletingId = null;
            saveNotes();
            renderNotes();
            renderCalendar();
          });

          var cancelDeleteBtn = document.createElement('button');
          cancelDeleteBtn.className = 'note-cancel-btn';
          cancelDeleteBtn.textContent = 'Cancel';
          cancelDeleteBtn.addEventListener('click', function(){
            deletingId = null;
            renderNotes();
          });

          confirmRow.appendChild(confirmText);
          confirmRow.appendChild(confirmBtn);
          confirmRow.appendChild(cancelDeleteBtn);
          body.appendChild(confirmRow);

          li.appendChild(checkbox);
          li.appendChild(body);
          list.appendChild(li);
          return;
        }

        var actionsWrap = document.createElement('div');
        actionsWrap.className = 'note-actions';

        var editBtn = document.createElement('button');
        editBtn.className = 'note-edit';
        editBtn.innerHTML = ICON_EDIT;
        editBtn.title = 'Edit note';
        editBtn.addEventListener('click', function(){
          editingId = note.id;
          deletingId = null;
          renderNotes();
        });

        var del = document.createElement('button');
        del.className = 'note-delete';
        del.innerHTML = ICON_DELETE;
        del.title = 'Delete note';
        del.addEventListener('click', function(){
          deletingId = note.id;
          editingId = null;
          renderNotes();
        });

        actionsWrap.appendChild(editBtn);
        actionsWrap.appendChild(del);

        li.appendChild(checkbox);
        li.appendChild(body);
        li.appendChild(actionsWrap);
        list.appendChild(li);
      });
    }

    updateBadge();
    updateListFade();
  }

  function updateListFade(){
    var list = document.getElementById('notesList');
    var fade = document.getElementById('notesListFade');
    fade.classList.toggle('visible', list.scrollTop > 4);
  }

  function cancelInlineNoteState(){
    if (editingId === null && deletingId === null) return;
    editingId = null;
    deletingId = null;
    renderNotes();
  }

  function updateBadge(){
    var badge = document.getElementById('notesBadge');
    var openCount = notes.filter(function(n){ return !n.done; }).length;
    if (openCount > 0){
      badge.textContent = openCount > 9 ? '9+' : openCount;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  function addNote(){
    var input = document.getElementById('noteInput');
    var text = input.value.trim();
    if (!text) return;

    var linkChecked = document.getElementById('linkToDay').checked;
    var note = {
      id: 'n_' + Date.now() + '_' + Math.random().toString(36).slice(2,7),
      text: text,
      done: false,
      day: (linkChecked && selectedDayKey) ? selectedDayKey : null,
      createdAt: Date.now()
    };
    notes.push(note);
    saveNotes();

    input.value = '';
    document.getElementById('linkToDay').checked = false;
    updateLinkedDayLabel();

    renderNotes();
    renderCalendar();
  }

  // ---------- panel open/close ----------
  function openPanel(){
    document.getElementById('notesPanel').classList.add('open');
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('notesToggle').classList.add('panel-open');
  }
  function closePanel(){
    document.getElementById('notesPanel').classList.remove('open');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('notesToggle').classList.remove('panel-open');
  }

  function openNotesForDay(dayKey){
    openPanel();
    var matches = notes.filter(function(n){ return n.day === dayKey; });
    var firstLi = null;
    matches.forEach(function(n){
      var li = document.querySelector('.note-item[data-note-id="' + n.id + '"]');
      if (!li) return;
      if (!firstLi) firstLi = li;
      li.classList.add('note-flash');
      setTimeout(function(){ li.classList.remove('note-flash'); }, 1600);
    });
    if (firstLi) firstLi.scrollIntoView({behavior:'smooth', block:'center'});
  }

  // ---------- events ----------
  document.getElementById('prevMonth').addEventListener('click', function(){
    viewMonth--;
    if (viewMonth < 0){ viewMonth = 11; viewYear--; }
    renderCalendar();
  });
  document.getElementById('nextMonth').addEventListener('click', function(){
    viewMonth++;
    if (viewMonth > 11){ viewMonth = 0; viewYear++; }
    renderCalendar();
  });
  document.getElementById('todayBtn').addEventListener('click', function(){
    viewYear = today.getFullYear();
    viewMonth = today.getMonth();
    renderCalendar();
  });

  document.getElementById('profileSelector').addEventListener('click', function(e){
    var btn = e.target.closest('.profile-btn');
    if (!btn) return;
    document.querySelectorAll('.profile-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    activeProfile = btn.dataset.profile;
    renderCalendar();
  });

  document.getElementById('notesToggle').addEventListener('click', function(){
    var panel = document.getElementById('notesPanel');
    if (panel.classList.contains('open')) closePanel(); else openPanel();
  });
  document.getElementById('closeNotes').addEventListener('click', closePanel);
  document.getElementById('overlay').addEventListener('click', closePanel);

  document.getElementById('notesList').addEventListener('scroll', updateListFade);
  document.getElementById('linkToDay').addEventListener('change', updateLinkedDayLabel);
  document.getElementById('addNoteBtn').addEventListener('click', addNote);
  document.getElementById('noteInput').addEventListener('keydown', function(e){
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) addNote();
  });

  populateEmojiPicker(document.getElementById('emojiPicker'), document.getElementById('noteInput'));
  setupEmojiToggle(document.getElementById('emojiToggle'), document.getElementById('emojiPicker'));

  addUndoRedoButtons(document.getElementById('noteToolbar'), document.getElementById('noteInput'), document.getElementById('emojiToggle'));

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') cancelInlineNoteState();
  });
  document.addEventListener('click', function(e){
    if (editingId === null && deletingId === null) return;
    if (e.target.closest('.day-cell')) return;
    var activeLi = document.querySelector('.note-item.editing, .note-item.confirming-delete');
    if (activeLi && !activeLi.contains(e.target)) cancelInlineNoteState();
  }, true);

  // ---------- init ----------
  renderCalendar();
  renderNotes();
})();
