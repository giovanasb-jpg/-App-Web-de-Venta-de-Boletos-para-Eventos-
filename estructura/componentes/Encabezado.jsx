import React, { useEffect, useState } from 'react';

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem('ticketpro-theme');
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function Header() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('ticketpro-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand" aria-label="TicketPro logo y nombre">
          <div className="brand-mark">TP</div>
          <div className="brand-copy">
            <span className="brand-name">TicketPro</span>
            <small>Tu próxima experiencia te espera.</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#" className="nav-link active">Inicio</a>
          <a href="#" className="nav-link">Mis boletos</a>
          <a href="#" className="nav-link">Iniciar sesión</a>

          <div className="nav-tools" aria-label="Acciones rápidas">
            <button
              className="icon-button theme-toggle"
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-pressed={isDark}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <button className="icon-button" aria-label="Favoritos">♡</button>
            <button className="icon-button" aria-label="Búsqueda">⌕</button>
            <button className="icon-button" aria-label="Carrito de compras">🛒</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
