(function(){
  // ---------- state ----------
  var today = new Date();
  var viewYear = today.getFullYear();
  var viewMonth = today.getMonth(); // 0-based
  var selectedDayKey = null; // "YYYY-M-D"
  var activeProfile = 'fb';
  var editingId = null; // id of the note currently being edited

  var STORAGE_KEY = 'kontentino_personal_notes_v1';
  var notes = loadNotes();

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

        if (editingId === note.id){
          // ---- edit mode ----
          li.classList.add('editing');

          var editBody = document.createElement('div');
          editBody.className = 'note-body';

          var editArea = document.createElement('textarea');
          editArea.className = 'note-edit-input';
          editArea.value = note.text;
          editBody.appendChild(editArea);

          var actions = document.createElement('div');
          actions.className = 'note-edit-actions';

          var saveBtn = document.createElement('button');
          saveBtn.className = 'note-save-btn';
          saveBtn.textContent = 'Save';
          saveBtn.addEventListener('click', function(){
            var newText = editArea.value.trim();
            if (newText){ note.text = newText; }
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

          actions.appendChild(saveBtn);
          actions.appendChild(cancelBtn);
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

        var text = document.createElement('div');
        text.className = 'note-text';
        text.textContent = note.text;
        body.appendChild(text);

        if (note.day){
          var chip = document.createElement('span');
          chip.className = 'note-day-chip';
          chip.textContent = '📅 ' + formatDayKey(note.day);
          body.appendChild(chip);
        }

        var actionsWrap = document.createElement('div');
        actionsWrap.className = 'note-actions';

        var editBtn = document.createElement('button');
        editBtn.className = 'note-edit';
        editBtn.textContent = '✎';
        editBtn.title = 'Edit note';
        editBtn.addEventListener('click', function(){
          editingId = note.id;
          renderNotes();
        });

        var del = document.createElement('button');
        del.className = 'note-delete';
        del.textContent = '✕';
        del.title = 'Delete note';
        del.addEventListener('click', function(){
          notes = notes.filter(function(n){ return n.id !== note.id; });
          saveNotes();
          renderNotes();
          renderCalendar();
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

  document.getElementById('linkToDay').addEventListener('change', updateLinkedDayLabel);
  document.getElementById('addNoteBtn').addEventListener('click', addNote);
  document.getElementById('noteInput').addEventListener('keydown', function(e){
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) addNote();
  });

  // ---------- init ----------
  renderCalendar();
  renderNotes();
})();
