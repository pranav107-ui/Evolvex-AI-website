document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });
  

  window.__ANIMATION_HOOKS = Array.from(document.querySelectorAll('[data-animate]')).map(el => {
    return { el, animation: el.dataset.animate };
  });
});
