import React, { useEffect, useRef } from 'react';
import { posterEvents } from '../../src/data/events.js';
import EventCard from './TarjetaCarrusel.jsx';

function EventCatalog() {
  const posterStripRef = useRef(null);

  useEffect(() => {
    const posterStrip = posterStripRef.current;
    if (!posterStrip || posterEvents.length <= 1) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let previousFrameTime = 0;
    let animationFrame;

    const getLoopDistance = () =>
      posterStrip.children[posterEvents.length].offsetLeft - posterStrip.children[0].offsetLeft;
    const getScrollStep = () =>
      posterStrip.children[1].offsetLeft - posterStrip.children[0].offsetLeft;

    const move = (direction) => {
      const loopDistance = getLoopDistance();
      if (loopDistance > 0) {
        posterStrip.scrollLeft =
          (posterStrip.scrollLeft + direction * getScrollStep() + loopDistance) % loopDistance;
      }
    };

    const [previousButton, nextButton] = posterStrip
      .closest('.poster-row')
      .querySelectorAll('.row-arrow');
    const handlePrevious = () => move(-1);
    const handleNext = () => move(1);
    const resetFrameTime = () => {
      previousFrameTime = 0;
    };

    previousButton.addEventListener('click', handlePrevious);
    nextButton.addEventListener('click', handleNext);

    const animate = (time) => {
      if (previousFrameTime && !document.hidden) {
        const elapsed = Math.min(time - previousFrameTime, 50);
        const loopDistance = getLoopDistance();
        if (loopDistance > 0) {
          posterStrip.scrollLeft = (posterStrip.scrollLeft + elapsed * 0.032) % loopDistance;
        }
      }
      previousFrameTime = time;
      animationFrame = window.requestAnimationFrame(animate);
    };

    if (!reducedMotion.matches) {
      animationFrame = window.requestAnimationFrame(animate);
    }

    document.addEventListener('visibilitychange', resetFrameTime);

    return () => {
      previousButton.removeEventListener('click', handlePrevious);
      nextButton.removeEventListener('click', handleNext);
      document.removeEventListener('visibilitychange', resetFrameTime);
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const hasLoop = posterEvents.length > 1;

  return (
    <section className="poster-row" aria-label="Galería de carteles de eventos">
      <button className="row-arrow" type="button" aria-label="Carteles anteriores">‹</button>
      <div className="poster-strip" ref={posterStripRef}>
        {posterEvents.map((event, index) => (
          <EventCard event={event} key={`poster-${index}`} />
        ))}
        {hasLoop && posterEvents.map((event, index) => (
          <EventCard event={event} isClone key={`poster-copy-${index}`} />
        ))}
      </div>
      <button className="row-arrow" type="button" aria-label="Carteles siguientes">›</button>
    </section>
  );
}

export default EventCatalog;
