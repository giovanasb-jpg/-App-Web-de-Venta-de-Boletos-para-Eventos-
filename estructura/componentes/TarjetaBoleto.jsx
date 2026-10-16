import React from 'react';

function TarjetaBoleto({ event }) {
  return (
    <article className="ticket-card" aria-label={event.name}>
      <div
        className="ticket-image"
        style={{ backgroundImage: `url('${event.image}')` }}
      ></div>
      <div className="ticket-body">
        <span className="ticket-badge">{event.category}</span>
        <h3>{event.name}</h3>
        <div className="ticket-row">
          <span aria-hidden="true">📅</span>
          <span>{event.date}</span>
        </div>
        <div className="ticket-row">
          <span aria-hidden="true">📍</span>
          <span>{event.venue}</span>
        </div>
        <div className="ticket-bottom">
          <span className="price-tag">{event.priceLabel}</span>
          <strong className="price-value">{event.price}</strong>
        </div>
      </div>
    </article>
  );
}

export default TarjetaBoleto;
