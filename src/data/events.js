const ticketProData = {
  categories: [
    { name: 'Películas', icon: '🎬' },
    { name: 'Teatro', icon: '🎭' },
    { name: 'Conciertos', icon: '🎵' },
    { name: 'Deportes', icon: '⚽' },
    { name: 'Comedia', icon: '🎤' },
    { name: 'Stand Up', icon: '✨' },
    { name: 'Arte y Cultura', icon: '🎨' },
    { name: 'Eventos Especiales', icon: '🎟️' }
  ],
  posterEvents: [
    {
      title: 'Voces del desierto',
      genre: 'Concierto',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Luna en vivo',
      genre: 'Festival',
      image:
        'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Teatro nocturno',
      genre: 'Teatro',
      image:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Clásicos en escena',
      genre: 'Arte',
      image:
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Noche de deporte',
      genre: 'Deportes',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Risas en directo',
      genre: 'Stand Up',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
    }
  ],
  ticketEvents: [
    {
      category: 'Cine',
      name: 'Dune: Parte dos',
      date: '12 ago 2026',
      venue: 'Cinemex Centro Histórico',
      priceLabel: 'Precio especial',
      price: '$420 MXN',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Teatro',
      name: 'La reina del espejo',
      date: '18 ago 2026',
      venue: 'Teatro Metropolitano',
      priceLabel: 'Precio medio',
      price: '$680 MXN',
      image:
        'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Concierto',
      name: 'Nocturna Live',
      date: '25 ago 2026',
      venue: 'Auditorio Nacional',
      priceLabel: 'Precio alto',
      price: '$980 MXN',
      image:
        'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=900&q=80'
    },
    {
      category: 'Deportes',
      name: 'Liga de verano',
      date: '02 sep 2026',
      venue: 'Estadio Monumental',
      priceLabel: 'Precio especial',
      price: '$540 MXN',
      image:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
    }
  ]
};

export const { categories, posterEvents, ticketEvents } = ticketProData;

window.TicketProData = ticketProData;
