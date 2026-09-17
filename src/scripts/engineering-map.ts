function initEngineeringMap(): void {
  const root = document.querySelector<HTMLElement>('[data-engineering-map]');
  if (!root) return;

  const nodes = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-map-node]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-map-panel]'));
  if (nodes.length === 0 || panels.length === 0) return;

  let pinned: string | null = null;

  const show = (id: string) => {
    for (const node of nodes) {
      const isActive = node.dataset.mapNode === id;
      node.classList.toggle('is-active', isActive);
      node.setAttribute('aria-pressed', String(isActive));
    }
    for (const panel of panels) {
      panel.classList.toggle('is-active', panel.dataset.mapPanel === id);
    }
  };

  const revertToPinned = () => show(pinned ?? nodes[0].dataset.mapNode!);

  for (const node of nodes) {
    const id = node.dataset.mapNode!;
    node.addEventListener('click', () => {
      pinned = id;
      show(id);
    });
    node.addEventListener('mouseenter', () => show(id));
    node.addEventListener('focus', () => show(id));
    node.addEventListener('mouseleave', revertToPinned);
    node.addEventListener('blur', revertToPinned);
  }

  show(nodes[0].dataset.mapNode!);
}

document.addEventListener('astro:page-load', initEngineeringMap);
