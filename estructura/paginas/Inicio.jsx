import React, { useState } from 'react';
import EventCatalog from '../componentes/Carrusel.jsx';
import Footer from '../componentes/PiePagina.jsx';
import GenreNavigation from '../componentes/GenerosCategorias.jsx';
import Header from '../componentes/Encabezado.jsx';
import SearchBar from '../componentes/BarraBusqueda.jsx';
import EventDetails from '../componentes/DetallesEvento.jsx';
import ListaBoletos from '../componentes/ListaBoletos.jsx';
import { normalizeSearchText, ticketEvents } from '../../src/data/events.js';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const normalizedQuery = normalizeSearchText(searchQuery);
  const visibleEvents = normalizedQuery
    ? ticketEvents.filter((event) =>
        normalizeSearchText(`${event.name} ${event.originalTitle || ''} ${event.category}`)
          .includes(normalizedQuery)
      )
    : ticketEvents;
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedEvent(null);
  };

  return (
    <>
      <Header />
      <main className="container">
        <SearchBar
          events={ticketEvents}
          onSearch={handleSearch}
          onSelectEvent={setSelectedEvent}
        />
        <GenreNavigation />
        <EventCatalog />
        <ListaBoletos events={visibleEvents} onSelectEvent={setSelectedEvent} />
      </main>
      <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      <Footer />
    </>
  );
}

export default HomePage;
