export const initNavScrollState = () => {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const updateNavState = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
  };

  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive: true });
};

export const initAnchorScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
};
