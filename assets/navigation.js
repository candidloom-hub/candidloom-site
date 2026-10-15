const shell = document.querySelector('.site-nav-shell');
const toggle = document.querySelector('.site-nav-toggle');

if (shell instanceof HTMLElement && toggle instanceof HTMLButtonElement) {
  toggle.addEventListener('click', () => {
    const nextOpen = shell.dataset.open !== 'true';
    shell.dataset.open = String(nextOpen);
    toggle.setAttribute('aria-expanded', String(nextOpen));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && shell.dataset.open === 'true') {
      shell.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

// Plays the hero demo when it comes into view, so phone visitors see it too.
const demo = document.querySelector('.demo');
if (demo instanceof HTMLElement && 'IntersectionObserver' in window) {
  const rect = demo.getBoundingClientRect();
  if (rect.top > window.innerHeight * 0.85) {
    demo.dataset.wait = 'true';
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        delete demo.dataset.wait;
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(demo);
  }
}
