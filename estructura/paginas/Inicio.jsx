import React, { useEffect, useState } from 'react';
import EventCatalog from '../componentes/Carrusel.jsx';
import PurchaseWindow, {
  createPurchaseRecord,
  parseTicketPrice
} from '../componentes/CompraSimulada.jsx';
import Footer from '../componentes/PiePagina.jsx';
import Generos from '../componentes/Generos.jsx';
import Header from '../componentes/Encabezado.jsx';
import SearchBar from '../componentes/BarraBusqueda.jsx';
import EventDetails from '../componentes/DetallesEvento.jsx';
import LoginDialog from '../componentes/InicioSesion.jsx';
import ListaBoletos from '../componentes/ListaBoletos.jsx';
import { normalizeSearchText, ticketEvents } from '../../src/data/events.js';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartView, setCartView] = useState('cart');
  const [userName, setUserName] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(true);
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

  useEffect(() => {
    if (userName) {
      window.TicketProStorage.write(getHistoryKey(userName), purchaseHistory);
    }
  }, [purchaseHistory, userName]);

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
  const getHistoryKey = (name) => `ticketpro-purchase-history:${name.toLocaleLowerCase('es-MX')}`;
  const handleQuickPurchase = (event) => {
    const purchase = createPurchaseRecord(event);
    if (!purchase) return;

    setPurchaseHistory((history) => [purchase, ...history]);
    setSelectedEvent(null);
    setCartView('history');
    setIsCartOpen(true);
  };
  const handleFinalizePurchase = () => {
    const purchases = cartItems
      .map(({ event, quantity }) => createPurchaseRecord(event, quantity))
      .filter(Boolean);

    if (purchases.length === 0) return;

    setPurchaseHistory((history) => [...purchases, ...history]);
    setCartItems([]);
    setCartView('history');
  };
  const handleDeletePurchase = (purchaseId) => {
    setPurchaseHistory((history) => history.filter((purchase) => purchase.id !== purchaseId));
  };
  const handleSignOut = () => {
    setUserName('');
    setCartItems([]);
    setIsCartOpen(false);
    setSelectedEvent(null);
    setPurchaseHistory([]);
    setIsLoginOpen(true);
  };
  const handleLogin = (name) => {
    const savedHistory = window.TicketProStorage.read(getHistoryKey(name), []);
    setPurchaseHistory(Array.isArray(savedHistory) ? savedHistory : []);
    setUserName(name);
    setIsLoginOpen(false);
  };

  return (
    <>
      <Header
        cartCount={userName ? cartCount : 0}
        onOpenCart={() => {
          setCartView('cart');
          setIsCartOpen(true);
        }}
        userName={userName}
        onSignIn={() => setIsLoginOpen(true)}
        onSignOut={handleSignOut}
      />
      {userName && (
        <>
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
            history={purchaseHistory}
            activeTab={cartView}
            onTabChange={setCartView}
            onRemove={handleRemoveFromCart}
            onClear={() => setCartItems([])}
            onFinalize={handleFinalizePurchase}
            onDeleteHistory={handleDeletePurchase}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
          <EventDetails
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onAddToCart={handleAddToCart}
            onQuickPurchase={handleQuickPurchase}
          />
          <Footer />
        </>
      )}
      <LoginDialog isOpen={!userName && isLoginOpen} onLogin={handleLogin} />
    </>
  );
}

export default HomePage;
