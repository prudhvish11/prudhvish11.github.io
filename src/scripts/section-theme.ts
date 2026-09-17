function initSectionTheme(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const sections = document.querySelectorAll<HTMLElement>('[data-chapter-theme]');
  if (!header || sections.length === 0) return;

  const setScrolled = () => {
    header.dataset.scrolled = window.scrollY > 4 ? 'true' : 'false';
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  if (!('IntersectionObserver' in window)) {
    header.dataset.navTheme = sections[0].dataset.chapterTheme ?? 'light';
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          header.dataset.navTheme = entry.target.getAttribute('data-chapter-theme') ?? 'light';
        }
      }
    },
    { rootMargin: '-1px 0px -97% 0px', threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener('astro:page-load', initSectionTheme);
