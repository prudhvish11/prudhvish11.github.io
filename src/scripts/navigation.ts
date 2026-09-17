function initMobileMenu(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-mobile-menu]');
  const trigger = document.querySelector<HTMLButtonElement>('[data-menu-trigger]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-menu-close]');

  if (!dialog || !trigger || !closeButton) return;

  const openMenu = () => {
    dialog.showModal();
    trigger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    dialog.close();
  };

  trigger.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);

  dialog.addEventListener('close', () => {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  });

  // Clicking the backdrop (outside the menu content) closes it.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeMenu();
  });

  // Close on in-page navigation so a Back/Forward or same-page anchor doesn't
  // leave the dialog open underneath the next view.
  dialog.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => dialog.close());
  });
}

document.addEventListener('astro:page-load', initMobileMenu);
