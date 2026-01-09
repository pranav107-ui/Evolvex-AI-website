
(function () {
  const init = () => {
    console.log('EvolveX: Main script initializing...');

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('open');
      });
    }

    // Scroll Animation
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
      scrollObserver.observe(el);
    });

    // --- Navigation Indicator Logic ---
    const navIndicator = document.querySelector('.nav-indicator');
    const navLinks = document.querySelectorAll('.nav-link');

    // Explicitly confirm elements found
    if (!navIndicator) {
      console.warn('EvolveX: Nav indicator not found');
      return;
    }

    function moveIndicator(target) {
      if (!target) return;

      const targetLeft = target.offsetLeft;
      const targetWidth = target.offsetWidth;
      const indicatorWidth = navIndicator.offsetWidth;

      // Center calculation
      const newLeft = targetLeft + (targetWidth / 2) - (indicatorWidth / 2);

      console.log(`EvolveX: Moving indicator to left=${newLeft}px (Target: ${target.textContent.trim()})`);

      navIndicator.style.left = `${newLeft}px`;
      navIndicator.style.opacity = '1';
    }

    // Active State Logic
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop();
    const actualPage = (pageName === '' || pageName === 'index.html') ? 'index.html' : pageName;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Helper to get filename from href
      const linkPath = href ? href.split('/').pop() : '';

      if (linkPath === actualPage) {
        navLinks.forEach(l => l.classList.remove('nav-link-active'));
        link.classList.add('nav-link-active');
      }
    });

    const updateActivePosition = () => {
      const activeLink = document.querySelector('.nav-link-active');
      if (activeLink) {
        moveIndicator(activeLink);
      } else {
        console.warn('EvolveX: No active link found');
      }
    };

    // Initialize
    updateActivePosition();
    // Safety check for layout shifts (fonts loading)
    setTimeout(updateActivePosition, 100);
    setTimeout(updateActivePosition, 500);

    // Hover Events
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        moveIndicator(link);
      });
    });

    if (mainNav) {
      mainNav.addEventListener('mouseleave', () => {
        updateActivePosition();
      });
    }

    window.addEventListener('resize', updateActivePosition);

    // --- Accordion Logic ---
    const whyWorkSection = document.getElementById('why-work');
    if (whyWorkSection) {
      const setupAccordionCards = (card1Id, card2Id) => {
        const card1 = document.getElementById(card1Id);
        const card2 = document.getElementById(card2Id);
        const expandedHeightClass = 'h-600px';

        const resetCards = () => {
          if (card1) {
            card1.classList.remove('expanded', expandedHeightClass, 'flex-none');
            card1.classList.add('flex-1');
          }
          if (card2) {
            card2.classList.remove('expanded', expandedHeightClass, 'flex-none');
            card2.classList.add('flex-1');
          }
        };

        if (card1 && card2) {
          card1.addEventListener('mouseenter', () => {
            card1.classList.add('expanded', expandedHeightClass, 'flex-none');
            card1.classList.remove('flex-1');
            card2.classList.remove('expanded', expandedHeightClass, 'flex-none');
            card2.classList.add('flex-1');
          });
          card1.addEventListener('mouseleave', resetCards);

          card2.addEventListener('mouseenter', () => {
            card2.classList.add('expanded', expandedHeightClass, 'flex-none');
            card2.classList.remove('flex-1');
            card1.classList.remove('expanded', expandedHeightClass, 'flex-none');
            card1.classList.add('flex-1');
          });
          card2.addEventListener('mouseleave', resetCards);
        }
      };

      setupAccordionCards('card-growth', 'card-innovation');
      setupAccordionCards('card-collab', 'card-balance');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
