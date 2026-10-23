import React, { useEffect, useState } from 'react';

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem('ticketpro-theme');
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function Header({ cartCount = 0, onOpenCart, userName, onSignIn, onSignOut }) {
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
          {userName ? (
            <>
              <button className="nav-link nav-button" type="button" onClick={onSignOut}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <button className="nav-link nav-button" type="button" onClick={onSignIn}>
              Iniciar sesión
            </button>
          )}

          <div className="nav-tools" aria-label="Acciones rápidas">
            <button
              className="icon-button theme-toggle"
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-pressed={isDark}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? '🌙' : '☀️'}
            </button>
            <button
              className="icon-button cart-shortcut"
              aria-label={`Carrito de compras: ${cartCount} ${cartCount === 1 ? 'boleto' : 'boletos'}`}
              onClick={onOpenCart}
            >
              🛒
              {cartCount > 0 && <span className="cart-count" aria-hidden="true">{cartCount}</span>}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
