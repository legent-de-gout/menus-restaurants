/* ═══════════════════════════════════════════════════════
   Légende de Goût – Menu 2026
   script.js
═══════════════════════════════════════════════════════ */

/* ── INTRO DISMISS ── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('intro').classList.add('gone'), 2100);
});

/* ── NAV + SCROLL ── */
const nav = document.getElementById('topnav');

window.addEventListener('scroll', onScroll, { passive: true });

function onScroll() {
  nav.classList.toggle('sc', window.scrollY > 50);
  activateSection();
  reveal();
}

/* ── SMOOTH SCROLL TO SECTION ── */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = nav.offsetHeight + 10;
  window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
}

/* ── ACTIVE SECTION DETECTION ── */
const secs   = [...document.querySelectorAll('[data-s]')];
const nps    = [...document.querySelectorAll('.np')];
const dots   = [...document.querySelectorAll('.sd')];
const secMap = ['hero', 'petdej', 'salades', 'plats', 'snacks', 'pizzas', 'boissons', 'desserts'];

function activateSection() {
  const mid = window.scrollY + window.innerHeight * 0.38;
  let cur = secs[0].dataset.s;
  secs.forEach(s => { if (s.offsetTop <= mid) cur = s.dataset.s; });

  // Highlight matching nav pill
  nps.forEach((p, i) => p.classList.toggle('on', secMap[i] === cur));

  // Highlight matching side dot
  dots.forEach(d => d.classList.toggle('on', d.dataset.s === cur));
}

/* ── REVEAL ELEMENTS ON SCROLL ── */
function reveal() {
  document.querySelectorAll('.fi:not(.v), .fl:not(.v), .fr:not(.v)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.93) {
      el.classList.add('v');
    }
  });
}

/* ── INIT ON DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  reveal();
  activateSection();
});