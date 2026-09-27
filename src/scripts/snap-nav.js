(() => {
  const nav = document.querySelector('.snap-nav');
  if (!nav) return;

  const getSections = () => {
    const hero = document.querySelector('.snap-section-hero');
    const main = Array.from(document.querySelectorAll('main section.snap-section'));
    const footer = document.querySelector('footer.snap-section-footer');
    const list = [hero, ...main].filter(Boolean);
    if (footer) list.push(footer);
    return list;
  };

  const sections = getSections();
  const dots = Array.from(nav.querySelectorAll('[data-snap-dot]'));
  const prevBtn = nav.querySelector('[data-snap-action="prev"]');
  const nextBtn = nav.querySelector('[data-snap-action="next"]');

  if (!sections.length || !dots.length) return;

  const headerOffset =
    document.querySelector('header.fixed')?.offsetHeight || 84;

  const scrollTo = (el) => {
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset + 1;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  let currentIndex = 0;
  const setActive = (index) => {
    currentIndex = Math.max(0, Math.min(sections.length - 1, index));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === currentIndex);
      if (i === currentIndex) {
        d.setAttribute('aria-current', 'true');
      } else {
        d.removeAttribute('aria-current');
      }
    });
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === sections.length - 1;
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const target = sections[i];
      if (target) scrollTo(target);
    });
  });

  prevBtn?.addEventListener('click', () => {
    const next = Math.max(0, currentIndex - 1);
    if (sections[next]) scrollTo(sections[next]);
  });
  nextBtn?.addEventListener('click', () => {
    const next = Math.min(sections.length - 1, currentIndex + 1);
    if (sections[next]) scrollTo(sections[next]);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const idx = sections.indexOf(visible.target);
        if (idx !== -1) setActive(idx);
      }
    },
    {
      root: null,
      threshold: [0.25, 0.4, 0.55, 0.7],
      rootMargin: `-${headerOffset}px 0px -10% 0px`,
    },
  );

  sections.forEach((s) => observer.observe(s));

  setActive(0);
})();
