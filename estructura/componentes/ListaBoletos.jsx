import React from 'react';
import { ticketEvents } from '../../src/data/events.js';
import TarjetaBoleto from './TarjetaBoleto.jsx';

function ListaBoletos({ events = ticketEvents, onSelectEvent }) {
  return (
    <section className="tickets" aria-label="Lista de boletos">
      <div className="section-header">
        <div className="section-heading">
          <span className="heading-mark" aria-hidden="true"></span>
          <h2>Lista de boletos</h2>
        </div>
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
    </section>
  );
}

export default ListaBoletos;
