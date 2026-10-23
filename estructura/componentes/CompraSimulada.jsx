import React, { useEffect, useId, useRef, useState } from 'react';

export function parseTicketPrice(price) {
  const match = /^\$\s*(\d+(?:,\d{3})*(?:\.\d{1,2})?)\s*MXN$/i.exec(price?.trim() || '');
  return match ? Number(match[1].replace(/,/g, '')) : null;
}

const currencyFormatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN'
});

export function createPurchaseRecord(event, quantity = 1) {
  const price = parseTicketPrice(event.price);
  if (price === null) return null;

  return {
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    event,
    quantity,
    total: price * quantity,
    purchasedAt: new Date().toISOString(),
    folio: `TP-${Date.now().toString(36).toUpperCase()}`
  };
}

function PurchaseWindow({
  items,
  history,
  activeTab,
  onTabChange,
  onRemove,
  onClear,
  onFinalize,
  onDeleteHistory,
  isOpen,
  onClose
}) {
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

  const formattedDate = (value) => new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));

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
          <h2 id={titleId}>{activeTab === 'cart' ? 'Tu carrito' : 'Historial de compras'}</h2>
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

      <div className="purchase-tabs" role="tablist" aria-label="Carrito e historial">
        <button
          className={activeTab === 'cart' ? 'purchase-tab active' : 'purchase-tab'}
          type="button"
          role="tab"
          aria-selected={activeTab === 'cart'}
          onClick={() => onTabChange('cart')}
        >
          Carrito ({items.reduce((count, item) => count + item.quantity, 0)})
        </button>
        <button
          className={activeTab === 'history' ? 'purchase-tab active' : 'purchase-tab'}
          type="button"
          role="tab"
          aria-selected={activeTab === 'history'}
          onClick={() => onTabChange('history')}
        >
          Historial ({history.length})
        </button>
      </div>

      {activeTab === 'cart' && (items.length === 0 ? (
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
          <button className="cart-checkout-button" type="button" onClick={onFinalize}>
            Finalizar compra
          </button>
          <p className="cart-notice">Compra simulada: no se realizará ningún cobro.</p>
        </>
      ))}

      {activeTab === 'history' && (history.length === 0 ? (
        <p className="cart-empty-state">Aún no hay compras en tu historial.</p>
      ) : (
        <ul className="cart-items purchase-history-list">
          {history.map((purchase) => (
            <li className="cart-item purchase-history-item" key={purchase.id}>
              <div className="cart-item-info">
                <h3>{purchase.event.name}</h3>
                <p>{purchase.event.date} · {purchase.event.venue}</p>
                <span>
                  {purchase.quantity} {purchase.quantity === 1 ? 'boleto' : 'boletos'} · {formattedDate(purchase.purchasedAt)}
                </span>
                <small>Folio {purchase.folio}</small>
              </div>
              <div className="cart-item-actions">
                <strong>{currencyFormatter.format(purchase.total)}</strong>
                <button
                  className="cart-remove-button"
                  type="button"
                  onClick={() => onDeleteHistory(purchase.id)}
                  aria-label={`Eliminar boleto del historial: ${purchase.event.name}`}
                >
                  Eliminar boleto del historial
                </button>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </dialog>
  );
}

export default PurchaseWindow;
