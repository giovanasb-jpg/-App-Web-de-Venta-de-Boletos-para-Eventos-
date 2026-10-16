import React from 'react';
import EventCatalog from '../componentes/Carrusel.jsx';
import Footer from '../componentes/PiePagina.jsx';
import GenreNavigation from '../componentes/GenerosCategorias.jsx';
import Header from '../componentes/Encabezado.jsx';
import SearchBar from '../componentes/BarraBusqueda.jsx';
import ListaBoletos from '../componentes/ListaBoletos.jsx';

function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <SearchBar />
        <GenreNavigation />
        <EventCatalog />
        <ListaBoletos />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
