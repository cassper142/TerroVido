(() => {
  const header = document.querySelector('.header-root');
  if (!header) return;

  // Check if we are on a page with a dark hero section next to/inside the flow
  // (about/products: <section class="hero-dark"><Header/>), but contact/distributors/blog
  // have Header as SIBLING before <section class="snap-section-hero hero-dark">.
  const firstHeroDark = (() => {
    const candidates = Array.from(document.querySelectorAll('.hero-dark'));
    for (const el of candidates) {
      const rect = el.getBoundingClientRect();
      // pick the hero-dark section that is highest on the page (top <= header height)
      if (rect.top <= 200) return el;
    }
    return null;
  })();

  const THRESHOLD = 20;
  const style = header.style;
  const navEls = Array.from(header.querySelectorAll('nav a, nav button, .lang-pill-switcher, [data-pill-lang]'));
  const navStyleEl = navEls[0];
  const socials = Array.from(header.querySelectorAll('.social-group img'));
  const btnPrimary = header.querySelector('.btn-primary');
  const btnPrimaryImg = btnPrimary?.querySelector('img');
  const headerLogo = header.querySelector('.header-logo img, img[alt=\"Tero Vido\"]');

  const enableScrolled = () => {
    header.classList.add('header--scrolled');
    style.setProperty('background', 'rgba(255, 255, 255, 0.82)');
    style.setProperty(
      '-webkit-backdrop-filter',
      'blur(14px) saturate(1.1)',
    );
    style.setProperty('backdrop-filter', 'blur(14px) saturate(1.1)');
    style.setProperty('border-bottom-width', '1px');
    style.setProperty('border-bottom-style', 'solid');
    style.setProperty('border-bottom-color', 'rgba(0, 0, 0, 0.06)');
    style.setProperty('box-shadow', '0 10px 30px rgba(31, 51, 108, 0.08)');
    if (firstHeroDark) {
      navEls.forEach((el) => {
        el.style.color = '';
      });
      socials.forEach((s) => {
        s.style.filter = '';
      });
      if (headerLogo) {
        headerLogo.style.filter = '';
      }
      if (btnPrimaryImg) {
        btnPrimaryImg.style.filter = '';
      }
    }
  };

  const disableScrolled = () => {
    header.classList.remove('header--scrolled');
    style.setProperty('background', 'transparent');
    style.setProperty('-webkit-backdrop-filter', 'none');
    style.setProperty('backdrop-filter', 'none');
    style.setProperty('border-bottom-color', 'transparent');
    style.setProperty('box-shadow', 'none');
    if (firstHeroDark) {
      navEls.forEach((el) => {
        el.style.color = 'rgba(255, 255, 255, 0.92)';
      });
      socials.forEach((s) => {
        s.style.filter =
          'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45))';
      });
      if (headerLogo) {
        headerLogo.style.filter =
          'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45))';
      }
      if (btnPrimaryImg) {
        btnPrimaryImg.style.filter = 'none';
      }
    }
  };

  let ticking = false;
  let last = false;
  const toggle = () => {
    const on = window.scrollY > THRESHOLD;
    if (on === last) return;
    last = on;
    if (on) enableScrolled();
    else disableScrolled();
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      toggle();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  toggle();
})();
