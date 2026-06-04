import { queryAll } from './dom.js';

export const initScrollReveal = ({ reduceMotion }) => {
  const revealEls = queryAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  revealEls.forEach((el) => observer.observe(el));
};

export const initChatReveal = ({ reduceMotion }) => {
  const messages = queryAll('[data-msg]');
  if (!messages.length) return;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    messages.forEach((message) => message.classList.add('is-visible'));
    return;
  }

  const chat = document.querySelector('.tg');
  if (!chat) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      messages.forEach((message) => message.classList.add('is-visible'));
      obs.disconnect();
    });
  }, { threshold: 0.25 });

  observer.observe(chat);
};
