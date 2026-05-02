/* Mega Discount Appliances — Site JS
   - Sticky nav state on scroll
   - Mobile drawer
   - Scroll-reveal with 3-layer fallback
   - Count-up numbers (with 2s settle fallback)
   - GSAP hero load animation (only if GSAP is on the page)
*/

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -------------- Sticky nav --------------
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------------- Mobile drawer --------------
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const closeDrawer = () => {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
    document.body.classList.remove('nav-open');
  };
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      if (open) closeDrawer();
      else {
        toggle.setAttribute('aria-expanded', 'true');
        links.classList.add('open');
        document.body.classList.add('nav-open');
      }
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) closeDrawer();
    });
  }

  // -------------- Scroll reveal --------------
  // 3-layer fallback per skill best practice:
  //   (a) IntersectionObserver
  //   (b) 600ms timeout reveal anything in 2× viewport
  //   (c) 3s final force-reveal of all .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reduceMotion) {
      revealEls.forEach(el => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));

      // 600ms early-pass: anything within 2× viewport
      setTimeout(() => {
        const vh = window.innerHeight * 2;
        revealEls.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh) el.classList.add('in');
        });
      }, 600);

      // 3s final fallback: force reveal everything
      setTimeout(() => {
        revealEls.forEach(el => el.classList.add('in'));
      }, 3000);
    }
  }

  // -------------- Count up numbers --------------
  // Targets: .countup elements with data-to (number) and optional data-prefix / data-suffix
  const counters = document.querySelectorAll('.countup');
  if (counters.length) {
    const animateCounter = (el) => {
      if (el.dataset.done === '1') return;
      const target = parseFloat(el.dataset.to);
      if (isNaN(target)) return;
      const duration = 1400;
      const start = performance.now();
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = prefix + val.toFixed(decimals) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else { el.textContent = prefix + target.toFixed(decimals) + suffix; el.dataset.done = '1'; }
      };
      requestAnimationFrame(tick);
    };

    if (reduceMotion) {
      counters.forEach(el => {
        const target = parseFloat(el.dataset.to);
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        el.textContent = (el.dataset.prefix || '') + target.toFixed(decimals) + (el.dataset.suffix || '');
        el.dataset.done = '1';
      });
    } else {
      const co = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(el => co.observe(el));

      // 2s settle fallback per skill best practice
      setTimeout(() => {
        counters.forEach(el => {
          if (el.dataset.done !== '1') {
            const target = parseFloat(el.dataset.to);
            const decimals = parseInt(el.dataset.decimals || '0', 10);
            el.textContent = (el.dataset.prefix || '') + target.toFixed(decimals) + (el.dataset.suffix || '');
            el.dataset.done = '1';
          }
        });
      }, 2000);
    }
  }

  // -------------- GSAP hero entrance (optional) --------------
  if (window.gsap && !reduceMotion) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-eyebrow', { y: 18, opacity: 0, duration: 0.6 })
      .from('.hero h1', { y: 24, opacity: 0, duration: 0.9 }, '-=0.3')
      .from('.hero-lede', { y: 18, opacity: 0, duration: 0.7 }, '-=0.55')
      .from('.hero-ctas > *', { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.45')
      .from('.hero-meta-item', { y: 10, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.35')
      .from('.hero-visual', { y: 30, opacity: 0, duration: 1, scale: 0.96 }, '-=0.9')
      .from('.hero-stat', { scale: 0.8, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=0.4');
  }
})();
