import { prefersReducedMotion } from './dom.js';
import { initAnchorScroll, initNavScrollState } from './nav.js';
import { initChatReveal, initScrollReveal } from './reveal.js';
import { initDashboardTilt, initHeroParallax } from './motion.js';

const reduceMotion = prefersReducedMotion();

initNavScrollState();
initAnchorScroll();
initScrollReveal({ reduceMotion });
initChatReveal({ reduceMotion });

if (!reduceMotion) {
  initHeroParallax();
  initDashboardTilt();
}
