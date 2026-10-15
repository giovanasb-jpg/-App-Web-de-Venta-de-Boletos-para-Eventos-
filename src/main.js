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
    let previousFrameTime = 0;

    // Duplicate the sequence so the continuous scroll can loop without a visible jump.
    const originalPosters = Array.from(posterStrip.querySelectorAll('.poster-card'));
    if (originalPosters.length > 1) {
      const gap = Number.parseFloat(window.getComputedStyle(posterStrip).columnGap) || 0;
      const realCount = originalPosters.length;
      originalPosters.forEach((poster) => {
        const clone = poster.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        posterStrip.appendChild(clone);
      });

      const getLoopDistance = () => posterStrip.children[realCount].offsetLeft - posterStrip.children[0].offsetLeft;
      const getScrollStep = () => posterStrip.children[1].offsetLeft - posterStrip.children[0].offsetLeft || originalPosters[0].getBoundingClientRect().width + gap;

      const move = (direction) => {
        const loopDistance = getLoopDistance();
        posterStrip.scrollLeft = (posterStrip.scrollLeft + direction * getScrollStep() + loopDistance) % loopDistance;
      };

      previousButton.addEventListener('click', () => move(-1));
      nextButton.addEventListener('click', () => move(1));

      const animate = (time) => {
        if (previousFrameTime && !document.hidden) {
          const elapsed = Math.min(time - previousFrameTime, 50);
          const loopDistance = getLoopDistance();
          posterStrip.scrollLeft = (posterStrip.scrollLeft + elapsed * 0.032) % loopDistance;
        }
        previousFrameTime = time;
        window.requestAnimationFrame(animate);
      };

      if (!reducedMotion.matches) {
        window.requestAnimationFrame(animate);
      }

      document.addEventListener('visibilitychange', () => { previousFrameTime = 0; });
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
