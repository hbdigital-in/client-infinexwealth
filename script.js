// Infinex Wealth — Site JS

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar: transitions from dark (over hero) to white (over content)
const navbar = document.getElementById('navbar');
const hero = document.getElementById('home');
function updateNavbar() {
  const threshold = hero ? hero.offsetTop + hero.offsetHeight - 80 : 100;
  navbar.classList.toggle('scrolled', window.scrollY > threshold);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Contact form: async submit with loading state
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.textContent = 'Message Sent!';
        form.reset();
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
      } else {
        btn.textContent = 'Try Again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => observer.observe(el));
}
