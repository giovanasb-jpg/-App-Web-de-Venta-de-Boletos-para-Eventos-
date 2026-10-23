import React from 'react';

function EventCard({ event, isClone = false }) {
  return (
    <article
      className="poster-card"
      style={{ backgroundImage: `url('${event.image}')` }}
      aria-label={event.title}
      aria-hidden={isClone || undefined}
    >
      <div className="poster-info">
        <span>{event.genre}</span>
        <strong>{event.title}</strong>
      </div>
    </article>
  );
}

export default EventCard;
