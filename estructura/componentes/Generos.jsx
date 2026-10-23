import React, { useEffect, useId, useRef } from 'react';
import { categories } from '../../src/data/events.js';
import TarjetaBoleto from './TarjetaBoleto.jsx';

function Generos({ selectedCategory, onSelectCategory, events, onSelectEvent }) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCategory && !dialog.open) dialog.showModal();
    if (!selectedCategory && dialog.open) dialog.close();
  }, [selectedCategory]);

  const closeDialog = () => onSelectCategory(null);
  const selectEvent = (event) => {
    closeDialog();
    onSelectEvent(event);
  };

  return (
    <section className="genres-container" aria-label="Géneros de eventos">
      <div className="categories" role="group" aria-label="Filtrar eventos por género">
        <button
          className={`category-item${selectedCategory === null ? ' is-active' : ''}`}
          type="button"
          aria-pressed={selectedCategory === null}
          aria-controls="event-results"
          onClick={() => onSelectCategory(null)}
        >
          <div className="category-badge" aria-hidden="true">🎟️</div>
          <span>Todos</span>
        </button>
        {categories.map((category) => (
          <button
            className="category-item"
            type="button"
            aria-haspopup="dialog"
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
          >
            <div className="category-badge" aria-hidden="true">{category.icon}</div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      <dialog
        className="genre-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={closeDialog}
        onClick={(clickEvent) => {
          if (clickEvent.target === clickEvent.currentTarget) closeDialog();
        }}
      >
        {selectedCategory && (
          <>
            <div className="genre-dialog-header">
              <div>
                <span className="ticket-badge">Género seleccionado</span>
                <h2 id={titleId}>Eventos de {selectedCategory}</h2>
                <p>
                  {events.length} {events.length === 1 ? 'evento disponible' : 'eventos disponibles'}
                </p>
              </div>
              <button
                className="ticket-dialog-close"
                type="button"
                aria-label="Cerrar eventos del género"
                onClick={closeDialog}
              >
                ×
              </button>
            </div>
            {events.length > 0 ? (
              <div className="ticket-grid genre-dialog-grid">
                {events.map((event) => (
                  <TarjetaBoleto
                    event={event}
                    key={event.name}
                    onSelect={() => selectEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <p className="ticket-empty-state" role="status">
                No hay eventos disponibles en este género por el momento.
              </p>
            )}
          </>
        )}
      </dialog>
    </section>
  );
}

export default Generos;
