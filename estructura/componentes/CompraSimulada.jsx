import React, { useEffect, useId, useRef } from 'react';

export function parseTicketPrice(price) {
  const match = /^\$\s*(\d+(?:,\d{3})*(?:\.\d{1,2})?)\s*MXN$/i.exec(price?.trim() || '');
  return match ? Number(match[1].replace(/,/g, '')) : null;
}

const currencyFormatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN'
});

function PurchaseWindow({ items, onRemove, onClear, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const total = items.reduce((sum, item) => {
    const price = parseTicketPrice(item.event.price);
    return sum + (price ?? 0) * item.quantity;
  }, 0);

  return (
    <dialog
      className="purchase-cart"
      id="carrito"
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(clickEvent) => {
        if (clickEvent.target === clickEvent.currentTarget) onClose();
      }}
    >
      <div className="section-header">
        <div className="section-heading">
          <span className="heading-mark" aria-hidden="true"></span>
          <h2 id={titleId}>Tu carrito</h2>
        </div>
        <div className="cart-header-actions">
          {items.length > 0 && (
            <button className="cart-clear-button" type="button" onClick={onClear}>
              Vaciar carrito
            </button>
          )}
          <button
            className="ticket-dialog-close"
            type="button"
            aria-label="Cerrar carrito"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="cart-empty-state">Todavía no agregas boletos. Explora un evento y agrégalo desde sus especificaciones.</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map(({ event, quantity }) => {
              const price = parseTicketPrice(event.price);

              return (
                <li className="cart-item" key={event.name}>
                  <div className="cart-item-info">
                    <h3>{event.name}</h3>
                    <p>{event.date} · {event.venue}</p>
                    <span>{quantity} {quantity === 1 ? 'boleto' : 'boletos'} × {currencyFormatter.format(price ?? 0)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <strong>{currencyFormatter.format((price ?? 0) * quantity)}</strong>
                    <button
                      className="cart-remove-button"
                      type="button"
                      onClick={() => onRemove(event.name)}
                      aria-label={`Quitar ${event.name} del carrito`}
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-total" aria-live="polite">
            <span>Total</span>
            <strong>{currencyFormatter.format(total)}</strong>
          </div>
          <p className="cart-notice">Compra simulada: no se realizará ningún cobro.</p>
        </>
      )}
    </dialog>
  );
}

export default PurchaseWindow;
