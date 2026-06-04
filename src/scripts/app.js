import { prefersReducedMotion } from './dom.js';
import { initAnchorScroll, initNavScrollState } from './nav.js';
import { initModals } from './modal.js';
import { initChatReveal, initScrollReveal } from './reveal.js';
import { initDashboardTilt, initHeroParallax } from './motion.js';

const reduceMotion = prefersReducedMotion();

initNavScrollState();
initModals();
initAnchorScroll();
initScrollReveal({ reduceMotion });
initChatReveal({ reduceMotion });

if (!reduceMotion) {
  initHeroParallax();
  initDashboardTilt();
}
