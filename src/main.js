(function () {
  const data = window.TicketProData || {};
  const categories = data.categories || [];
  const posterEvents = data.posterEvents || [];
  const ticketEvents = data.ticketEvents || [];
  const hero = data.hero || {};

  const getPreferredTheme = () => {
    const savedTheme = window.localStorage.getItem('ticketpro-theme');
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    const toggleButton = document.querySelector('.theme-toggle');

    if (toggleButton) {
      toggleButton.textContent = theme === 'dark' ? '🌙' : '☀️';
      toggleButton.setAttribute('aria-pressed', String(theme === 'dark'));
      toggleButton.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }

    window.localStorage.setItem('ticketpro-theme', theme);
  };

  const categoryRoot = document.querySelector('.categories');
  if (categoryRoot && categories.length) {
    categoryRoot.innerHTML = categories
      .map(
        (category) => `
          <article class="category-item" aria-label="${category.name}">
            <div class="category-badge" aria-hidden="true">${category.icon}</div>
            <span>${category.name}</span>
          </article>
        `
      )
      .join('');
  }

  const heroBanner = document.querySelector('.hero-banner');
  if (heroBanner && hero.image) {
    heroBanner.style.backgroundImage = `linear-gradient(90deg, rgba(15, 16, 21, 0.71), rgba(15, 16, 21, 0.2)), url("${hero.image}")`;
  }

  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');
  if (heroTitle && hero.title) {
    heroTitle.textContent = hero.title;
  }
  if (heroDescription && hero.description) {
    heroDescription.textContent = hero.description;
  }

  const posterStrip = document.getElementById('posterStrip');
  if (posterStrip && posterEvents.length) {
    posterStrip.innerHTML = posterEvents
      .map(
        (event) => `
          <article class="poster-card" style="background-image: url('${event.image}');" aria-label="${event.title}">
            <div class="poster-info">
              <span>${event.genre}</span>
              <strong>${event.title}</strong>
            </div>
          </article>
        `
      )
      .join('');

    const posterRow = posterStrip.closest('.poster-row');
    const [previousButton, nextButton] = posterRow.querySelectorAll('.row-arrow');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isHovered = false;
    let isFocused = false;
    let autoTimer = null;
    let isAnimating = false;

    // Create an infinite looping carousel by cloning first and last items
    const originalPosters = Array.from(posterStrip.querySelectorAll('.poster-card'));
    if (originalPosters.length > 1) {
      const gap = Number.parseFloat(window.getComputedStyle(posterStrip).columnGap) || 0;
      const firstClone = originalPosters[0].cloneNode(true);
      const lastClone = originalPosters[originalPosters.length - 1].cloneNode(true);

      posterStrip.appendChild(firstClone);
      posterStrip.insertBefore(lastClone, posterStrip.firstChild);

      // Recompute posters and sizes after DOM changes
      const posters = Array.from(posterStrip.querySelectorAll('.poster-card'));
      const realCount = originalPosters.length;
      const measureIndex = 1; // after prepend, index 1 is the first real poster
      const itemWidth = Math.round(posters[measureIndex].getBoundingClientRect().width);
      const scrollStep = itemWidth + gap;

      // Start positioned on the first real poster (index 0 corresponds to scrollLeft = scrollStep)
      posterStrip.scrollLeft = scrollStep;
      let index = 0; // logical index for real posters 0..realCount-1

      const adjustAfterMove = (targetIndex) => {
        // If moved into clones, jump to corresponding real position instantly
        if (targetIndex >= realCount) {
          // arrived at clone of first -> jump to real first
          posterStrip.scrollLeft = scrollStep;
          index = 0;
        } else if (targetIndex < 0) {
          // arrived at clone of last -> jump to real last
          posterStrip.scrollLeft = realCount * scrollStep;
          index = realCount - 1;
        } else {
          index = targetIndex;
        }
        isAnimating = false;
      };

      const goTo = (targetIndex) => {
        if (isAnimating) return;
        isAnimating = true;
        const targetPos = (targetIndex + 1) * scrollStep; // +1 for the prepended clone

        if (reducedMotion.matches) {
          posterStrip.scrollLeft = targetPos;
          adjustAfterMove(targetIndex);
          return;
        }

        posterStrip.scrollTo({ left: targetPos, behavior: 'smooth' });
        // After the smooth scroll finishes, correct position if needed
        setTimeout(() => adjustAfterMove(targetIndex), 480);
      };

      const next = () => goTo(index + 1);
      const prev = () => goTo(index - 1);

      previousButton.addEventListener('click', () => prev());
      nextButton.addEventListener('click', () => next());

      posterRow.addEventListener('pointerenter', () => { isHovered = true; pauseAuto(); });
      posterRow.addEventListener('pointerleave', () => { isHovered = false; resumeAuto(); });
      posterRow.addEventListener('focusin', () => { isFocused = true; pauseAuto(); });
      posterRow.addEventListener('focusout', (event) => {
        if (!posterRow.contains(event.relatedTarget)) { isFocused = false; resumeAuto(); }
      });

      const startAuto = () => {
        if (reducedMotion.matches) return;
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = setInterval(() => {
          if (!isHovered && !isFocused && !document.hidden) next();
        }, 4500);
      };
      const pauseAuto = () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } };
      const resumeAuto = () => { if (!autoTimer) startAuto(); };

      document.addEventListener('visibilitychange', () => { if (document.hidden) pauseAuto(); else resumeAuto(); });

      startAuto();
    } else {
      // If only one poster, keep simple behavior: arrows do nothing
      previousButton.addEventListener('click', () => {});
      nextButton.addEventListener('click', () => {});
    }

  }

  const ticketGrid = document.getElementById('ticketGrid');
  if (ticketGrid && ticketEvents.length) {
    ticketGrid.innerHTML = ticketEvents
      .map(
        (event) => `
          <article class="ticket-card" aria-label="${event.name}">
            <div class="ticket-image" style="background-image: url('${event.image}');"></div>
            <div class="ticket-body">
              <span class="ticket-badge">${event.category}</span>
              <h3>${event.name}</h3>
              <div class="ticket-row">
                <span aria-hidden="true">📅</span>
                <span>${event.date}</span>
              </div>
              <div class="ticket-row">
                <span aria-hidden="true">📍</span>
                <span>${event.venue}</span>
              </div>
              <div class="ticket-bottom">
                <span class="price-tag">${event.priceLabel}</span>
                <strong class="price-value">${event.price}</strong>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  }

  const toggleButton = document.querySelector('.theme-toggle');
  if (toggleButton) {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    toggleButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  if (window.TicketProStorage) {
    const existingState = window.TicketProStorage.read('ticketpro-demo-state', []);
    if (!existingState.length) {
      window.TicketProStorage.write('ticketpro-demo-state', [{ status: 'ready', sprint: 'base-visual' }]);
    }
  }
})();
