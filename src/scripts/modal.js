export const initModals = () => {
  const triggers = document.querySelectorAll('[data-modal-open]');
  let activeModal = null;
  let activeTrigger = null;

  const closeModal = () => {
    if (!activeModal) return;

    activeModal.classList.remove('is-open');
    activeModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-modal-open');

    if (activeTrigger) {
      activeTrigger.focus();
    }

    activeModal = null;
    activeTrigger = null;
  };

  const openModal = (modal, trigger) => {
    activeModal = modal;
    activeTrigger = trigger;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open');
    modal.querySelector('[role="dialog"]')?.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const modal = document.getElementById(trigger.dataset.modalOpen);
      if (!modal) return;

      openModal(modal, trigger);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((close) => {
    close.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
};
