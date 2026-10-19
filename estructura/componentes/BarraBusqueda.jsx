import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { normalizeSearchText } from '../../src/data/events.js';

function SearchBar({ events, onSearch, onSelectEvent }) {
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const normalizedQuery = normalizeSearchText(query);
  const matchesEvent = (event) =>
    normalizeSearchText(`${event.name} ${event.originalTitle || ''} ${event.category}`)
      .includes(normalizedQuery);
  const exactMatches = normalizedQuery ? events.filter(matchesEvent) : [];
  const suggestions = normalizedQuery.length > 1 && !exactMatches.length
    ? new Fuse(events, {
        keys: ['name', 'originalTitle', 'category'],
        ignoreLocation: true,
        threshold: 0.38
      }).search(query).slice(0, 3)
    : [];

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const trimmedQuery = query.trim();
    setHasSearched(Boolean(trimmedQuery));
    onSearch(trimmedQuery);
  };

  const selectEvent = (event) => {
    setQuery(event.name);
    setHasSearched(false);
    onSearch(event.name);
    onSelectEvent(event);
  };

  return (
    <section className="search-panel" aria-label="Búsqueda de eventos">
      <form className="search-box" onSubmit={handleSubmit}>
        <span className="search-prefix" aria-hidden="true">⌕</span>
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setHasSearched(false);
          }}
          placeholder="Busca una película, obra, artista o evento..."
          aria-label="Buscar eventos"
          autoComplete="off"
        />
        <button type="submit">Buscar</button>
      </form>
      {exactMatches.length > 0 && (
        <div className="search-results" role="listbox" aria-label="Resultados encontrados">
          <span className="search-results-heading">Resultados encontrados</span>
          {exactMatches.map((event) => (
            <button
              className="search-result"
              key={event.name}
              type="button"
              role="option"
              aria-selected="false"
              onClick={() => selectEvent(event)}
            >
              <span className="search-result-title">{event.name}</span>
              <span className="search-result-category">{event.category}</span>
            </button>
          ))}
        </div>
      )}
      {suggestions.length > 0 && (
        <div className="search-suggestions" aria-label="Sugerencias de búsqueda">
          <span>Quizá quisiste decir:</span>
          {suggestions.map(({ item }) => (
            <button key={item.name} type="button" onClick={() => selectEvent(item)}>
              {item.name} · {item.category}
            </button>
          ))}
        </div>
      )}
      {hasSearched && !exactMatches.length && (
        <p className="search-error" role="alert">
          <strong>Error 404</strong> No encontramos “{query.trim()}”. Prueba una sugerencia.
        </p>
      )}
    </section>
  );
}

export default SearchBar;
