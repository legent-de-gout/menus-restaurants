// Légende de Goût – script v2

const burger    = document.getElementById('burger');
const navLinks  = document.getElementById('navLinks');

// burger toggle
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
});

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  })
);

// active section highlight
const sections = document.querySelectorAll('section[id]');
const links    = navLinks.querySelectorAll('a[href^="#"]');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => io.observe(s));

// scroll reveal
const els = document.querySelectorAll(
  '.formule, .dish-card, .dessert-tile, .kids-banner, .plat-jour-badge, .price-list li'
);
els.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
});

const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { rootMargin: '0px 0px -50px 0px' });

els.forEach(el => ro.observe(el));

// titles reveal
document.querySelectorAll('.sec__title, .cat-label, .mini-title').forEach(el => {
  el.classList.add('reveal');
  const o = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { el.classList.add('visible'); o.disconnect(); }
  }, { rootMargin: '0px 0px -30px 0px' });
  o.observe(el);
});