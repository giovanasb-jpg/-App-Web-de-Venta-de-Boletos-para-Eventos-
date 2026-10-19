import React, { useEffect, useId, useRef, useState } from 'react';
import { parseTicketPrice } from './CompraSimulada.jsx';

function EventDetails({ event, onClose, onAddToCart }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    setAddedToCart(false);
    if (event && !dialog.open) dialog.showModal();
    if (!event && dialog.open) dialog.close();
  }, [event]);

  if (!event) return null;

  const details = [
    ['Estreno', event.releaseDate || event.date],
    ['Duración', event.duration],
    ['Dirección', event.director],
    ['Reparto', event.cast],
    ['Lugar', event.venue],
    ['Precio', event.price]
  ].filter(([, value]) => value);

  return (
    <dialog
      className="ticket-dialog"
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(clickEvent) => {
        if (clickEvent.target === clickEvent.currentTarget) onClose();
      }}
    >
      <div className="ticket-dialog-content">
        <div
          className="ticket-dialog-poster"
          style={{ backgroundImage: `url('${event.image}')` }}
          role="img"
          aria-label={`Imagen de ${event.name}`}
        />
        <div className="ticket-dialog-body">
          <button
            className="ticket-dialog-close"
            type="button"
            aria-label="Cerrar detalles"
            onClick={onClose}
          >
            ×
          </button>
          <span className="ticket-badge">{event.category}</span>
          <h2 id={titleId}>{event.name}</h2>
          {event.originalTitle && <p className="ticket-original-title">{event.originalTitle}</p>}
          {event.synopsis && <p className="ticket-synopsis">{event.synopsis}</p>}
          <dl className="ticket-detail-list">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {event.posterSearchUrl && (
            <a className="ticket-poster-link" href={event.posterSearchUrl} target="_blank" rel="noreferrer">
              Ver póster en Google Imágenes
            </a>
          )}
          <button
            className="cart-add-button"
            type="button"
            disabled={parseTicketPrice(event.price) === null}
            onClick={() => {
              onAddToCart(event);
              setAddedToCart(true);
            }}
          >
            {parseTicketPrice(event.price) === null
              ? 'Precio no disponible'
              : addedToCart
                ? 'Agregado al carrito'
                : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default EventDetails;
