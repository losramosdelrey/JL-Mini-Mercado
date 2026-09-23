function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');
  if (!navMenu) return;
  const isOpen = navMenu.classList.toggle('active');
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  }
}
function closeMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');
  if (navMenu) navMenu.classList.remove('active');
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.fade-in-up');

  // [FIX 7] ANTES: si IntersectionObserver no existía (WebViews/navegadores
  // antiguos) el constructor lanzaba un error y ningún .fade-in-up recibía la
  // clase "visible": tarjetas de objetivos (títulos), footer, etc. quedaban con
  // opacity:0 (invisibles). AHORA: se muestran todos directamente.
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });
  targets.forEach(el => observer.observe(el));
});
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
  }
});
