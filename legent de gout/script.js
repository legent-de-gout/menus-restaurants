// ── NAV CLICK ──
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

// ── ACTIVE NAV on scroll ──
const allSections = document.querySelectorAll('.section[id]');
const allBtns = document.querySelectorAll('.nav-btn');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      allBtns.forEach(b => {
        const active = b.dataset.target === id;
        b.classList.toggle('active', active);
        if (active) b.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
      });
    }
  });
}, { threshold: 0.25, rootMargin: '-58px 0px -38% 0px' });

allSections.forEach(s => navObserver.observe(s));

// ── FADE IN on scroll ──
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
  });
}, { threshold: 0.08 });

allSections.forEach(s => fadeObserver.observe(s));

// ── SCROLL TOP BUTTON ──
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 380), { passive:true });
// ── SCROLL TOP CLICK ──
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});