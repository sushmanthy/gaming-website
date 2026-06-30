/* ============================================
   AWS Gaming — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initScrollAnimations();
  initCounters();
});

/* ============================================
   NAVBAR — scroll effect + mobile toggle
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function toggleNav() {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!links) return;
  links.classList.toggle('open');

  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  const isOpen = links.classList.contains('open');
  if (spans.length === 3) {
    spans[0].style.transform = isOpen ? 'rotate(45deg) translateY(7px)' : '';
    spans[1].style.opacity  = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translateY(-7px)' : '';
  }

  // Close on outside click
  if (isOpen) {
    document.addEventListener('click', closeNavOnOutside);
  } else {
    document.removeEventListener('click', closeNavOnOutside);
  }
}

function closeNavOnOutside(e) {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!links || !hamburger) return;
  if (!links.contains(e.target) && !hamburger.contains(e.target)) {
    links.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    document.removeEventListener('click', closeNavOnOutside);
  }
}

/* ============================================
   HERO PARTICLES
   ============================================ */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = ['#ff6b00', '#00d4ff', '#8b5cf6', '#ffffff'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * -15}s;
      opacity: ${Math.random() * 0.7 + 0.3};
    `;
    container.appendChild(p);
  }
}

/* ============================================
   SCROLL ANIMATIONS — Intersection Observer
   ============================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = 16;
  const total = Math.floor(duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current++;
    const value = Math.round(easeOutQuart(current / total) * target);
    el.textContent = formatNumber(value, target);

    if (current >= total) {
      el.textContent = formatNumber(target, target);
      clearInterval(timer);
    }
  }, step);
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function formatNumber(value, target) {
  if (target >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (target >= 1000) {
    return value.toLocaleString();
  } else if (target === 99) {
    return value + '.9';
  }
  return value.toString();
}

/* ============================================
   SMOOTH ANCHOR SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================
   GAME CARD HOVER RIPPLE
   ============================================ */
document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    this.style.cursor = 'pointer';
  });
});

/* ============================================
   TOOLTIP — Simple hover tooltips
   ============================================ */
document.querySelectorAll('[data-tooltip]').forEach(el => {
  el.setAttribute('title', el.dataset.tooltip);
});

/* ============================================
   LAZY IMAGE LOADING
   ============================================ */
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imgObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imgObserver.observe(img));
}

/* ============================================
   PRICING PAGE — Tabs keyboard a11y
   ============================================ */
document.querySelectorAll('.form-tab, .genre-tab').forEach(tab => {
  tab.setAttribute('role', 'tab');
  tab.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

/* ============================================
   ACTIVE NAV LINK highlight based on current page
   ============================================ */
(function() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (path.endsWith(href) || (path === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================
   BACK TO TOP (auto inject)
   ============================================ */
(function() {
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #ff6b00, #ff8c40);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    box-shadow: 0 0 20px rgba(255,107,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
    btn.style.pointerEvents = show ? 'all' : 'none';
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================
   KEYBOARD NAVIGATION SUPPORT
   ============================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close mobile nav
    const links = document.getElementById('navLinks');
    if (links && links.classList.contains('open')) toggleNav();

    // Close game modal (games page)
    const modal = document.getElementById('gameModal');
    if (modal && modal.classList.contains('open')) {
      if (typeof closeModal === 'function') closeModal();
    }
  }
});
