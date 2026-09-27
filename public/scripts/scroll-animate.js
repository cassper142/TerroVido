(() => {
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  const els = Array.from(document.querySelectorAll('[data-animate]'));
  if (!els.length) return;

  const showAllImmediately = () => {
    els.forEach((el) => {
      el.classList.add('is-visible');
      el.style.opacity = '';
      el.style.animation = 'none';
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
  };

  if (prefersReduced) {
    showAllImmediately();
    return;
  }

  const staggerRoots = new Set();
  els.forEach((el) => {
    const parent = el.closest('[data-stagger]');
    if (parent) staggerRoots.add(parent);
  });

  staggerRoots.forEach((root) => {
    const delay = parseInt(root.getAttribute('data-stagger') || '110', 10);
    const children = Array.from(root.querySelectorAll('[data-animate]'));
    children.forEach((child, i) => {
      const custom = child.getAttribute('data-delay');
      if (!custom) {
        child.style.animationDelay = `${Math.min(i * delay, 900)}ms`;
      }
    });
  });

  const drawTargets = new WeakSet();
  els.forEach((el) => {
    if (el.getAttribute('data-animate') === 'draw') {
      const svgs = el.tagName === 'svg' ? [el] : el.querySelectorAll('svg');
      svgs.forEach((svg) => {
        const items = svg.querySelectorAll(
          'path, line, polyline, polygon, rect, circle, ellipse',
        );
        items.forEach((node) => {
          if (node.hasAttribute('stroke') && node.getAttribute('stroke') !== 'none') {
            try {
              const len = node.getTotalLength ? node.getTotalLength() : 300;
              node.setAttribute('stroke-dasharray', String(len));
              node.setAttribute('stroke-dashoffset', String(len));
              drawTargets.add(node);
            } catch (_e) {
              /* noop */
            }
          }
        });
      });
    }
  });

  const processed = new WeakSet();

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (processed.has(el)) return;
        processed.add(el);
        requestAnimationFrame(() => el.classList.add('is-visible'));
        obs.unobserve(el);
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px 40px 0px',
    },
  );

  els.forEach((el) => observer.observe(el));

  // Show immediately any that are already in viewport right now
  const vh = window.innerHeight || 800;
  els.forEach((el) => {
    if (processed.has(el)) return;
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top <= vh * 0.95 && rect.bottom >= -40;
    if (inView) {
      processed.add(el);
      requestAnimationFrame(() => el.classList.add('is-visible'));
      observer.unobserve(el);
    }
  });

  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      els.forEach((el) => {
        if (processed.has(el)) return;
        const rect = el.getBoundingClientRect();
        const inView =
          rect.top <= (window.innerHeight || 800) * 0.95 && rect.bottom >= -40;
        if (inView) {
          processed.add(el);
          requestAnimationFrame(() => el.classList.add('is-visible'));
          observer.unobserve(el);
        }
      });
    });
  });

  // Dead-man fallback: if IntersectionObserver hasn't fired after 800ms,
  // force-show all elements to avoid empty white content forever.
  setTimeout(() => {
    let shown = 0;
    els.forEach((el) => {
      if (processed.has(el)) return;
      processed.add(el);
      el.classList.add('is-visible');
      el.style.opacity = '';
      shown++;
    });
  }, 800);
})();
