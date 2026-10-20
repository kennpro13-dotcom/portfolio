/* Portfolio interactions. Each feature checks that its elements exist, so one file works on every page. */
document.addEventListener('DOMContentLoaded', () => {
  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];
  const toast = (msg) => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 3500); };

  // 1. Welcome message (Home page): changes with the time of day
  const welcome = $('#welcome');
  if (welcome) { const h = new Date().getHours(); welcome.textContent = (h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening') + '! Welcome to my portfolio.'; }

  // 2. Dark/Light mode, saved in localStorage
  $('#themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  const menuBtn = $('#menuBtn'), links = $('#navLinks');
  menuBtn.addEventListener('click', () => { const open = links.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open); });
  $$('a', links).forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // 3. Back-to-top button
  const toTop = $('#toTop');
  addEventListener('scroll', () => toTop.classList.toggle('show', scrollY > 300), { passive: true });
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  // 4. Current year + live date/time in footer
  $('#year').textContent = new Date().getFullYear();
  const clock = $('#clock');
  const tick = () => { clock.textContent = new Date().toLocaleString('en-PH', { dateStyle: 'full', timeStyle: 'medium' }); };
  tick(); setInterval(tick, 1000);

  // Placeholder links (href="#" + data-placeholder) show a reminder instead of jumping to the top
  $$('a[data-placeholder]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toast('Placeholder link: add the real URL in the HTML file.'); }));

  // 5. Project category filter + Read More
  const filters = $$('.filter');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.toggle('active', b === btn));
    $$('.project').forEach(card => { card.hidden = btn.dataset.filter !== 'all' && card.dataset.category !== btn.dataset.filter; });
  }));
  $$('.project .desc').forEach(d => {
    if (d.textContent.length < 70) return;
    d.classList.add('clamp');
    const more = document.createElement('button');
    more.type = 'button'; more.textContent = 'Read more'; more.className = 'filter';
    more.addEventListener('click', () => { const c = d.classList.toggle('clamp'); more.textContent = c ? 'Read more' : 'Show less'; });
    d.after(more);
  });

  // 6. Contact form validation (demo only: nothing is sent)
  const form = $('#contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const rules = { name: v => v ? '' : 'Please enter your name.', email: v => !v ? 'Please enter your email.' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email like name@example.com.', subject: v => v ? '' : 'Please enter a subject.', message: v => v.length >= 10 ? '' : 'Message must be at least 10 characters.' };
    for (const id in rules) { const f = $('#' + id), msg = rules[id](f.value.trim()); $('#err-' + id).textContent = msg; f.classList.toggle('invalid', !!msg); f.setAttribute('aria-invalid', !!msg); if (msg) ok = false; }
    const out = $('#formOk');
    if (ok) { out.textContent = 'Demo only: your message passed validation but was not sent. Real delivery needs a backend or a form service such as Formspree or Netlify Forms.'; form.reset(); }
    else { out.textContent = ''; $('.invalid', form).focus(); }
  });
});
