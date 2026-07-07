// ---- Generische Wochenplan-Rendering-Funktionen (Training + Ernährung) ----

const today = new Date().getDay(); // 0=So ... 6=Sa
const dayNamesShort = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

function sessionCard(session, expanded) {
  const cfg = typeConfig[session.type];
  const key = session.time.replace(/\s+/g, '-').toLowerCase() + '-' + session.title.slice(0, 20).replace(/\s+/g, '-').toLowerCase();
  const isOpen = localStorage.getItem('open-' + key) === 'true' || expanded;
  return `
    <div class="session c-${cfg.color} ${isOpen ? 'open' : ''}" data-session-key="${key}">
      <button class="session-head" data-toggle="${key}">
        <span class="session-icon">${icons[session.type]}</span>
        <span class="session-main">
          <span class="session-time">${session.time}</span>
          <span class="session-title">${session.title}</span>
        </span>
        <span class="session-chevron">${icons.chevron}</span>
      </button>
      <div class="session-body">
        <div class="session-meta">
          ${session.duration ? `<span class="meta-item">${icons.clock}${session.duration}</span>` : ''}
          ${session.target ? `<span class="meta-item">${icons.target}${session.target}</span>` : ''}
        </div>
        ${session.details.length ? `<ul class="session-details">${session.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `;
}

function renderToday(weekData, heroId) {
  const dayData = weekData.find(d => d.weekday === today);
  const hero = document.getElementById(heroId);
  if (!hero) return;
  if (!dayData) { hero.innerHTML = ''; return; }
  hero.innerHTML = `
    <div class="today-label">Heute &middot; ${dayData.name}</div>
    <div class="today-sessions">
      ${dayData.sessions.map(s => sessionCard(s, false)).join('')}
    </div>
  `;
}

function renderWeekStrip(weekData, stripId) {
  const strip = document.getElementById(stripId);
  if (!strip) return;
  strip.innerHTML = weekData.map(d => `
    <button class="strip-day ${d.weekday === today ? 'active' : ''}" data-jump="${stripId}-day-${d.weekday}">
      ${dayNamesShort[d.weekday]}
    </button>
  `).join('');
  strip.querySelectorAll('[data-jump]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function renderWeekList(weekData, listId, stripId) {
  const list = document.getElementById(listId);
  if (!list) return;
  const ordered = [...weekData].sort((a, b) => {
    const da = (a.weekday - 1 + 7) % 7;
    const db = (b.weekday - 1 + 7) % 7;
    return da - db;
  });
  list.innerHTML = ordered.map(d => `
    <div class="week-day-card ${d.weekday === today ? 'is-today' : ''}" id="${stripId}-day-${d.weekday}">
      <h3>${d.name}</h3>
      ${d.sessions.map(s => sessionCard(s, false)).join('')}
    </div>
  `).join('');
}

function attachSessionToggles() {
  document.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.session');
      const isOpen = card.classList.toggle('open');
      localStorage.setItem('open-' + btn.dataset.toggle, isOpen);
    });
  });
}

function renderWeekBlock(weekData, prefix) {
  renderToday(weekData, prefix + '-today-hero');
  renderWeekStrip(weekData, prefix + '-day-strip');
  renderWeekList(weekData, prefix + '-week-list', prefix);
}

renderWeekBlock(trainingWeek, 'training');
renderWeekBlock(nutritionWeek, 'nutrition');
attachSessionToggles();

// Einkaufsliste rendern
const shoppingListEl = document.getElementById('shopping-list');
if (shoppingListEl) {
  shoppingListEl.innerHTML = shoppingList.map((item, i) => `
    <li data-key="shop-${i}">${item}</li>
  `).join('');
}

// Tab-Wechsel
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    localStorage.setItem('activeTab', btn.dataset.tab);
  });
});

// Letzten aktiven Tab wiederherstellen
const savedTab = localStorage.getItem('activeTab');
if (savedTab) {
  const btn = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
  if (btn) btn.click();
}

// Abhakbare Listenpunkte (Training + Einkaufsliste)
document.querySelectorAll('[data-key]').forEach(el => {
  if (el.tagName === 'INPUT') return; // Inputs separat behandeln
  const key = 'check-' + el.dataset.key;
  if (localStorage.getItem(key) === 'true') el.classList.add('done');

  el.addEventListener('click', () => {
    el.classList.toggle('done');
    localStorage.setItem(key, el.classList.contains('done'));
  });
});

// Garmin-Werte Inputs speichern/laden
document.querySelectorAll('input[data-key]').forEach(input => {
  const key = 'value-' + input.dataset.key;
  const saved = localStorage.getItem(key);
  if (saved) input.value = saved;

  input.addEventListener('input', () => {
    localStorage.setItem(key, input.value);
  });
});
