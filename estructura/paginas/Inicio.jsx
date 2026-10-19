import React, { useState } from 'react';
import EventCatalog from '../componentes/Carrusel.jsx';
import PurchaseWindow, { parseTicketPrice } from '../componentes/CompraSimulada.jsx';
import Footer from '../componentes/PiePagina.jsx';
import Generos from '../componentes/Generos.jsx';
import Header from '../componentes/Encabezado.jsx';
import SearchBar from '../componentes/BarraBusqueda.jsx';
import EventDetails from '../componentes/DetallesEvento.jsx';
import ListaBoletos from '../componentes/ListaBoletos.jsx';
import { normalizeSearchText, ticketEvents } from '../../src/data/events.js';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const normalizedQuery = normalizeSearchText(searchQuery);
  const categoryAliases = {
    peliculas: ['cine', 'pelicula'],
    conciertos: ['concierto']
  };
  const visibleEvents = ticketEvents.filter((event) => {
    const matchesSearch = !normalizedQuery
      || normalizeSearchText(`${event.name} ${event.originalTitle || ''} ${event.category}`)
        .includes(normalizedQuery);
    const normalizedCategory = normalizeSearchText(event.category);
    const selectedCategoryKey = normalizeSearchText(selectedCategory || '');
    const matchesCategory = !selectedCategory
      || [selectedCategoryKey, ...(categoryAliases[selectedCategoryKey] || [])]
        .includes(normalizedCategory);

    return matchesSearch && matchesCategory;
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    setSelectedEvent(null);
  };
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setSelectedEvent(null);
  };
  const handleAddToCart = (event) => {
    if (parseTicketPrice(event.price) === null) return;

    setCartItems((items) => {
      const existingItem = items.find((item) => item.event.name === event.name);
      if (existingItem) {
        return items.map((item) => (
          item.event.name === event.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      }

      return [...items, { event, quantity: 1 }];
    });
  };
  const handleRemoveFromCart = (eventName) => {
    setCartItems((items) => items.filter((item) => item.event.name !== eventName));
  };

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main className="container">
        <SearchBar
          events={ticketEvents}
          onSearch={handleSearch}
          onSelectEvent={setSelectedEvent}
        />
        <Generos
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          events={visibleEvents}
          onSelectEvent={setSelectedEvent}
        />
        <EventCatalog />
        <ListaBoletos
          events={visibleEvents}
          onSelectEvent={setSelectedEvent}
          selectedCategory={selectedCategory}
        />
      </main>
      <PurchaseWindow
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onClear={() => setCartItems([])}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <EventDetails
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </>
  );
}

export default HomePage;
