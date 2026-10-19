import React from 'react';
import { ticketEvents } from '../../src/data/events.js';
import TarjetaBoleto from './TarjetaBoleto.jsx';

function ListaBoletos({ events = ticketEvents, onSelectEvent, selectedCategory }) {
  return (
    <section
      className="tickets"
      id="event-results"
      role="region"
      aria-label={selectedCategory ? `Eventos de ${selectedCategory}` : 'Lista de boletos'}
      tabIndex={-1}
    >
      <div className="section-header">
        <div className="section-heading">
          <span className="heading-mark" aria-hidden="true"></span>
          <h2>{selectedCategory ? `Eventos de ${selectedCategory}` : 'Lista de boletos'}</h2>
        </div>
        <span className="view-all" aria-live="polite">
          {events.length} {events.length === 1 ? 'evento' : 'eventos'}
        </span>
      </div>
      <div className="ticket-grid">
        {events.map((event) => (
          <TarjetaBoleto
            event={event}
            key={event.name}
            onSelect={() => onSelectEvent?.(event)}
          />
        ))}
      </div>
      {events.length === 0 && (
        <p className="ticket-empty-state" role="status">
          No hay eventos disponibles en este género por el momento.
        </p>
      )}
    </section>
  );
}

export default ListaBoletos;
