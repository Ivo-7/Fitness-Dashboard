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
