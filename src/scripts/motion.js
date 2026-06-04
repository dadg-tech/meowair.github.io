export const initHeroParallax = () => {
  const lines = document.querySelector('.hero__lines');
  const heroVisual = document.querySelector('.hero__visual');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;

      if (lines && y < 900) {
        lines.style.transform = `translateY(${y * 0.16}px)`;
      }

      if (heroVisual && y < 900) {
        heroVisual.style.transform = `translateY(${y * -0.05}px)`;
      }

      ticking = false;
    });
  }, { passive: true });
};

export const initDashboardTilt = () => {
  const dashboard = document.querySelector('[data-tilt]');
  if (!dashboard || !window.matchMedia('(pointer: fine)').matches) return;

  const wrap = dashboard.closest('.hero__visual') || dashboard;

  wrap.addEventListener('pointermove', (event) => {
    const rect = wrap.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    dashboard.style.transform =
      `perspective(900px) rotateY(${px * 7}deg) rotateX(${py * -7}deg)`;
  });

  wrap.addEventListener('pointerleave', () => {
    dashboard.style.transform = 'perspective(900px) rotateY(0) rotateX(0)';
  });
};
