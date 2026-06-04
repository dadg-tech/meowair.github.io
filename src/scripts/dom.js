export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const queryAll = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));
