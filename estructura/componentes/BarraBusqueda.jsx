import React from 'react';

function SearchBar() {
  return (
    <section className="search-panel" aria-label="Búsqueda de eventos">
      <div className="search-box">
        <span className="search-prefix" aria-hidden="true">⌕</span>
        <input
          type="text"
          placeholder="Busca una película, obra, artista o evento..."
          aria-label="Buscar eventos"
        />
        <button type="button">Buscar</button>
      </div>
    </section>
  );
}

export default SearchBar;
