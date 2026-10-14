(function () {
  const data = window.TicketProData || {};
  const categories = data.categories || [];
  const posterEvents = data.posterEvents || [];
  const ticketEvents = data.ticketEvents || [];
  const hero = data.hero || {};

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

  if (window.TicketProStorage) {
    const existingState = window.TicketProStorage.read('ticketpro-demo-state', []);
    if (!existingState.length) {
      window.TicketProStorage.write('ticketpro-demo-state', [{ status: 'ready', sprint: 'base-visual' }]);
    }
  }
})();
