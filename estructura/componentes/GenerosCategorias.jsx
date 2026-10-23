import React from 'react';
import { categories } from '../../src/data/events.js';

function GenreNavigation() {
  return (
    <section className="categories" aria-label="Categorías de eventos">
      {categories.map((category) => (
        <article className="category-item" aria-label={category.name} key={category.name}>
          <div className="category-badge" aria-hidden="true">{category.icon}</div>
          <span>{category.name}</span>
        </article>
      ))}
    </section>
  );
}

export default GenreNavigation;
