import React, { useEffect } from 'react';
import HomePage from './paginas/Inicio.jsx';

function App() {
  useEffect(() => {
    const existingState = window.TicketProStorage.read('ticketpro-demo-state', []);
    if (!existingState.length) {
      window.TicketProStorage.write('ticketpro-demo-state', [
        { status: 'ready', sprint: 'base-visual' }
      ]);
    }
  }, []);

  return <HomePage />;
}

export default App;
