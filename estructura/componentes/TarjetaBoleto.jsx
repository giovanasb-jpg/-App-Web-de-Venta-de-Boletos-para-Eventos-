import React from 'react';

function TarjetaBoleto({ event, onSelect }) {
  return (
    <article className="ticket-card" aria-label={event.name}>
      <button
        className="ticket-card-open"
        type="button"
        aria-haspopup="dialog"
        onClick={onSelect}
      >
        <div
          className="ticket-image"
          style={{ backgroundImage: `url('${event.image}')` }}
        ></div>
        <div className="ticket-body">
          <span className="ticket-badge">{event.genre || event.category}</span>
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
      </button>
    </article>
  );
}

export default TarjetaBoleto;
